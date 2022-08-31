import { hash, compare } from 'bcrypt';
import { Request as JWTRequest } from 'express-jwt';
import { DistrictUserRoleType, PrismaClient, User } from '@prisma/client';
import { PubSub, PubSubEngine, PubSubOptions } from 'graphql-subscriptions';

import {
  ApiCreateError,
  ApiDeleteError,
  ApiNotFoundError,
  ApiOperationError,
  ApiUpdateError,
  ErrorField,
} from './libs/resolvers-types';
import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime';
import { AuthenticationError } from 'apollo-server-core';
async function encryptPassword(password: string) {
  return hash(password, 10);
}

async function isValidPassword(passwordText: string, passwordhash: string) {
  return compare(passwordText, passwordhash);
}

function addDays(date: Date, days: number) {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}

type GraphQLContext = {
  req: JWTRequest;
  user: User;
  prisma: PrismaClient;
  pubSub: PubSub;
};

async function createContext(
  req: JWTRequest | null,
  prismaClient: PrismaClient,
  pubSub: PubSub
): Promise<GraphQLContext> {
  let user;
  try {
    if (!req?.auth) {
      user = null;
    } else {
      user = await prismaClient.user.findUnique({
        where: {
          id: req.auth.sub,
        },
      });
    }
  } catch (error) {
    console.log('Failed to find user for createContext', error);
  }
  return {
    req,
    prisma: prismaClient,
    user,
    pubSub,
  } as GraphQLContext;
}

const PRISMA_ERROR_CODES: Record<string, string> = {
  P1000: 'Authentication failed against database server.',

  P1001: "Can't reach database server.",

  P1002: 'The database server was reached but timed out.',

  P1003: 'Database does not exist at file_path.',

  P1008: 'Operations timed out.',

  P1009: 'Database already exists on the database server.',

  P1010: 'User was denied access on the database.',
  P1011: 'Error opening a TLS connection.',
  P1012: 'Argumentis missing.',
  P1013: 'The provided database string is invalid.',

  P1014: 'The underlying {kind} for model does not exist.',

  P1015:
    'Your Prisma schema is using features that are not supported for the version of the database.',
  P1016: 'Your raw query had an incorrect number of parameters.',
  P1017: 'Server has closed the connection.',
  P2000: "The provided value for the column is too long for the column's type.",
  P2001: 'The record searched for in the where condition does not exist.',
  P2002: 'Unique constraint failed.',
  P2003: 'Foreign key constraint failed on the field',
  P2004: 'A constraint failed on the database.',
  P2005:
    "The value stored in the database for the field is invalid for the field's type.",
  P2006: 'The provided value for field is not valid.',
  P2007: 'Data validation error.',
  P2008: 'Failed to parse the query.',
  P2009: 'Failed to validate the query.',
  P2010: 'Raw query failed.',
  P2011: 'Null constraint violation on the constraint.',
  P2012: 'Missing a required value.',
  P2013: 'Missing the required argument for field.',
  P2014:
    'The change you are trying to make would violate the required relation between the models.',
  P2015: 'A related record could not be found.',
  P2016: 'Query interpretation error',
  P2017:
    'The records for relation between the parent and child models are not connected.',
  P2018: 'The required connected records were not found.',

  P2019: 'Input error.',
  P2020: 'Value out of range for the type.',
  P2021: 'The table does not exist in the current database.',
  P2022: 'The column does not exist in the current database.',
  P2023: 'Inconsistent column data',
  P2024: 'Timed out fetching a new connection from the connection pool.',
  P2025:
    'An operation failed because it depends on one or more records that were required but not found.',
  P2026:
    "The current database provider doesn't support a feature that the query used.",
  P2027: 'Multiple errors occurred on the database during query execution.',

  P2030: 'Cannot find a fulltext index to use for the search.',

  P2033:
    'A number used in the query does not fit into a 64 bit signed integer.',
  P3000: 'Failed to create database',
  P3001: 'Migration possible with destructive changes and possible data loss.',
  P3002: 'The attempted migration was rolled back.',

  P3003:
    'The format of migrations changed, the saved migrations are no longer valid',
  P3004:
    'The database is a system database, it should not be altered with prisma migrate.',

  P3005: 'The database schema is not empty.',

  P3006: 'Migration failed to apply cleanly to the shadow database',
  P3007:
    'Some of the requested preview features are not yet allowed in migration engine.',

  P3008: 'The migration is already recorded as applied in the database.',

  P3009:
    'migrate found failed migrations in the target database, new migrations will not be applied.',
  P3010: 'The name of the migration is too long.',
  P3011:
    'Migration cannot be rolled back because it was never applied to the database.',

  P3012: 'Migration cannot be rolled back because it is not in a failed state.',
  P3013: 'Datasource provider arrays are no longer supported in migrate.',

  P3014: 'Prisma Migrate could not create the shadow database.',

  P3015: 'Could not find the migration file.',

  P3016:
    'The fallback method for database resets failed, meaning Migrate could not clean up the database entirely.',

  P3017: 'The migration could not be found.',

  P3018:
    'A migration failed to apply. New migrations can not be applied before the error is recovered from',
  P3019:
    'The datasource provider specified in your schema does not match the one specified in the migration_lock.toml.',

  P3020: 'The automatic creation of shadow databases is disabled on Azure SQL.',

  P3021: 'Foreign keys cannot be created on this database.',

  P3022:
    'Direct execution of DDL (Data Definition Language) SQL statements is disabled on this database.',
  P4000: 'Introspection operation failed to produce a schema file.',

  P4001: 'The introspected database was empty',

  P4002: 'The schema of the introspected database was inconsistent.',
};

