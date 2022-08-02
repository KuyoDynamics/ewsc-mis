import { generateClientErrors, GraphQLContext } from '../../utils';
import {
  CatchmentProvince,
  CatchmentProvinceResult,
  CatchmentProvinceView,
  MutationCreateCatchmentProvinceArgs,
  MutationDeleteCatchmentProvinceArgs,
  MutationUpdateCatchmentProvinceArgs,
} from '../../libs/resolvers-types';

async function getCatchmentProvinces(
  organisation_id: string,
  context: GraphQLContext
): Promise<CatchmentProvince[]> {
  return context.prisma.organisation
    .findUnique({
      where: {
        id: organisation_id,
      },
    })
    .catchment_provinces();
}

async function resolveCatchmentProvinces(
  organisation_id: string,
  context: GraphQLContext
): Promise<CatchmentProvinceView[]> {
  const result = await context.prisma.organisation.findUnique({
    where: {
      id: organisation_id,
    },
    include: {
      catchment_provinces: {
        include: {
          province: true,
        },
      },
    },
  });

  const catchmentProvincesView =
    result?.catchment_provinces.map((cp) => ({
      ...cp.province,
      disabled: cp.disabled,
      catchment_province_id: cp.id,
      organisation_id: cp.organisation_id,
    })) ?? null;
  return catchmentProvincesView as CatchmentProvinceView[];
}

async function getCatchmentProvince(
  id: string,
  context: GraphQLContext
): Promise<CatchmentProvinceResult> {
  try {
    const catchment_province =
      await context.prisma.catchmentProvince.findUnique({
        where: {
          id,
        },
      });

    if (!catchment_province) {
      return {
        __typename: 'ApiNotFoundError',
        message: `The CatchmentProvince with the id ${id}} does not exist.`,
      };
    }

    return {
      __typename: 'CatchmentProvince',
      ...catchment_province,
    };
  } catch (error) {
    return {
      __typename: 'ApiNotFoundError',
      message: `Failed to find CatchmentProvince with the id ${id}.`,
      errors: generateClientErrors(error),
    };
  }
}

async function createCatchmentProvince(
  args: MutationCreateCatchmentProvinceArgs,
  context: GraphQLContext
): Promise<CatchmentProvinceResult> {
  try {
    const catchment_province = await context.prisma.catchmentProvince.create({
      data: {
        province_id: args.input.province_id,
        organisation_id: args.input.organisation_id,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });
    return {
      __typename: 'CatchmentProvince',
      ...catchment_province,
    };
  } catch (error) {
    return {
      __typename: 'ApiCreateError',
      message: `Failed to create CatchmentProvince.`,
      errors: generateClientErrors(error),
    };
  }
}

async function updateCatchmentProvince(
  args: MutationUpdateCatchmentProvinceArgs,
  context: GraphQLContext
): Promise<CatchmentProvinceResult> {
  try {
    const catchment_province = await context.prisma.catchmentProvince.update({
      where: {
        id: args.input.id,
      },
      data: {
        disabled: args.input.update.disabled || undefined,
        last_modified_by: args.input.update ? context.user.email : undefined,
      },
    });
    return {
      __typename: 'CatchmentProvince',
      ...catchment_province,
    };
  } catch (error) {
    return {
      __typename: 'ApiUpdateError',
      message: `Failed to update CatchmentProvince with id ${args.input.id}.`,
      errors: generateClientErrors(error, 'id'),
    };
  }
}

async function deleteCatchmentProvince(
  args: MutationDeleteCatchmentProvinceArgs,
  context: GraphQLContext
): Promise<CatchmentProvinceResult> {
  try {
    const catchment_province = await context.prisma.catchmentProvince.delete({
      where: {
        id: args.input.id,
      },
    });
    return {
      __typename: 'CatchmentProvince',
      ...catchment_province,
    };
  } catch (error) {
    return {
      __typename: 'ApiDeleteError',
      message: `Failed to delete CatchmentProvince with id ${args.input.id}.`,
      errors: generateClientErrors(error, 'id'),
    };
  }
}

export {
  getCatchmentProvince,
  getCatchmentProvinces,
  createCatchmentProvince,
  updateCatchmentProvince,
  deleteCatchmentProvince,
  resolveCatchmentProvinces,
};
