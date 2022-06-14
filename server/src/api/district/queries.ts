import { GraphQLContext } from "../../utils";
import {
  MutationCreateDistrictArgs,
  MutationUpdateDistrictArgs,
} from "../../libs/resolvers-types";

function getDistrictById(id: string, context: GraphQLContext) {
  return context.prisma.district.findUnique({
    where: {
      id,
    },
  });
}

function getProvinceDistricts(id: string, context: GraphQLContext) {
  return context.prisma.province
    .findUnique({
      where: {
        id,
      },
    })
    .districts();
}

function getOrganisationsInDistrict(id: string, context: GraphQLContext) {
  return context.prisma.district
    .findUnique({
      where: {
        id,
      },
    })
    .organisations_in_district();
}

function getDistrictsByProvinceId(id: string, context: GraphQLContext) {
  return getProvinceDistricts(id, context);
}

function getDistrictProvince(id: string, context: GraphQLContext) {
  return getDistrictById(id, context).province();
}

// Mutations

async function createDistrict(
  args: MutationCreateDistrictArgs,
  context: GraphQLContext
) {
  const requiredInput = {
    code: args.input.code,
    name: args.input.name,
    province_id: args.input.province_id,
    created_by: context.user?.email,
    last_modified_by: context.user?.email,
  };
  const district = await context.prisma.district.create({
    data: requiredInput,
  });

  return {
    district,
  };
}

async function updateDistrict(
  args: MutationUpdateDistrictArgs,
  context: GraphQLContext
) {
  const district = await context.prisma.district.update({
    where: {
      id: args.input.id,
    },
    data: {
      name: args.input.update.name || undefined,
      code: args.input.update.code || undefined,
      last_modified_by: context.user?.email,
    },
  });

  return { district };
}

async function deleteDistrict(id: string, context: GraphQLContext) {
  const district = await context.prisma.district.delete({
    where: {
      id,
    },
  });

  return { district };
}

export {
  getDistrictProvince,
  getDistrictById,
  getDistrictsByProvinceId,
  getOrganisationsInDistrict,
  createDistrict,
  updateDistrict,
  deleteDistrict,
};
