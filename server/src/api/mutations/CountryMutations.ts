import { GraphQLContext } from "../..";
import {
  CreateCountryPayload,
  MutationCreateCountryArgs,
  MutationUpdateCountryArgs,
  UpdateCountryInput,
} from "../../libs/resolvers-types";

async function createCountry(
  data: MutationCreateCountryArgs,
  context: GraphQLContext
): Promise<CreateCountryPayload> {
  const { name, code, created_by, last_modified_by } = data.input;

  const requiredInput = {
    code,
    name,
    created_by: created_by || "chaiwa",
    last_modified_by: last_modified_by || "chaiwa",
  };

  const country = await context.prisma.country.create({
    data: requiredInput,
  });

  return { country };
}

async function deleteCountry(id: string, context: GraphQLContext) {
  const country = await context.prisma.country.delete({
    where: {
      id,
    },
  });

  return { country };
}

async function updateCountry(
  args: MutationUpdateCountryArgs,
  context: GraphQLContext
) {
  const { input } = args;
  const { id, update } = input;
  const country = await context.prisma.country.update({
    where: {
      id,
    },
    data: {
      code: update.code || undefined,
      name: update.name || undefined,
    },
  });

  return {
    country,
  };
}

export { createCountry, deleteCountry, updateCountry };
