import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  getDistrictById,
  getDistrictsByProvinceId,
  getProvinceById,
} from "../queries";

const typeDefs = gql`
  type District {
    id: ID!
    name: String!
    code: String!
    province_id: String!
    province: Province
    # organisations_in_district: [Organisation!]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    districts(province_id: ID!): [District!]
    district(id: ID!): District
  }

  input CreateDistrictInput {
    name: String!
    code: String!
    province_id: String!
    # organisations_in_district: [Organisation!]
  }

  scalar DateTime
`;

const resolvers: Resolvers = {
  Query: {
    districts: (_, args, context) =>
      getDistrictsByProvinceId(args.province_id, context),
    district: (_, args, context) => getDistrictById(args.id, context),
  },
  District: {
    province: (parent, _args, context) =>
      getProvinceById(parent.province_id, context),
  },
};

export { typeDefs as DistrictTypeDefs, resolvers as DistrictResolvers };
