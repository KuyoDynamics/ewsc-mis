import { generateClientErrors, GraphQLContext } from '../../utils';
import {
  MutationCreateProvinceArgs,
  MutationUpdateProvinceArgs,
  Province,
  ProvinceResult,
} from '../../libs/resolvers-types';

async function getProvinces(
  country_id: string,
  context: GraphQLContext
): Promise<Province[]> {
  const provinces = await context.prisma.country
    .findUnique({
      where: {
        id: country_id,
      },
    })
    .provinces();

  return provinces as Province[];
}

async function getProvince(
  id: string,
  context: GraphQLContext
): Promise<ProvinceResult> {
  try {
    const province = await context.prisma.province.findUnique({
      where: {
        id,
      },
    });

    if (!province) {
      return {
        __typename: 'ApiNotFoundError',
        message: `The Province with the id ${id} does not exist.`,
      };
    }
    return {
      __typename: 'Province',
      ...province,
    };
  } catch (error) {
    return {
      __typename: 'ApiNotFoundError',
      message: `Failed to find Province with the id ${id}.`,
      errors: generateClientErrors(error),
    };
  }
}

async function resolveProvince(
  province_id: string,
  context: GraphQLContext
): Promise<Province> {
  const result = await context.prisma.province.findUnique({
    where: {
      id: province_id,
    },
  });
  return result as Province;
}

async function createProvince(
  args: MutationCreateProvinceArgs,
  context: GraphQLContext
): Promise<ProvinceResult> {
  try {
    const province = await context.prisma.province.create({
      data: {
        code: args.input.code,
        name: args.input.name,
        country_id: args.input.country_id,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });

    return {
      __typename: 'Province',
      ...province,
    };
  } catch (error) {
    return {
      __typename: 'ApiCreateError',
      message: `Failed to create Province.`,
      errors: generateClientErrors(error),
    };
  }
}

async function deleteProvince(
  id: string,
  context: GraphQLContext
): Promise<ProvinceResult> {
  try {
    const province = await context.prisma.province.delete({
      where: {
        id,
      },
    });

    return {
      __typename: 'Province',
      ...province,
    };
  } catch (error) {
    return {
      __typename: 'ApiDeleteError',
      message: `Failed to delete Province with id ${id}.`,
      errors: generateClientErrors(error, 'id'),
    };
  }
}

async function updateProvince(
  args: MutationUpdateProvinceArgs,
  context: GraphQLContext
): Promise<ProvinceResult> {
  try {
    const province = await context.prisma.province.update({
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
      __typename: 'Province',
      ...province,
    };
  } catch (error) {
    return {
      __typename: 'ApiUpdateError',
      message: `Failed to update Province with id ${args.input.id}.`,
      errors: generateClientErrors(error, 'id'),
    };
  }
}

export {
  createProvince,
  updateProvince,
  deleteProvince,
  getProvince,
  getProvinces,
  resolveProvince
};
