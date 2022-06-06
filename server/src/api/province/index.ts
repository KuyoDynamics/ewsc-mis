import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createProvince,
  deleteProvince,
  getCountryByProvinceId,
  getDistrictsByProvinceId,
  updateProvince,
} from "../queries";

const typeDefs = gql`
  type Province {
    id: ID!
    code: String!
    name: String!
    country_id: String!
    country: Country
    districts: [District!]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    provinces(country_id: ID!): [Province!]
    province(id: ID!): Province
  }

  extend type Mutation {
    createProvince(input: CreateProvinceInput!): CreateProvincePayload
    deleteProvince(input: DeleteProvinceInput!): DeleteProvincePayload
    updateProvince(input: UpdateProvinceInput!): UpdateProvicePayload
  }

  input CreateProvinceInput {
    code: String!
    name: String!
    country_id: String!
  }

  type CreateProvincePayload {
    province: Province
  }

  input DeleteProvinceInput {
    id: ID!
  }

  type DeleteProvincePayload {
    province: Province!
  }

  input UpdateProvinceInput {
    id: ID!
    update: ProvinceUpdateInput!
  }

  input ProvinceUpdateInput {
    code: String
    name: String
  }

  type UpdateProvicePayload {
    province: Province!
  }

  scalar DateTime
`;

const resolvers: Resolvers = {
  Query: {},
  Mutation: {
    createProvince: (_, args, context) => createProvince(args, context),
    deleteProvince: (_, args, context) =>
      deleteProvince(args.input.id, context),
    updateProvince: (_, args, context) => updateProvince(args, context),
  },
  Province: {
    districts: (parent, _args, context) =>
      getDistrictsByProvinceId(parent.id, context),
    country: (parent, _args, context) =>
      getCountryByProvinceId(parent.id, context),
  },
};

export { typeDefs as ProvinceTypeDefs, resolvers as ProvinceResolvers };
