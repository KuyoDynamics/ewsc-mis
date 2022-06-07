import { GraphQLContext } from "../..";
import {
  CatchmentProvince,
  CreateCatchmentProvincePayload,
  DeleteCatchmentProvincePayload,
  MutationCreateCatchmentProvinceArgs,
  MutationDeleteCatchmentProvinceArgs,
  MutationUpdateCatchmentProvinceArgs,
  UpdateCatchmentProvincePayload,
} from "../../libs/resolvers-types";

async function getCatchmentProvinceById(
  id: string,
  context: GraphQLContext
): Promise<CatchmentProvince> {
  const result = await context.prisma.catchmentProvince.findUnique({
    where: {
      id,
    },
    include: {
      province: {
        select: {
          name: true,
        },
      },
      organisation: {
        select: {
          name: true,
        },
      },
    },
  });

  return {
    ...result,
    province_name: result?.province.name,
    organisation_name: result?.organisation.name,
  } as CatchmentProvince;
}

async function createCatchmentProvince(
  args: MutationCreateCatchmentProvinceArgs,
  context: GraphQLContext
) {
  const requiredInput = {
    province_id: args.input.province_id,
    organisation_id: args.input.organisation_id,
    created_by: context.user.email,
    last_modified_by: context.user.email,
  };
  const result = await context.prisma.catchmentProvince.create({
    data: requiredInput,
    include: {
      province: {
        select: {
          name: true,
        },
      },
      organisation: {
        select: {
          name: true,
        },
      },
    },
  });
  const { province, organisation, ...rest } = result;
  const payload: CreateCatchmentProvincePayload = {
    catchment_province: {
      ...rest,
      province_name: province.name,
      organisation_name: organisation.name,
    },
  };
  return payload;
}

async function updateCatchmentProvince(
  args: MutationUpdateCatchmentProvinceArgs,
  context: GraphQLContext
) {
  const result = await context.prisma.catchmentProvince.update({
    where: {
      id: args.input.id,
    },
    data: {
      active: args.input.update.active,
      last_modified_by: context.user.email,
    },
    include: {
      province: {
        select: {
          name: true,
        },
      },
      organisation: {
        select: {
          name: true,
        },
      },
    },
  });

  const { province, organisation, ...rest } = result;
  const payload: UpdateCatchmentProvincePayload = {
    catchment_province: {
      ...rest,
      province_name: province.name,
      organisation_name: organisation.name,
    },
  };

  return payload;
}

async function deleteCatchmentProvince(
  args: MutationDeleteCatchmentProvinceArgs,
  context: GraphQLContext
) {
  const result = await context.prisma.catchmentProvince.delete({
    where: {
      id: args.input.id,
    },
    include: {
      province: {
        select: {
          name: true,
        },
      },
      organisation: {
        select: {
          name: true,
        },
      },
    },
  });

  const { province, organisation, ...rest } = result;
  const payload: DeleteCatchmentProvincePayload = {
    catchment_province: {
      ...rest,
      province_name: province.name,
      organisation_name: organisation.name,
    },
  };

  return payload;
}

export {
  getCatchmentProvinceById,
  createCatchmentProvince,
  updateCatchmentProvince,
  deleteCatchmentProvince,
};
