import { generateClientErrors, GraphQLContext } from '../../utils';
import {
  Country,
  CountryResult,
  MutationCreateCountryArgs,
  MutationDeleteCountryArgs,
  MutationUpdateCountryArgs,
} from '../../libs/resolvers-types';

async function getCountries(context: GraphQLContext): Promise<Country[]> {
  return context.prisma.country.findMany({});
}

async function getCountry(
  id: string,
  context: GraphQLContext
): Promise<CountryResult> {
  try {
    const country = await context.prisma.country.findUnique({
      where: {
        id,
      },
    });
    if (!country) {
      return {
        __typename: 'ApiNotFoundError',
        message: `The Country with the id ${id} does not exist.`,
      };
    }

    return {
      __typename: 'Country',
      ...country,
    };
  } catch (error) {
    return {
      __typename: 'ApiNotFoundError',
      message: `Failed to find Country with the id ${id}.`,
      errors: generateClientErrors(error),
    };
  }
}

async function resolveCountry(
  id: string,
  context: GraphQLContext
): Promise<Country | null> {
  const country = await context.prisma.country.findUnique({
    where: {
      id,
    },
  });
  return country;
}

async function createCountry(
  args: MutationCreateCountryArgs,
  context: GraphQLContext
): Promise<CountryResult> {
  try {
    const country = await context.prisma.country.create({
      data: {
        code: args.input.code.toUpperCase(),
        name: args.input.name,
        flag: args.input.flag,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });

    return {
      __typename: 'Country',
      ...country,
    };
  } catch (error) {
    return {
      __typename: 'ApiCreateError',
      message: `Failed to create ServiceArea.`,
      errors: generateClientErrors(error),
    };
  }
}

async function deleteCountry(
  args: MutationDeleteCountryArgs,
  context: GraphQLContext
): Promise<CountryResult> {
  try {
    const country = await context.prisma.country.delete({
      where: {
        id: args.input.id,
      },
    });

    return {
      __typename: 'Country',
      ...country,
    };
  } catch (error) {
    return {
      __typename: 'ApiDeleteError',
      message: `Failed to delete Country with id ${args.input.id}.`,
      errors: generateClientErrors(error, 'id'),
    };
  }
}

async function updateCountry(
  args: MutationUpdateCountryArgs,
  context: GraphQLContext
): Promise<CountryResult> {
  try {
    const country = await context.prisma.country.update({
      where: {
        id: args.input.id,
      },
      data: {
        code: args.input.update.code?.toUpperCase() || undefined,
        name: args.input.update.name || undefined,
        last_modified_by: args.input.update ? context.user.email : undefined,
      },
    });
    return {
      __typename: 'Country',
      ...country,
    };
  } catch (error) {
    return {
      __typename: 'ApiUpdateError',
      message: `Failed to update Country with id ${args.input.id}.`,
      errors: generateClientErrors(error, 'id'),
    };
  }
}

export {
  getCountries,
  getCountry,
  createCountry,
  deleteCountry,
  updateCountry,
  resolveCountry,
};
