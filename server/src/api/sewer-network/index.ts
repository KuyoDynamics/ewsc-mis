import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createSewerNetwork,
  deleteSewerNetwork,
  getSewerNetwork,
  getSewerNetworks,
  updateSewerNetwork,
  getSewerTreatmentPlant,
  getSewerNetworkSewerConnections,
} from "../queries";

const typeDefs = gql`
  type SewerNetwork {
    id: ID!
    name: String!
    plant_id: String!
    sewer_treatment_plant: SewerTreatmentPlantResult
    type: NetworkOwnershipType!
    sewer_network_sewer_connections: [ServiceAreaSewerConnection!]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    sewer_networks(plant_id: ID!): [SewerNetwork!]
    sewer_network(id: ID!): SewerNetworkResult!
  }

  extend type Mutation {
    createSewerNetwork(input: CreateSewerNetworkInput!): SewerNetworkResult!
    updateSewerNetwork(input: UpdateSewerNetworkInput!): SewerNetworkResult!
    deleteSewerNetwork(id: ID!): SewerNetworkResult!
  }

  union SewerNetworkResult =
      SewerNetwork
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError

  input CreateSewerNetworkInput {
    name: String!
    plant_id: String!
    type: NetworkOwnershipType!
  }

  input UpdateSewerNetworkInput {
    id: ID!
    update: SewerNetworkUpdateInput!
  }

  input SewerNetworkUpdateInput {
    name: String
    type: NetworkOwnershipType
  }
`;

const resolvers: Resolvers = {
  Query: {
    sewer_networks: (_, args, context) => getSewerNetworks(args, context),
    sewer_network: (_, args, context) => getSewerNetwork(args, context),
  },
  Mutation: {
    createSewerNetwork: (_, args, context) => createSewerNetwork(args, context),
    updateSewerNetwork: (_, args, context) => updateSewerNetwork(args, context),
    deleteSewerNetwork: (_, args, context) => deleteSewerNetwork(args, context),
  },
  SewerNetwork: {
    sewer_treatment_plant: (parent, _args, context) =>
      getSewerTreatmentPlant({ id: parent.plant_id }, context),
    sewer_network_sewer_connections: (parent, _args, context) =>
      getSewerNetworkSewerConnections(parent.id, context),
  },
};

export { resolvers as SewerNetworkResolvers, typeDefs as SewerNetworkTypeDefs };
