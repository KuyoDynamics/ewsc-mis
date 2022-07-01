import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createDistrict,
  deleteDistrict,
  getDistrict,
  getDistricts,
  getOrganisationsInDistrict,
  getProvince,
  getResidences,
  updateDistrict,
} from "../queries";

const typeDefs = gql`
  type District {
    id: ID!
    name: String!
    code: String!
    province_id: String!
    province: ProvinceResult
    organisations_in_district: [CatchmentDistrict!]
    residences: [Residence!]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    districts(province_id: ID!): [District!]
    district(id: ID!): DistrictResult!
  }

  extend type Mutation {
    createDistrict(input: CreateDistrictInput!): DistrictResult!
    updateDistrict(input: UpdateDistrictInput!): DistrictResult!
    deleteDistrict(input: DeleteDistrictInput!): DistrictResult!
  }

  input CreateDistrictInput {
    name: String!
    code: String!
    province_id: String!
  }

  input UpdateDistrictInput {
    id: ID!
    update: DistrictUpdateInput!
  }

  input DistrictUpdateInput {
    code: String
    name: String
  }

  input DeleteDistrictInput {
    id: ID!
  }

  union DistrictResult =
      District
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  Query: {
    districts: (_, args, context) => getDistricts(args.province_id, context),
    district: (_, args, context) => getDistrict(args.id, context),
  },
  Mutation: {
    createDistrict: (_, args, context) => createDistrict(args, context),
    updateDistrict: (_, args, context) => updateDistrict(args, context),
    deleteDistrict: (_, args, context) =>
      deleteDistrict(args.input.id, context),
  },
  District: {
    province: (parent, _args, context) =>
      getProvince(parent.province_id, context),
    residences: (parent, _args, context) =>
      getResidences({ district_id: parent.id }, context),
    organisations_in_district: (parent, _args, context) =>
      getOrganisationsInDistrict(parent.id, context),
  },
};

export { typeDefs as DistrictTypeDefs, resolvers as DistrictResolvers };
