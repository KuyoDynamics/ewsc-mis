import {
  MutationCreateWaterNetworkArgs,
  QueryWater_NetworkArgs,
  QueryWater_NetworksArgs,
  WaterNetwork,
  WaterNetworkResult,
} from "../../libs/resolvers-types";
import { GraphQLContext } from "../../utils";

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
      __typename: "WaterNetworkNotFoundError",
      message: `The WaterNetwork with the id ${args.id} does not exist.`,
    };

  return water_network as WaterNetworkResult;
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
    return water_network as WaterNetworkResult;
  } catch (error) {
    //   TODO: See if you can understand how to send back all other errors
    // so that we can nicely bind them in the UI!
    console.log("error", error);
    return {
      __typename: "WaterNetworkCreateError",
      message: `Failed to create WaterNewtork.`,
    };
  }
}

export { getWaterNetwork, getWaterNetworks, createWaterNetwork };
