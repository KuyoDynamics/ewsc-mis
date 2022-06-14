import { GraphQLContext } from "../../utils";
import {
  MutationCreateProvinceArgs,
  MutationUpdateProvinceArgs,
} from "../../libs/resolvers-types";

function getProvinceById(id: string, context: GraphQLContext) {
  return context.prisma.province.findUnique({
    where: {
      id,
    },
  });
}

function getCountryByProvinceId(id: string, context: GraphQLContext) {
  return getProvinceById(id, context).country();
}

// Mutations
async function createProvince(
  args: MutationCreateProvinceArgs,
  context: GraphQLContext
) {
  const requiredInput = {
    code: args.input.code,
    name: args.input.name,
    country_id: args.input.country_id,
    created_by: context.user?.email,
    last_modified_by: context.user?.email,
  };
  const province = await context.prisma.province.create({
    data: requiredInput,
  });

  return { province };
}

async function deleteProvince(id: string, context: GraphQLContext) {
  const province = await context.prisma.province.delete({
    where: {
      id,
    },
  });

  return { province };
}

async function updateProvince(
  args: MutationUpdateProvinceArgs,
  context: GraphQLContext
) {
  const province = await context.prisma.province.update({
    where: {
      id: args.input.id,
    },
    data: {
      name: args.input.update.name || undefined,
      code: args.input.update.code || undefined,
      last_modified_by: context.user?.email,
    },
  });

  return { province };
}

export {
  getCountryByProvinceId,
  getProvinceById,
  createProvince,
  updateProvince,
  deleteProvince,
};
