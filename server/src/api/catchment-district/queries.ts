import { GraphQLContext } from "../../utils";
import {
  CatchmentDistrict,
  CreateCatchmentDistrictPayload,
  DeleteCatchmentDistrictPayload,
  MutationCreateCatchmentDistrictArgs,
  MutationDeleteCatchmentDistrictArgs,
  MutationUpdateCatchmentDistrictArgs,
  UpdateCatchmentDistrictPayload,
} from "../../libs/resolvers-types";

async function getCatchmentDistricts(
  id: string,
  context: GraphQLContext
): Promise<CatchmentDistrict[]> {
  const result = await context.prisma.catchmentProvince
    .findUnique({
      where: {
        id,
      },
    })
    .catchment_districts({
      include: {
        district: {
          select: {
            name: true,
            province: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  return result.map((value) => ({
    ...value,
    district_name: value.district.name,
    catchment_province_name: value.district.province.name,
  })) as CatchmentDistrict[];
}

async function getCatchmentDistrictById(
  id: string,
  context: GraphQLContext
): Promise<CatchmentDistrict> {
  const result = await context.prisma.catchmentDistrict.findUnique({
    where: {
      id,
    },
    include: {
      district: {
        select: {
          name: true,
          province: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  return {
    ...result,
    district_name: result?.district.name,
    catchment_province_name: result?.district.province.name,
  } as CatchmentDistrict;
}

async function createCatchmentDistrict(
  args: MutationCreateCatchmentDistrictArgs,
  context: GraphQLContext
) {
  const requiredInput = {
    district_id: args.input.district_id,
    catchment_province_id: args.input.catchment_province_id,
    created_by: context.user?.email,
    last_modified_by: context.user?.email,
  };
  const result = await context.prisma.catchmentDistrict.create({
    data: requiredInput,
    include: {
      district: {
        select: {
          name: true,
        },
      },
      catchment_province: {
        include: {
          province: true,
        },
      },
    },
  });
  const { district, catchment_province, ...rest } = result;
  const payload: CreateCatchmentDistrictPayload = {
    catchment_district: {
      ...rest,
      catchment_province_name: catchment_province.province.name,
      district_name: district.name,
    },
  };
  return payload;
}

async function updateCatchmentDistrict(
  args: MutationUpdateCatchmentDistrictArgs,
  context: GraphQLContext
) {
  const result = await context.prisma.catchmentDistrict.update({
    where: {
      id: args.input.id,
    },
    data: {
      disabled: args.input.update.disabled,
      last_modified_by: context.user?.email,
    },
    include: {
      district: {
        select: {
          name: true,
        },
      },
      catchment_province: {
        include: {
          province: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  const { district, catchment_province, ...rest } = result;
  const payload: UpdateCatchmentDistrictPayload = {
    catchment_district: {
      ...rest,
      catchment_province_name: catchment_province.province.name,
      district_name: district.name,
    },
  };

  return payload;
}

async function deleteCatchmentDistrict(
  args: MutationDeleteCatchmentDistrictArgs,
  context: GraphQLContext
) {
  const result = await context.prisma.catchmentDistrict.delete({
    where: {
      id: args.input.id,
    },
    include: {
      district: {
        select: {
          name: true,
        },
      },
      catchment_province: {
        include: {
          province: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  const { district, catchment_province, ...rest } = result;
  const payload: DeleteCatchmentDistrictPayload = {
    catchment_district: {
      ...rest,
      district_name: district.name,
      catchment_province_name: catchment_province.province.name,
    },
  };

  return payload;
}

export {
  getCatchmentDistricts,
  getCatchmentDistrictById,
  createCatchmentDistrict,
  updateCatchmentDistrict,
  deleteCatchmentDistrict,
};
