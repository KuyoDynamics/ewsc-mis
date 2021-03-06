import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createWaterTreatmentPlant,
  deleteWaterTreatmentPlants,
  getWaterTreatmentPlant,
  getWaterTreatmentPlants,
  updateWaterTreatmentPlant,
  getWaterProductionSites,
  getWaterStorageTanks,
  getWaterNetwork,
  getCatchmentDistrict,
} from "../queries";

const typeDefs = gql`
  type WaterTreatmentPlant {
    id: ID!
    name: String!
    water_source: WaterSourceType!
    production_capacity: Float!
    gps: String

    catchment_district_id: String!
    catchment_district: CatchmentDistrictResult

    water_production_sites: [WaterProductionSite!]
    water_storage_tanks: [WaterStorageTank!]
    water_network: WaterNetworkResult!

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    water_treatment_plants(catchment_district_id: ID!): [WaterTreatmentPlant!]
    water_treatment_plant(id: ID!): WaterTreatmentPlantResult!
  }

  extend type Mutation {
    createWaterTreatmentPlant(
      input: CreateWaterTreatmentPlantInput!
    ): WaterTreatmentPlantResult!
    updateWaterTreatmentPlant(
      input: UpdateWaterTreatmentPlantInput!
    ): WaterTreatmentPlantResult!
    deleteWaterTreatmentPlants(
      filter: DeleteWaterTreatmentPlantsInput!
    ): ApiBatchPayloadResult!
  }

  union WaterTreatmentPlantResult =
      WaterTreatmentPlant
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError

  input DeleteWaterTreatmentPlantsInput {
    id: ID
    catchment_district_id: String
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
      getCatchmentDistrict(parent.catchment_district_id, context),
    water_production_sites: (parent, _args, context) =>
      getWaterProductionSites({ plant_id: parent.id }, context),
    water_storage_tanks: (parent, _args, context) =>
      getWaterStorageTanks({ plant_id: parent.id }, context),
    water_network: (parent, _args, context) =>
      getWaterNetwork({ id: parent.id }, context),
  },
};

export {
  resolves as WaterTreatmentPlantResolvers,
  typeDefs as WaterTreatmentPlantTypeDefs,
};
