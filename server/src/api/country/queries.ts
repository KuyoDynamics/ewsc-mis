import { GraphQLContext } from "../..";
import {
  MutationCreateCountryArgs,
  MutationDeleteCountryArgs,
  MutationUpdateCountryArgs,
} from "../../libs/resolvers-types";

function getCountries(context: GraphQLContext) {
  console.log("Chaiwa,is this called");
  return context.prisma.country.findMany({});
}
function getCountryById(id: string, context: GraphQLContext) {
  return context.prisma.country.findUnique({
    where: {
      id,
    },
  });
}

function getProvincesByCountryId(id: string, context: GraphQLContext) {
  return getCountryById(id, context).provinces();
}

function getOrganisationsByCountryId(id: string, context: GraphQLContext) {
  return getCountryById(id, context).organisations();
}
// Mutations
async function createCountry(
  args: MutationCreateCountryArgs,
  context: GraphQLContext
) {
  const { name, code } = args.input;

  const requiredInput = {
    code,
    name,
    created_by: context.user.email,
    last_modified_by: context.user.email,
  };

  const country = await context.prisma.country.create({
    data: requiredInput,
  });

  return { country };
}

async function deleteCountry(
  args: MutationDeleteCountryArgs,
  context: GraphQLContext
) {
  const country = await context.prisma.country.delete({
    where: {
      id: args.input.id,
    },
  });

  return { country };
}

async function updateCountry(
  args: MutationUpdateCountryArgs,
  context: GraphQLContext
) {
  const { code, name } = args.input.update;
  const country = await context.prisma.country.update({
    where: {
      id: args.input.id,
    },
    data: {
      code: code || undefined,
      name: name || undefined,
      last_modified_by: code || name ? context.user.email : undefined,
    },
  });
  return {
    country,
  };
}

export {
  getCountries,
  getProvincesByCountryId,
  getOrganisationsByCountryId,
  getCountryById,
  createCountry,
  deleteCountry,
  updateCountry,
};
