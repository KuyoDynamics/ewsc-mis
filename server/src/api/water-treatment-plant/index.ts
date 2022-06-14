import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import { getCatchmentDistrictById } from "../queries";
import {
  createWaterTreatmentPlant,
  deleteWaterTreatmentPlants,
  getWaterTreatmentPlant,
  getWaterTreatmentPlants,
  updateWaterTreatmentPlant,
} from "./queries";

const typeDefs = gql`
  type WaterTreatmentPlant {
    id: ID!
    name: String!
    water_source: WaterSourceType!
    production_capacity: Float!
    gps: String

    catchment_district_id: String!
    catchment_district: CatchmentDistrict

    #   water_production_sites: [WaterProductionSite!]
    #   water_storage_tanks: [WaterStorageTank!]
    #   water_network: WaterNetwork

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    water_treatment_plants(catchment_district_id: ID!): [WaterTreatmentPlant!]
    water_treatment_plant(id: ID!): WaterTreatmentPlant
  }

  extend type Mutation {
    createWaterTreatmentPlant(
      input: CreateWaterTreatmentPlantInput!
    ): CreateWaterTreatmentPlantPayload
    updateWaterTreatmentPlant(
      input: UpdateWaterTreatmentPlantInput!
    ): UpdateWaterTreatmentPlantPayload
    deleteWaterTreatmentPlants(
      filter: DeleteWaterTreatmentPlantsInput!
    ): DeleteWaterTreatmentPlantsPayload
  }

  input DeleteWaterTreatmentPlantsInput {
    id: ID
    catchment_district_id: String
  }

  type DeleteWaterTreatmentPlantsPayload {
    water_treatment_plants: [WaterTreatmentPlant!]
  }

  input UpdateWaterTreatmentPlantInput {
    id: ID!
    update: WaterTreatmentPlantUpdateInput!
  }

  input WaterTreatmentPlantUpdateInput {
    name: String!
    water_source: WaterSourceType!
    production_capacity: Float!
    gps: String
  }

  type UpdateWaterTreatmentPlantPayload {
    water_treatment_plant: WaterTreatmentPlant!
  }

  input CreateWaterTreatmentPlantInput {
    name: String!
    water_source: WaterSourceType!
    production_capacity: Float!
    catchment_district_id: String!
    gps: String
  }

  type CreateWaterTreatmentPlantPayload {
    water_treatment_plant: WaterTreatmentPlant!
  }

  enum WaterSourceType {
    SURFACE
    GROUND
  }

  scalar DateTime
  scalar Float
`;

const resolves: Resolvers = {
  Query: {
    water_treatment_plants: (_, args, context) =>
      getWaterTreatmentPlants(args, context),
    water_treatment_plant: (_, args, context) =>
      getWaterTreatmentPlant(args, context),
  },

  Mutation: {
    createWaterTreatmentPlant: (_, args, context) =>
      createWaterTreatmentPlant(args, context),
    updateWaterTreatmentPlant: (_, args, context) =>
      updateWaterTreatmentPlant(args, context),
    deleteWaterTreatmentPlants: (_, args, context) =>
      deleteWaterTreatmentPlants(args, context),
  },
  WaterTreatmentPlant: {
    catchment_district: (parent, _args, context) =>
      getCatchmentDistrictById(parent.catchment_district_id, context),
  },
};

export {
  resolves as WaterTreatmentPlantResolvers,
  typeDefs as WaterTreatmentPlantTypeDefs,
};
