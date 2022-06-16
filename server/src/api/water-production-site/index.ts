import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  getWaterTreatmentPlant,
  createWaterProductionSite,
  deleteWaterProductionSite,
  getWaterProductionSite,
  getWaterProductionSites,
  updateWaterProductioSite,
} from "../queries";

const typeDefs = gql`
  type WaterProductionSite {
    id: ID!
    name: String!
    static_suction_head: Float!
    static_discharge_head: Float!
    gps: String
    type: WaterProductionSiteType!
    plant_id: String!
    water_treatment_plant: WaterTreatmentPlantResult
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    water_production_sites(plant_id: ID!): [WaterProductionSite!]
    water_production_site(id: ID!): WaterProductionSite
  }

  extend type Mutation {
    createWaterProductionSite(
      input: CreateWaterProductionSiteInput!
    ): CreateWaterProductionSitePayload
    updateWaterProductionSite(
      input: UpdateWaterProductionSiteInput!
    ): UpdateWaterProductionSitePayload
    deleteWaterProductionSite(
      input: DeleteWaterProductionSiteInput!
    ): DeleteWaterProductionSitePayload
  }

  input DeleteWaterProductionSiteInput {
    id: ID!
  }

  type DeleteWaterProductionSitePayload {
    water_production_site: WaterProductionSite!
  }

  input CreateWaterProductionSiteInput {
    name: String!
    static_suction_head: Float!
    static_discharge_head: Float!
    type: WaterProductionSiteType!
    plant_id: String!
    gps: String
  }

  type CreateWaterProductionSitePayload {
    water_production_site: WaterProductionSite!
  }

  input UpdateWaterProductionSiteInput {
    id: ID!
    update: WaterProductionSiteUpdateInput!
  }

  input WaterProductionSiteUpdateInput {
    name: String!
    static_suction_head: Float!
    static_discharge_head: Float!
    type: WaterProductionSiteType!
    gps: String
  }

  type UpdateWaterProductionSitePayload {
    water_production_site: WaterProductionSite!
  }

  enum WaterProductionSiteType {
    BOREHOLE
    DAM
  }
`;

const resolvers: Resolvers = {
  Query: {
    water_production_sites: (_, args, context) =>
      getWaterProductionSites(args, context),
    water_production_site: (_, args, context) =>
      getWaterProductionSite(args, context),
  },
  WaterProductionSite: {
    water_treatment_plant: (parent, _args, context) =>
      getWaterTreatmentPlant({ id: parent.plant_id }, context),
  },
  Mutation: {
    createWaterProductionSite: (_, args, context) =>
      createWaterProductionSite(args, context),
    updateWaterProductionSite: (_, args, context) =>
      updateWaterProductioSite(args, context),
    deleteWaterProductionSite: (_, args, context) =>
      deleteWaterProductionSite(args, context),
  },
};

export {
  resolvers as WaterProductionSiteResolvers,
  typeDefs as WaterProductionSiteTypeDefs,
};
