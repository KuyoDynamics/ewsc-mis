import {
  MutationCreateResidenceArgs,
  MutationUpdateResidenceArgs,
  QueryResidenceArgs,
  QueryResidencesArgs,
  Residence,
  MutationDeleteResidenceArgs,
  ResidenceResult,
} from "../../libs/resolvers-types";
import { generateClientErrors, GraphQLContext } from "../../utils";

async function getResidence(
  args: QueryResidenceArgs,
  context: GraphQLContext
): Promise<ResidenceResult> {
  try {
    const residence = await context.prisma.residence.findUnique({
      where: {
        id: args.id,
      },
    });

    if (!residence) {
      return {
        __typename: "ApiNotFoundError",
        message: `The Residence with the id ${args.id}} does not exist.`,
      };
    }

    return {
      __typename: "Residence",
      ...residence,
    } as ResidenceResult;
  } catch (error) {
    return {
      __typename: "ApiNotFoundError",
      message: `Failed to find Residence with the id ${args.id}.`,
      errors: generateClientErrors(error),
    };
  }
}

async function getResidences(
  args: QueryResidencesArgs,
  context: GraphQLContext
): Promise<Residence[]> {
  const result = await context.prisma.district
    .findUnique({
      where: {
        id: args.district_id,
      },
    })
    .residences();
  return result as Residence[];
}

async function createResidence(
  args: MutationCreateResidenceArgs,
  context: GraphQLContext
): Promise<ResidenceResult> {
  try {
    const residence = await context.prisma.residence.create({
      data: {
        name: args.input.name,
        cost_classification: args.input.cost_classification,
        district_id: args.input.district_id,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });
    return {
      __typename: "Residence",
      ...residence,
    } as ResidenceResult;
  } catch (error) {
    return {
      __typename: "ApiCreateError",
      message: `Failed to create Residence.`,
      errors: generateClientErrors(error),
    };
  }
}

async function updateResidence(
  args: MutationUpdateResidenceArgs,
  context: GraphQLContext
): Promise<ResidenceResult> {
  try {
    const residence = await context.prisma.residence.update({
      where: {
        id: args.input.id,
      },
      data: {
        name: args.input.update.name || undefined,
        cost_classification: args.input.update.cost_classification || undefined,
        district_id: args.input.update.district_id || undefined,
        last_modified_by: context.user.email,
      },
    });

    return {
      __typename: "Residence",
      ...residence,
    } as ResidenceResult;
  } catch (error) {
    return {
      __typename: "ApiUpdateError",
      message: `Failed to update Residence with id ${args.input.id}.`,
      errors: generateClientErrors(error, "id"),
    };
  }
}

async function deleteResidence(
  args: MutationDeleteResidenceArgs,
  context: GraphQLContext
): Promise<ResidenceResult> {
  try {
    const residence = await context.prisma.residence.delete({
      where: {
        id: args.input.id,
      },
    });

    return {
      __typename: "Residence",
      ...residence,
    } as ResidenceResult;
  } catch (error) {
    return {
      __typename: "ApiDeleteError",
      message: `Failed to delete Residence with id ${args.input.id}.`,
      errors: generateClientErrors(error, "id"),
    };
  }
}

export {
  getResidence,
  getResidences,
  createResidence,
  updateResidence,
  deleteResidence,
};
