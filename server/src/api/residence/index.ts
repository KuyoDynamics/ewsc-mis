import { gql } from 'apollo-server-express';
import { Resolvers } from '../../libs/resolvers-types';
import {
  createResidence,
  deleteResidence,
  getResidence,
  getResidences,
  updateResidence,
  getResidenceServiceAreas,
  resolveDistrict,
} from '../queries';

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
    residence(id: ID!): ResidenceResult!
    residences(district_id: ID!): [Residence!]
  }

  extend type Mutation {
    createResidence(input: CreateResidenceInput!): ResidenceResult!
    updateResidence(input: UpdateResidenceInput!): ResidenceResult!
    deleteResidence(input: DeleteResidenceInput!): ResidenceResult!
  }

  union ResidenceResult =
      Residence
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError

  input DeleteResidenceInput {
    id: ID!
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

  input CreateResidenceInput {
    name: String!
    cost_classification: ResidenceClassification!
    district_id: String!
  }

  enum ResidenceClassification {
    HIGH_COST
    LOW_COST
    MEDIUM_COST
    PERI_URBAN
    RURAL
  }
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
      resolveDistrict(parent.district_id, context),
    service_areas: (parent, _args, context) =>
      getResidenceServiceAreas(parent.id, context),
  },
};

export { typeDefs as ResidenceTypeDefs, resolvers as ResidenceResolvers };
