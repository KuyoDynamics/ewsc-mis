import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createCountry,
  deleteCountry,
  getCountries,
  getCountry,
  getOrganisations,
  getProvinces,
  updateCountry,
} from "../queries";

const typeDefs = gql`
  type Country {
    id: ID!
    code: String!
    name: String!
    flag: Byte
    provinces: [Province!]
    organisations: [Organisation!]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  type Query {
    countries: [Country!]
    country(id: ID!): CountryResult!
  }

  type Mutation {
    createCountry(input: CreateCountryInput!): CountryResult!
    deleteCountry(input: DeleteCountryInput!): CountryResult!
    updateCountry(input: UpdateCountryInput!): CountryResult!
  }

  interface ApiError {
    message: String!
  }

  type ErrorField {
    field: String!
    message: String!
  }

  type ApiOperationError implements ApiError {
    message: String!
    errors: [ErrorField!]
  }

  type ApiBatchPayload {
    count: Int!
  }

  union ApiBatchPayloadResult = ApiBatchPayload | ApiOperationError

  type ApiNotFoundError implements ApiError {
    message: String!
    errors: [ErrorField!]
  }

  type ApiCreateError implements ApiError {
    message: String!
    errors: [ErrorField!]
  }

  type ApiUpdateError implements ApiError {
    message: String!
    errors: [ErrorField!]
  }

  type ApiDeleteError implements ApiError {
    message: String!
    errors: [ErrorField!]
  }

  type ApiLoginError implements ApiError {
    message: String!
    errors: [ErrorField!]
  }

  type ApiPasswordResetError implements ApiError {
    message: String!
    errors: [ErrorField!]
  }

  union CountryResult =
      Country
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError

  input CreateCountryInput {
    code: String!
    name: String!
    flag: Byte
    provinces: [CreateProvinceInput!]
    organisations: [CreateOrganisationInput!]
  }

  input DeleteCountryInput {
    id: ID!
  }

  input UpdateCountryInput {
    id: ID!
    update: CountryUpdateInput!
  }

  input CountryUpdateInput {
    name: String
    code: String
  }

  scalar DateTime
  scalar Byte
  scalar JWT
  scalar Float
  scalar Byte
`;

const resolvers: Resolvers = {
  Query: {
    countries: (_, _args, context) => getCountries(context),
    country: (_, args, context) => getCountry(args.id, context),
  },
  Mutation: {
    createCountry: (_, args, context) => createCountry(args, context),
    deleteCountry: (_, args, context) => deleteCountry(args, context),
    updateCountry: (_, args, context) => updateCountry(args, context),
  },
  Country: {
    provinces: async ({ id }, _args, context) => getProvinces(id, context),
    organisations: ({ id }, _args, context) => getOrganisations(id, context),
  },
};

export { typeDefs as CountryTypeDefs, resolvers as CountryResolvers };
