import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import { getWaterTreatmentPlant } from "../queries";
import {
  getServiceAreaWaterConnections,
  getWaterNetworkWaterConnections,
} from "../service-area-water-connection/queries";
import {
  createWaterNetwork,
  deleteWaterNetwork,
  getWaterNetwork,
  getWaterNetworks,
  updateWaterNetwork,
} from "./queries";

const typeDefs = gql`
  type WaterNetwork {
    id: ID!
    name: String!
    plant_id: String!
    water_treatment_plant: WaterTreatmentPlantResult
    type: NetworkOwnershipType!
    water_network_water_connections: [ServiceAreaWaterConnection!]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    water_networks(plant_id: ID!): [WaterNetwork!]
    water_network(id: ID!): WaterNetworkResult!
  }

  extend type Mutation {
    createWaterNetwork(input: CreateWaterNetworkInput!): WaterNetworkResult!
    updateWaterNetwork(input: UpdateWaterNetworkInput!): WaterNetworkResult!
    deleteWaterNetwork(id: ID!): WaterNetworkResult!
  }

  union WaterNetworkResult =
      WaterNetwork
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError

  input CreateWaterNetworkInput {
    name: String!
    plant_id: String!
    type: NetworkOwnershipType!
  }

  input UpdateWaterNetworkInput {
    id: ID!
    update: WaterNetworkUpdateInput!
  }

  input WaterNetworkUpdateInput {
    name: String
    type: NetworkOwnershipType
  }

  enum NetworkOwnershipType {
    INDEPENDENT
    INTERNAL
  }
`;

const resolvers: Resolvers = {
  Query: {
    water_networks: (_, args, context) => getWaterNetworks(args, context),
    water_network: (_, args, context) => getWaterNetwork(args, context),
  },
  Mutation: {
    createWaterNetwork: (_, args, context) => createWaterNetwork(args, context),
    updateWaterNetwork: (_, args, context) => updateWaterNetwork(args, context),
    deleteWaterNetwork: (_, args, context) => deleteWaterNetwork(args, context),
  },
  WaterNetwork: {
    water_treatment_plant: (parent, _args, context) =>
      getWaterTreatmentPlant({ id: parent.plant_id }, context),
    water_network_water_connections: (parent, _args, context) =>
      getWaterNetworkWaterConnections(parent.id, context),
  },
};

export { resolvers as WaterNetworkResolvers, typeDefs as WaterNetworkTypeDefs };
