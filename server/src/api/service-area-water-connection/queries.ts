import {
  MutationCreateServiceAreaWaterConnectionArgs,
  MutationDeleteServiceAreaWaterConnectionArgs,
  MutationUpdateServiceAreaWaterConnectionArgs,
  QueryService_Area_Water_ConnectionArgs,
  ServiceAreaWaterConnection,
  ServiceAreaWaterConnectionResult,
} from "../../libs/resolvers-types";
import { generateClientErrors, GraphQLContext } from "../../utils";

async function getServiceAreaWaterConnections(
  service_area_id: string,
  context: GraphQLContext
): Promise<ServiceAreaWaterConnection[]> {
  const service_area_water_connections = await context.prisma.serviceArea
    .findUnique({
      where: {
        id: service_area_id,
      },
    })
    .service_area_water_connections();

  return service_area_water_connections;
}

async function getServiceAreaWaterConnection(
  args: QueryService_Area_Water_ConnectionArgs,
  context: GraphQLContext
): Promise<ServiceAreaWaterConnectionResult> {
  try {
    const service_area_water_connection =
      await context.prisma.serviceAreaWaterConnection.findUnique({
        where: {
          water_netowrk_id_service_area_id: {
            service_area_id: args.service_area_id,
            water_netowrk_id: args.water_netowrk_id,
          },
        },
      });

    if (!service_area_water_connection) {
      return {
        __typename: "ApiNotFoundError",
        message: `The ServiceAreaWaterConnection with ${args} does not exist.`,
      };
    }
    return {
      __typename: "ServiceAreaWaterConnection",
      ...service_area_water_connection,
    };
  } catch (error) {
    return {
      __typename: "ApiNotFoundError",
      message: `Failed to find ServiceAreaWaterConnection with ${args}.`,
      errors: generateClientErrors(error, "service_area_id,water_netowrk_id"),
    };
  }
}

async function createServiceAreaWaterConnection(
  args: MutationCreateServiceAreaWaterConnectionArgs,
  context: GraphQLContext
): Promise<ServiceAreaWaterConnectionResult> {
  try {
    const service_area_water_connection =
      await context.prisma.serviceAreaWaterConnection.create({
        data: {
          connections: args.input.connections,
          service_area_id: args.input.service_area_id,
          water_netowrk_id: args.input.water_netowrk_id,
          created_by: context.user.email,
          last_modified_by: context.user.email,
        },
      });

    if (!service_area_water_connection) {
      return {
        __typename: "ApiCreateError",
        message: `Failed to create ServiceAreaWaterConnection.`,
      };
    }

    return {
      __typename: "ServiceAreaWaterConnection",
      ...service_area_water_connection,
    };
  } catch (error) {
    return {
      __typename: "ApiCreateError",
      message: `Failed to create ServiceAreaWaterConnection.`,
      errors: generateClientErrors(error),
    };
  }
}

async function updateServiceAreaWaterConnection(
  args: MutationUpdateServiceAreaWaterConnectionArgs,
  context: GraphQLContext
): Promise<ServiceAreaWaterConnectionResult> {
  try {
    const service_area_water_connection =
      await context.prisma.serviceAreaWaterConnection.update({
        where: {
          water_netowrk_id_service_area_id: {
            service_area_id: args.input.service_area_id,
            water_netowrk_id: args.input.water_netowrk_id,
          },
        },
        data: {
          connections: args.input.update.connections,
        },
      });

    if (!service_area_water_connection) {
      return {
        __typename: "ApiUpdateError",
        message: `Failed to update ServiceAreaWaterConnection with ${{
          service_area_id: args.input.service_area_id,
          water_netowrk_id: args.input.water_netowrk_id,
        }}.`,
      };
    }

    return {
      __typename: "ServiceAreaWaterConnection",
      ...service_area_water_connection,
    };
  } catch (error) {
    return {
      __typename: "ApiUpdateError",
      message: `Failed to update ServiceAreaWaterConnection.`,
      errors: generateClientErrors(error),
    };
  }
}

async function deleteServiceAreaWaterConnection(
  args: MutationDeleteServiceAreaWaterConnectionArgs,
  context: GraphQLContext
): Promise<ServiceAreaWaterConnectionResult> {
  try {
    const service_area_water_connection =
      await context.prisma.serviceAreaWaterConnection.delete({
        where: {
          water_netowrk_id_service_area_id: {
            service_area_id: args.input.service_area_id,
            water_netowrk_id: args.input.water_netowrk_id,
          },
        },
      });

    if (!service_area_water_connection) {
      return {
        __typename: "ApiDeleteError",
        message: `Failed to delete ServiceAreaWaterConnection with ${{
          service_area_id: args.input.service_area_id,
          water_netowrk_id: args.input.water_netowrk_id,
        }}.`,
      };
    }
    return {
      __typename: "ServiceAreaWaterConnection",
      ...service_area_water_connection,
    };
  } catch (error) {
    return {
      __typename: "ApiUpdateError",
      message: `Failed to delete ServiceAreaWaterConnection.`,
      errors: generateClientErrors(error),
    };
  }
}

export {
  getServiceAreaWaterConnections,
  getServiceAreaWaterConnection,
  createServiceAreaWaterConnection,
  updateServiceAreaWaterConnection,
  deleteServiceAreaWaterConnection,
};
