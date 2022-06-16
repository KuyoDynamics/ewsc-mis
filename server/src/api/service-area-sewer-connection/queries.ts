import {
  MutationCreateServiceAreaSewerConnectionArgs,
  MutationDeleteServiceAreaSewerConnectionArgs,
  MutationUpdateServiceAreaSewerConnectionArgs,
  QueryService_Area_Sewer_ConnectionArgs,
  ServiceAreaSewerConnection,
  ServiceAreaSewerConnectionResult,
} from "../../libs/resolvers-types";
import { generateClientErrors, GraphQLContext } from "../../utils";

async function getServiceAreaSewerConnections(
  service_area_id: string,
  context: GraphQLContext
): Promise<ServiceAreaSewerConnection[]> {
  const service_area_sewer_connections = await context.prisma.serviceArea
    .findUnique({
      where: {
        id: service_area_id,
      },
    })
    .service_area_sewer_connections();

  return service_area_sewer_connections;
}

async function getSewerNetworkSewerConnections(
  sewer_network_id: string,
  context: GraphQLContext
): Promise<ServiceAreaSewerConnection[]> {
  const sewer_network_sewer_connections = await context.prisma.sewerNetwork
    .findUnique({
      where: {
        id: sewer_network_id,
      },
    })
    .service_area_sewer_connections();

  return sewer_network_sewer_connections;
}

async function getServiceAreaSewerConnection(
  args: QueryService_Area_Sewer_ConnectionArgs,
  context: GraphQLContext
): Promise<ServiceAreaSewerConnectionResult> {
  try {
    const service_area_sewer_connection =
      await context.prisma.serviceAreaSewerConnection.findUnique({
        where: {
          sewer_netowrk_id_service_area_id: {
            service_area_id: args.service_area_id,
            sewer_netowrk_id: args.sewer_netowrk_id,
          },
        },
      });

    if (!service_area_sewer_connection) {
      return {
        __typename: "ApiNotFoundError",
        message: `The ServiceAreaSewerConnection with ${args} does not exist.`,
      };
    }
    return {
      __typename: "ServiceAreaSewerConnection",
      ...service_area_sewer_connection,
    };
  } catch (error) {
    return {
      __typename: "ApiNotFoundError",
      message: `Failed to find ServiceAreaSewerConnection with ${args}.`,
      errors: generateClientErrors(error, "service_area_id,sewer_netowrk_id"),
    };
  }
}

async function createServiceAreaSewerConnection(
  args: MutationCreateServiceAreaSewerConnectionArgs,
  context: GraphQLContext
): Promise<ServiceAreaSewerConnectionResult> {
  try {
    const service_area_sewer_connection =
      await context.prisma.serviceAreaSewerConnection.create({
        data: {
          connections: args.input.connections,
          service_area_id: args.input.service_area_id,
          sewer_netowrk_id: args.input.sewer_netowrk_id,
          created_by: context.user.email,
          last_modified_by: context.user.email,
        },
      });

    if (!service_area_sewer_connection) {
      return {
        __typename: "ApiCreateError",
        message: `Failed to create ServiceAreaSewerConnection.`,
      };
    }

    return {
      __typename: "ServiceAreaSewerConnection",
      ...service_area_sewer_connection,
    };
  } catch (error) {
    return {
      __typename: "ApiCreateError",
      message: `Failed to create ServiceAreaSewerConnection.`,
      errors: generateClientErrors(error),
    };
  }
}

async function updateServiceAreaSewerConnection(
  args: MutationUpdateServiceAreaSewerConnectionArgs,
  context: GraphQLContext
): Promise<ServiceAreaSewerConnectionResult> {
  try {
    const service_area_sewer_connection =
      await context.prisma.serviceAreaSewerConnection.update({
        where: {
          sewer_netowrk_id_service_area_id: {
            service_area_id: args.input.service_area_id,
            sewer_netowrk_id: args.input.sewer_netowrk_id,
          },
        },
        data: {
          connections: args.input.update.connections,
        },
      });

    if (!service_area_sewer_connection) {
      return {
        __typename: "ApiUpdateError",
        message: `Failed to update ServiceAreaSewerConnection with ${{
          service_area_id: args.input.service_area_id,
          Sewer_netowrk_id: args.input.sewer_netowrk_id,
        }}.`,
      };
    }

    return {
      __typename: "ServiceAreaSewerConnection",
      ...service_area_sewer_connection,
    };
  } catch (error) {
    return {
      __typename: "ApiUpdateError",
      message: `Failed to update ServiceAreaSewerConnection.`,
      errors: generateClientErrors(error),
    };
  }
}

async function deleteServiceAreaSewerConnection(
  args: MutationDeleteServiceAreaSewerConnectionArgs,
  context: GraphQLContext
): Promise<ServiceAreaSewerConnectionResult> {
  try {
    const service_area_Sewer_connection =
      await context.prisma.serviceAreaSewerConnection.delete({
        where: {
          sewer_netowrk_id_service_area_id: {
            service_area_id: args.input.service_area_id,
            sewer_netowrk_id: args.input.sewer_netowrk_id,
          },
        },
      });

    if (!service_area_Sewer_connection) {
      return {
        __typename: "ApiDeleteError",
        message: `Failed to delete ServiceAreaSewerConnection with ${{
          service_area_id: args.input.service_area_id,
          Sewer_netowrk_id: args.input.sewer_netowrk_id,
        }}.`,
      };
    }
    return {
      __typename: "ServiceAreaSewerConnection",
      ...service_area_Sewer_connection,
    };
  } catch (error) {
    return {
      __typename: "ApiUpdateError",
      message: `Failed to delete ServiceAreaSewerConnection.`,
      errors: generateClientErrors(error),
    };
  }
}

export {
  getServiceAreaSewerConnections,
  getServiceAreaSewerConnection,
  createServiceAreaSewerConnection,
  updateServiceAreaSewerConnection,
  deleteServiceAreaSewerConnection,
  getSewerNetworkSewerConnections,
};
