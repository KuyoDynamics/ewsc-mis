import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createSewerTreatmentPlant,
  deleteSewerTreatmentPlants,
  getCatchmentDistrict,
  getSewerNetwork,
  getSewerTreatmentPlant,
  getSewerTreatmentPlants,
  updateSewerTreatmentPlant,
} from "../queries";

const typeDefs = gql`
  type SewerTreatmentPlant {
    id: ID!
    name: String!
    ponds: Int!
    capacity: Float!
    gps: String
    catchment_district_id: String!
    catchment_district: CatchmentDistrictResult
    sewer_network: SewerNetworkResult
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    sewer_treatment_plants(catchment_district_id: ID!): [SewerTreatmentPlant!]
    sewer_treatment_plant(id: ID!): SewerTreatmentPlantResult!
  }

  extend type Mutation {
    createSewerTreatmentPlant(
      input: CreateSewerTreatmentPlantInput!
    ): SewerTreatmentPlantResult!
    updateSewerTreatmentPlant(
      input: UpdateSewerTreatmentPlantInput!
    ): SewerTreatmentPlantResult!
    deleteSewerTreatmentPlants(
      filter: DeleteSewerTreatmentPlantsInput!
    ): ApiBatchPayloadResult!
  }

  union SewerTreatmentPlantResult =
      SewerTreatmentPlant
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError

  input DeleteSewerTreatmentPlantsInput {
    id: ID
    catchment_district_id: String
  }

  input UpdateSewerTreatmentPlantInput {
    id: ID!
    update: SewerTreatmentPlantUpdateInput!
  }

  input SewerTreatmentPlantUpdateInput {
    name: String!
    ponds: Int!
    capacity: Float!
    gps: String
  }

  type UpdateSewerTreatmentPlantPayload {
    sewer_treatment_plant: SewerTreatmentPlant!
  }

  input CreateSewerTreatmentPlantInput {
    name: String!
    ponds: Int!
    capacity: Float!
    catchment_district_id: String!
    gps: String
  }

  type CreateSewerTreatmentPlantPayload {
    sewer_treatment_plant: SewerTreatmentPlant!
  }
`;

const resolves: Resolvers = {
  Query: {
    sewer_treatment_plants: (_, args, context) =>
      getSewerTreatmentPlants(args, context),
    sewer_treatment_plant: (_, args, context) =>
      getSewerTreatmentPlant(args, context),
  },

  Mutation: {
    createSewerTreatmentPlant: (_, args, context) =>
      createSewerTreatmentPlant(args, context),
    updateSewerTreatmentPlant: (_, args, context) =>
      updateSewerTreatmentPlant(args, context),
    deleteSewerTreatmentPlants: (_, args, context) =>
      deleteSewerTreatmentPlants(args, context),
  },
  SewerTreatmentPlant: {
    catchment_district: (parent, _args, context) =>
      getCatchmentDistrict(parent.catchment_district_id, context),
    sewer_network: (parent, _args, context) =>
      getSewerNetwork({ id: parent.id }, context),
  },
};

export {
  resolves as SewerTreatmentPlantResolvers,
  typeDefs as SewerTreatmentPlantTypeDefs,
};
