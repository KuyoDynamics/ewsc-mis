import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  getDistrictById,
  createResidence,
  deleteResidence,
  getResidence,
  getResidences,
  updateResidence,
  getResidenceServiceAreas,
} from "../queries";

const typeDefs = gql`
  type Residence {
    id: ID!
    name: String!
    cost_classification: ResidenceClassification!
    district_id: String!
    district: District
    service_areas: [ServiceArea!]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    residence(id: ID!): Residence
    residences(district_id: ID!): [Residence!]
  }

  extend type Mutation {
    createResidence(input: CreateResidenceInput!): CreateResidencePayload
    updateResidence(input: UpdateResidenceInput!): UpdateResidencePayload
    deleteResidence(input: DeleteResidenceInput!): DeleteResidencePayload
  }

  input DeleteResidenceInput {
    id: ID!
  }

  type DeleteResidencePayload {
    residence: Residence!
  }

  input UpdateResidenceInput {
    id: ID!
    update: ResidenceUpdateInput!
  }

  input ResidenceUpdateInput {
    name: String
    district_id: String
    cost_classification: ResidenceClassification
  }

  type UpdateResidencePayload {
    residence: Residence!
  }

  input CreateResidenceInput {
    name: String!
    cost_classification: ResidenceClassification!
    district_id: String!
  }

  type CreateResidencePayload {
    residence: Residence!
  }

  enum ResidenceClassification {
    HIGH_COST
    LOW_COST
    MEDIUM_COST
    PERI_URBAN
    RURAL
  }

  scalar DateTime
`;

const resolvers: Resolvers = {
  Query: {
    residence: (_, args, context) => getResidence(args, context),
    residences: (_, args, context) => getResidences(args, context),
  },
  Mutation: {
    createResidence: (_, args, context) => createResidence(args, context),
    updateResidence: (_, args, context) => updateResidence(args, context),
    deleteResidence: (_, args, context) => deleteResidence(args, context),
  },
  Residence: {
    district: (parent, _args, context) =>
      getDistrictById(parent.district_id, context),
    service_areas: (parent, _args, context) =>
      getResidenceServiceAreas(parent.id, context),
  },
};

export { typeDefs as ResidenceTypeDefs, resolvers as ResidenceResolvers };
