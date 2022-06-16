import {
  MutationCreateSewerNetworkArgs,
  MutationDeleteSewerNetworkArgs,
  MutationUpdateSewerNetworkArgs,
  QuerySewer_NetworkArgs,
  QuerySewer_NetworksArgs,
  SewerNetwork,
  SewerNetworkResult,
} from "../../libs/resolvers-types";
import { generateClientErrors, GraphQLContext } from "../../utils";

async function getSewerNetworks(
  args: QuerySewer_NetworksArgs,
  context: GraphQLContext
): Promise<SewerNetwork[] | null> {
  const sewer_network = await context.prisma.sewerTreatmentPlant
    .findUnique({
      where: {
        id: args.plant_id,
      },
    })
    .sewer_network();

  if (sewer_network) {
    const result = {
      __typename: "SewerNetwork",
      ...sewer_network,
    } as SewerNetwork;
    return [result];
  }

  return sewer_network;
}

async function getSewerNetwork(
  args: QuerySewer_NetworkArgs,
  context: GraphQLContext
): Promise<SewerNetworkResult> {
  const sewer_network = await context.prisma.sewerNetwork.findUnique({
    where: {
      id: args.id,
    },
  });

  if (!sewer_network)
    return {
      __typename: "ApiNotFoundError",
      message: `The SewerNetwork with the id ${args.id} does not exist.`,
    };

  return {
    __typename: "SewerNetwork",
    ...sewer_network,
  } as SewerNetworkResult;
}
async function createSewerNetwork(
  args: MutationCreateSewerNetworkArgs,
  context: GraphQLContext
): Promise<SewerNetworkResult> {
  try {
    const sewer_network = await context.prisma.sewerNetwork.create({
      data: {
        name: args.input.name,
        type: args.input.type,
        plant_id: args.input.plant_id,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });
    return {
      __typename: "SewerNetwork",
      ...sewer_network,
    } as SewerNetworkResult;
  } catch (error) {
    return {
      __typename: "ApiCreateError",
      message: `Failed to create SewerNewtork.`,
      errors: generateClientErrors(error),
    };
  }
}

async function updateSewerNetwork(
  args: MutationUpdateSewerNetworkArgs,
  context: GraphQLContext
): Promise<SewerNetworkResult> {
  try {
    const sewer_network = await context.prisma.sewerNetwork.update({
      where: {
        id: args.input.id,
      },
      data: {
        name: args.input.update.name || undefined,
        type: args.input.update.type || undefined,
        last_modified_by: args.input.update ? context.user.email : undefined,
      },
    });

    return {
      __typename: "SewerNetwork",
      ...sewer_network,
    } as SewerNetworkResult;
  } catch (error) {
    return {
      __typename: "ApiUpdateError",
      message: `Failed to update SewerNewtork.`,
      errors: generateClientErrors(error),
    };
  }
}

async function deleteSewerNetwork(
  args: MutationDeleteSewerNetworkArgs,
  context: GraphQLContext
): Promise<SewerNetworkResult> {
  try {
    const sewer_network = await context.prisma.sewerNetwork.delete({
      where: {
        id: args.id,
      },
    });

    return {
      __typename: "SewerNetwork",
      ...sewer_network,
    } as SewerNetworkResult;
  } catch (error) {
    console.log("error", error);
    return {
      __typename: "ApiDeleteError",
      message: `Failed to delete SewerNewtork with id ${args.id}.`,
      errors: generateClientErrors(error, "id"),
    };
  }
}

export {
  getSewerNetwork,
  getSewerNetworks,
  createSewerNetwork,
  updateSewerNetwork,
  deleteSewerNetwork,
};
