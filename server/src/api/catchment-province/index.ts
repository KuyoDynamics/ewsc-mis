import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  getCatchmentDistricts,
  getOrganisationById,
  getProvinceById,
} from "../queries";

const typeDefs = gql`
  type CatchmentProvince {
    id: ID!
    province_id: String!
    province_name: String!
    province: Province
    organisation_id: String!
    organisation_name: String!
    organisation: Organisation
    catchment_districts: [CatchmentDistrict!]

    created_at: DateTime
    created_by: String
    last_modified_at: DateTime
    last_modified_by: String
  }

  input CreateCatchmentProvinceInput {
    province_id: String!
    organisation_id: String!
    catchment_districts: [CreateCatchmentDistrictInput!]
  }

  scalar DateTime
`;

const resolvers: Resolvers = {
  CatchmentProvince: {
    province: ({ province_id }, _args, context) =>
      getProvinceById(province_id, context),
    organisation: ({ organisation_id }, _args, context) =>
      getOrganisationById(organisation_id, context),
    catchment_districts: ({ id }, _args, context) =>
      getCatchmentDistricts(id, context),
  },
};

export {
  typeDefs as CatchmentProvinceTypeDefs,
  resolvers as CatchmentProvinceResolvers,
};
