import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createServiceAreaSewerConnection,
  deleteServiceAreaSewerConnection,
  getServiceAreaSewerConnection,
  getServiceAreaSewerConnections,
  updateServiceAreaSewerConnection,
  getServiceArea,
  getSewerNetwork,
} from "../queries";

const typeDefs = gql`
  type ServiceAreaSewerConnection {
    connections: BigInt!
    sewer_netowrk_id: ID!
    sewer_network: SewerNetworkResult
    service_area_id: ID!
    service_area: ServiceAreaResult
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    service_area_sewer_connections(
      service_area_id: ID!
    ): [ServiceAreaSewerConnection!]
    service_area_sewer_connection(
      sewer_netowrk_id: ID!
      service_area_id: ID!
    ): ServiceAreaSewerConnectionResult!
  }

  extend type Mutation {
    createServiceAreaSewerConnection(
      input: CreateServiceAreaSewerConnectionInput!
    ): ServiceAreaSewerConnectionResult!
    updateServiceAreaSewerConnection(
      input: UpdateServiceAreaSewerConnectionInput!
    ): ServiceAreaSewerConnectionResult!
    deleteServiceAreaSewerConnection(
      input: DeleteServiceAreaSewerConnectionInput!
    ): ServiceAreaSewerConnectionResult!
  }

  union ServiceAreaSewerConnectionResult =
      ServiceAreaSewerConnection
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError

  input CreateServiceAreaSewerConnectionInput {
    connections: BigInt!
    sewer_netowrk_id: ID!
    service_area_id: ID!
  }

  input UpdateServiceAreaSewerConnectionInput {
    service_area_id: ID!
    sewer_netowrk_id: ID!
    update: ServiceAreaSewerConnectionUpdateInput!
  }

  input ServiceAreaSewerConnectionUpdateInput {
    connections: BigInt!
  }

  input DeleteServiceAreaSewerConnectionInput {
    service_area_id: ID!
    sewer_netowrk_id: ID!
  }
`;

const resolvers: Resolvers = {
  Query: {
    service_area_sewer_connections: (_, args, context) =>
      getServiceAreaSewerConnections(args.service_area_id, context),
    service_area_sewer_connection: (_, args, context) =>
      getServiceAreaSewerConnection(args, context),
  },
  Mutation: {
    createServiceAreaSewerConnection: (_, args, context) =>
      createServiceAreaSewerConnection(args, context),
    updateServiceAreaSewerConnection: (_, args, context) =>
      updateServiceAreaSewerConnection(args, context),
    deleteServiceAreaSewerConnection: (_, args, context) =>
      deleteServiceAreaSewerConnection(args, context),
  },
  ServiceAreaSewerConnection: {
    service_area: (parent, _args, context) =>
      getServiceArea({ id: parent.service_area_id }, context),
    sewer_network: (parent, _args, context) =>
      getSewerNetwork({ id: parent.sewer_netowrk_id }, context),
  },
};

export {
  resolvers as ServiceAreaSewerConnectionResolvers,
  typeDefs as ServiceAreaSewerConnectionTypeDefs,
};
