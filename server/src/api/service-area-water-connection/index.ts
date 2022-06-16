import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import { getServiceArea, getWaterNetwork } from "../queries";
import {
  createServiceAreaWaterConnection,
  deleteServiceAreaWaterConnection,
  getServiceAreaWaterConnection,
  getServiceAreaWaterConnections,
  updateServiceAreaWaterConnection,
} from "./queries";

const typeDefs = gql`
  type ServiceAreaWaterConnection {
    connections: BigInt!
    water_netowrk_id: ID!
    water_network: WaterNetworkResult
    service_area_id: ID!
    service_area: ServiceAreaResult
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    service_area_water_connections(
      service_area_id: ID!
    ): [ServiceAreaWaterConnection!]
    service_area_water_connection(
      water_netowrk_id: ID!
      service_area_id: ID!
    ): ServiceAreaWaterConnectionResult!
  }

  extend type Mutation {
    createServiceAreaWaterConnection(
      input: CreateServiceAreaWaterConnectionInput!
    ): ServiceAreaWaterConnectionResult!
    updateServiceAreaWaterConnection(
      input: UpdateServiceAreaWaterConnectionInput!
    ): ServiceAreaWaterConnectionResult!
    deleteServiceAreaWaterConnection(
      input: DeleteServiceAreaWaterConnectionInput!
    ): ServiceAreaWaterConnectionResult!
  }

  union ServiceAreaWaterConnectionResult =
      ServiceAreaWaterConnection
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError

  input CreateServiceAreaWaterConnectionInput {
    connections: BigInt!
    water_netowrk_id: ID!
    service_area_id: ID!
  }

  input UpdateServiceAreaWaterConnectionInput {
    service_area_id: ID!
    water_netowrk_id: ID!
    update: ServiceAreaWaterConnectionUpdateInput!
  }

  input ServiceAreaWaterConnectionUpdateInput {
    connections: BigInt!
  }

  input DeleteServiceAreaWaterConnectionInput {
    service_area_id: ID!
    water_netowrk_id: ID!
  }
`;

const resolvers: Resolvers = {
  Query: {
    service_area_water_connections: (_, args, context) =>
      getServiceAreaWaterConnections(args.service_area_id, context),
    service_area_water_connection: (_, args, context) =>
      getServiceAreaWaterConnection(args, context),
  },
  Mutation: {
    createServiceAreaWaterConnection: (_, args, context) =>
      createServiceAreaWaterConnection(args, context),
    updateServiceAreaWaterConnection: (_, args, context) =>
      updateServiceAreaWaterConnection(args, context),
    deleteServiceAreaWaterConnection: (_, args, context) =>
      deleteServiceAreaWaterConnection(args, context),
  },
  ServiceAreaWaterConnection: {
    service_area: (parent, _args, context) =>
      getServiceArea({ id: parent.service_area_id }, context),
    water_network: (parent, _args, context) =>
      getWaterNetwork({ id: parent.water_netowrk_id }, context),
  },
};

export {
  resolvers as ServiceAreaWaterConnectionResolvers,
  typeDefs as ServiceAreaWaterConnectionTypeDefs,
};
