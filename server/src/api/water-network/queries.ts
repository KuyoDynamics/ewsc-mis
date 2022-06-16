import {
  MutationCreateWaterNetworkArgs,
  MutationDeleteWaterNetworkArgs,
  MutationUpdateWaterNetworkArgs,
  QueryWater_NetworkArgs,
  QueryWater_NetworksArgs,
  WaterNetwork,
  WaterNetworkResult,
} from "../../libs/resolvers-types";
import { generateClientErrors, GraphQLContext } from "../../utils";

async function getWaterNetworks(
  args: QueryWater_NetworksArgs,
  context: GraphQLContext
): Promise<WaterNetwork[] | null> {
  const water_network = await context.prisma.waterTreatmentPlant
    .findUnique({
      where: {
        id: args.plant_id,
      },
    })
    .water_network();

  if (water_network) {
    const result = {
      __typename: "WaterNetwork",
      ...water_network,
    } as WaterNetwork;
    return [result];
  }

  return water_network;
}

async function getWaterNetwork(
  args: QueryWater_NetworkArgs,
  context: GraphQLContext
): Promise<WaterNetworkResult> {
  const water_network = await context.prisma.waterNetwork.findUnique({
    where: {
      id: args.id,
    },
  });

  if (!water_network)
    return {
      __typename: "ApiNotFoundError",
      message: `The WaterNetwork with the id ${args.id} does not exist.`,
    };

  return {
    __typename: "WaterNetwork",
    ...water_network,
  } as WaterNetworkResult;
}
async function createWaterNetwork(
  args: MutationCreateWaterNetworkArgs,
  context: GraphQLContext
): Promise<WaterNetworkResult> {
  try {
    const water_network = await context.prisma.waterNetwork.create({
      data: {
        name: args.input.name,
        type: args.input.type,
        plant_id: args.input.plant_id,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });
    return {
      __typename: "WaterNetwork",
      ...water_network,
    } as WaterNetworkResult;
  } catch (error) {
    return {
      __typename: "ApiCreateError",
      message: `Failed to create WaterNewtork.`,
      errors: generateClientErrors(error),
    };
  }
}

async function updateWaterNetwork(
  args: MutationUpdateWaterNetworkArgs,
  context: GraphQLContext
): Promise<WaterNetworkResult> {
  try {
    const water_network = await context.prisma.waterNetwork.update({
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
      __typename: "WaterNetwork",
      ...water_network,
    } as WaterNetworkResult;
  } catch (error) {
    return {
      __typename: "ApiUpdateError",
      message: `Failed to update WaterNewtork.`,
      errors: generateClientErrors(error),
    };
  }
}

async function deleteWaterNetwork(
  args: MutationDeleteWaterNetworkArgs,
  context: GraphQLContext
): Promise<WaterNetworkResult> {
  try {
    const water_network = await context.prisma.waterNetwork.delete({
      where: {
        id: args.id,
      },
    });

    return {
      __typename: "WaterNetwork",
      ...water_network,
    } as WaterNetworkResult;
  } catch (error) {
    console.log("error", error);
    return {
      __typename: "ApiDeleteError",
      message: `Failed to delete WaterNewtork with id ${args.id}.`,
      errors: generateClientErrors(error, "id"),
    };
  }
}

export {
  getWaterNetwork,
  getWaterNetworks,
  createWaterNetwork,
  updateWaterNetwork,
  deleteWaterNetwork,
};
