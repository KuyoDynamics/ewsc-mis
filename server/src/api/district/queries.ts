import { generateClientErrors, GraphQLContext } from '../../utils';
import {
  CatchmentDistrict,
  District,
  DistrictResult,
  MutationCreateDistrictArgs,
  MutationUpdateDistrictArgs,
} from '../../libs/resolvers-types';

async function resolveDistrict(
  id: string,
  context: GraphQLContext
): Promise<District | null> {
  const district = await context.prisma.district.findUnique({
    where: {
      id,
    },
  });
  return district;
}

async function getDistrict(
  id: string,
  context: GraphQLContext
): Promise<DistrictResult> {
  try {
    const district = await context.prisma.district.findUnique({
      where: {
        id,
      },
    });

    if (!district) {
      return {
        __typename: 'ApiNotFoundError',
        message: `The District with the id ${id} does not exist.`,
      };
    }

    return {
      __typename: 'District',
      ...district,
    };
  } catch (error) {
    return {
      __typename: 'ApiNotFoundError',
      message: `Failed to find District with the id ${id}.`,
      errors: generateClientErrors(error),
    };
  }
}

async function getDistricts(
  province_id: string,
  context: GraphQLContext
): Promise<District[]> {
  const districts = await context.prisma.province
    .findUnique({
      where: {
        id: province_id,
      },
    })
    .districts();
  return districts;
}

async function getOrganisationsInDistrict(
  id: string,
  context: GraphQLContext
): Promise<CatchmentDistrict[]> {
  const organisations_in_district = await context.prisma.district
    .findUnique({
      where: {
        id,
      },
    })
    .organisations_in_district();
  return organisations_in_district as CatchmentDistrict[];
}

async function createDistrict(
  args: MutationCreateDistrictArgs,
  context: GraphQLContext
): Promise<DistrictResult> {
  try {
    const district = await context.prisma.district.create({
      data: {
        code: args.input.code,
        name: args.input.name,
        province_id: args.input.province_id,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });

    return {
      __typename: 'District',
      ...district,
    };
  } catch (error) {
    return {
      __typename: 'ApiCreateError',
      message: `Failed to create District.`,
      errors: generateClientErrors(error),
    };
  }
}

async function updateDistrict(
  args: MutationUpdateDistrictArgs,
  context: GraphQLContext
): Promise<DistrictResult> {
  try {
    const district = await context.prisma.district.update({
      where: {
        id: args.input.id,
      },
      data: {
        name: args.input.update.name || undefined,
        code: args.input.update.code || undefined,
        last_modified_by: args.input.update ? context.user.email : undefined,
      },
    });

    return {
      __typename: 'District',
      ...district,
    };
  } catch (error) {
    return {
      __typename: 'ApiUpdateError',
      message: `Failed to update District with id ${args.input.id}.`,
      errors: generateClientErrors(error, 'id'),
    };
  }
}

async function deleteDistrict(
  id: string,
  context: GraphQLContext
): Promise<DistrictResult> {
  try {
    const district = await context.prisma.district.delete({
      where: {
        id,
      },
    });

    return {
      __typename: 'District',
      ...district,
    };
  } catch (error) {
    return {
      __typename: 'ApiDeleteError',
      message: `Failed to delete District with id ${id}.`,
      errors: generateClientErrors(error, 'id'),
    };
  }
}

export {
  getDistrict,
  getDistricts,
  getOrganisationsInDistrict,
  createDistrict,
  updateDistrict,
  deleteDistrict,
  resolveDistrict,
};