function prepareDistrictUserRolesForCreate(user_roles: DistrictUserRoleType[]) {
  return !user_roles?.length
    ? [DistrictUserRoleType.USER]
    : [...new Set([...user_roles, DistrictUserRoleType.USER])];
}

function prepareDistrictUserRolesForUpdate(
  new_user_roles: DistrictUserRoleType[] | undefined
) {
  return !new_user_roles?.length
    ? undefined
    : [...new Set([...new_user_roles, DistrictUserRoleType.USER])];
}

function generateClientErrors<T>(error: T, field_name?: string): ErrorField[] {
  let errorFields: ErrorField[] = [];
  console.log('Chaiwa, see this error', error);

  if (error instanceof PrismaClientKnownRequestError) {
    const err = error;
    const fields_list = error.meta?.target as string[];
    if (fields_list) {
      errorFields = fields_list.map((field) => ({
        field: field,
        message: PRISMA_ERROR_CODES[err.code],
      }));
    } else if (err.meta?.field_name) {
      errorFields = [
        {
          field: err.meta.field_name as string,
          message:
            (error.meta?.cause as string) ||
            (error.meta?.message as string) ||
            PRISMA_ERROR_CODES[err.code],
        },
      ];
    } else {
      errorFields = [
        {
          field: `${field_name}` || 'unknown',
          message:
            (error.meta?.cause as string) ||
            (error.meta?.message as string) ||
            PRISMA_ERROR_CODES[err.code],
        },
      ];
    }
  } else if (
    error instanceof PrismaClientUnknownRequestError ||
    error instanceof PrismaClientValidationError
  ) {
    errorFields = [
      {
        field: 'unknown',
        message: error.message,
      },
    ];
  } else if (error instanceof AuthenticationError) {
    errorFields = [
      {
        field: error.extensions.field || field_name || 'unknown',
        message: error.message,
      },
    ];
  } else {
    errorFields = [
      {
        field: 'unknown',
        message: 'Internal Server Error.',
      },
    ];
    // Send to Sentry,do not show the client the error
    console.log('Something wrong happened: ', error);
  }

  return errorFields;
}

function getApiErrors<T>(error?: T, field_name?: string) {
  console.log('Error: ', error);
  return {
    errors: error ? generateClientErrors(error, field_name) : undefined,
  };
}

function getApiNotFoundError<T>(
  model_name: string,
  id_value: string,
  error?: T
): ApiNotFoundError {
  return {
    __typename: 'ApiNotFoundError',
    message: `The ${model_name} with the id ${id_value} does not exist.`,
    ...getApiErrors(error, 'id'),
  };
}

function getApiCreateError<T>(model_name: string, error: T): ApiCreateError {
  return {
    __typename: 'ApiCreateError',
    message: `Failed to create ${model_name}.`,
    ...getApiErrors(error),
  };
}

function getApiBatchPayloadCreateError<T>(
  model_name: string,
  error: T
): ApiOperationError {
  return {
    __typename: 'ApiOperationError',
    message: `Failed to create ${model_name}.`,
    ...getApiErrors(error),
  };
}

function getApiUpdateError<T>(
  model_name: string,
  id_value: string,
  error?: T
): ApiUpdateError {
  return {
    __typename: 'ApiUpdateError',
    message: `Failed to update ${model_name} with id ${id_value}.`,
    ...getApiErrors(error, 'id'),
  };
}

function getApiDeleteError<T>(
  model_name: string,
  id_value: string,
  error?: T
): ApiDeleteError {
  console.log('Error', error);
  return {
    __typename: 'ApiDeleteError',
    message: `Failed to delete ${model_name} with id ${id_value}.`,
    ...getApiErrors(error, 'id'),
  };
}

export {
  encryptPassword,
  isValidPassword,
  addDays,
  GraphQLContext,
  createContext,
  PRISMA_ERROR_CODES,
  generateClientErrors,
  getApiCreateError,
  getApiNotFoundError,
  getApiUpdateError,
  getApiDeleteError,
  getApiBatchPayloadCreateError,
  prepareDistrictUserRolesForCreate,
  prepareDistrictUserRolesForUpdate,
};
