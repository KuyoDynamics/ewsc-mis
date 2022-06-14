import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import { getWaterTreatmentPlant } from "../water-treatment-plant/queries";
import {
  createWaterStorageTank,
  deleteWaterStorageTank,
  getWaterStorageTank,
  getWaterStorageTanks,
  updateWaterStorageTank,
} from "./queries";

const typeDefs = gql`
  type WaterStorageTank {
    id: ID!
    name: String!
    type: WaterStorageTankType!
    storage_capacity: Float!
    gps: String
    plant_id: String!
    water_treatment_plant: WaterTreatmentPlant
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    water_storage_tanks(plant_id: ID!): [WaterStorageTank!]
    water_storage_tank(id: ID!): WaterStorageTank!
  }

  extend type Mutation {
    createWaterStorageTank(
      input: CreateWaterStorageTankInput!
    ): CreateWaterStorageTankPayload
    updateWaterStorageTank(
      input: UpdateWaterStorageTankInput!
    ): UpdateWaterStorageTankPayload
    deleteWaterStorageTank(
      input: DeleteWaterStorageTankInput!
    ): DeleteWaterStorageTankPayload
  }

  input DeleteWaterStorageTankInput {
    id: ID!
  }

  type DeleteWaterStorageTankPayload {
    water_storage_tank: WaterStorageTank!
  }

  input UpdateWaterStorageTankInput {
    id: ID!
    update: WaterStorageTankUpdateInput!
  }

  input WaterStorageTankUpdateInput {
    name: String!
    type: WaterStorageTankType!
    storage_capacity: Float!
    plant_id: String!
    gps: String
  }

  type UpdateWaterStorageTankPayload {
    water_storage_tank: WaterStorageTank!
  }

  input CreateWaterStorageTankInput {
    name: String!
    type: WaterStorageTankType!
    storage_capacity: Float!
    plant_id: String!
    gps: String
  }

  type CreateWaterStorageTankPayload {
    water_storage_tank: WaterStorageTank!
  }

  enum WaterStorageTankType {
    PRODUCTION
    DISTRIBUTION
  }

  scalar DateTime
  scalar Float
`;

const resolvers: Resolvers = {
  Query: {
    water_storage_tanks: (_, args, context) =>
      getWaterStorageTanks(args, context),
    water_storage_tank: (_, args, context) =>
      getWaterStorageTank(args, context),
  },
  Mutation: {
    createWaterStorageTank: (_, args, context) =>
      createWaterStorageTank(args, context),
    updateWaterStorageTank: (_, args, context) =>
      updateWaterStorageTank(args, context),
    deleteWaterStorageTank: (_, args, context) =>
      deleteWaterStorageTank(args, context),
  },
  WaterStorageTank: {
    water_treatment_plant: (parent, _args, context) =>
      getWaterTreatmentPlant({ id: parent.plant_id }, context),
  },
};

export {
  resolvers as WaterStorageTankResolvers,
  typeDefs as WaterStorageTankTypeDefs,
};
