import { gql } from 'apollo-server-express';
import { Resolvers } from '../../libs/resolvers-types';
import {
  createProvince,
  deleteProvince,
  getCountry,
  getDistricts,
  getProvince,
  getProvinces,
  resolveCountry,
  updateProvince,
} from '../queries';

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
    province(id: ID!): ProvinceResult!
  }

  extend type Mutation {
    createProvince(input: CreateProvinceInput!): ProvinceResult!
    deleteProvince(input: DeleteProvinceInput!): ProvinceResult!
    updateProvince(input: UpdateProvinceInput!): ProvinceResult!
  }

  input CreateProvinceInput {
    code: String!
    name: String!
    country_id: String!
  }

  input DeleteProvinceInput {
    id: ID!
  }

  input UpdateProvinceInput {
    id: ID!
    update: ProvinceUpdateInput!
  }

  input ProvinceUpdateInput {
    code: String
    name: String
  }

  union ProvinceResult =
      Province
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  Query: {
    provinces: (_, args, context) => getProvinces(args.country_id, context),
    province: (_, args, context) => getProvince(args.id, context),
  },
  Mutation: {
    createProvince: (_, args, context) => createProvince(args, context),
    deleteProvince: (_, args, context) =>
      deleteProvince(args.input.id, context),
    updateProvince: (_, args, context) => updateProvince(args, context),
  },
  Province: {
    districts: (parent, _args, context) => getDistricts(parent.id, context),
    country: (parent, _args, context) =>
      resolveCountry(parent.country_id, context),
  },
};

export { typeDefs as ProvinceTypeDefs, resolvers as ProvinceResolvers };
