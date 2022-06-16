import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createCatchmentProvince,
  deleteCatchmentProvince,
  getCatchmentDistricts,
  getCatchmentProvinceById,
  getCatchmentProvinces,
  getOrganisationById,
  // getProvinceById,
  updateCatchmentProvince,
} from "../queries";

const typeDefs = gql`
  type CatchmentProvince {
    id: ID!
    disabled: Boolean!
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

  type Query {
    catchment_provinces(organisation_id: ID!): [CatchmentProvince!]
    catchment_province(catchment_province_id: ID!): CatchmentProvince
  }

  type Mutation {
    createCatchmentProvince(
      input: CreateCatchmentProvinceInput!
    ): CreateCatchmentProvincePayload
    updateCatchmentProvince(
      input: UpdateCatchmentProvinceInput!
    ): UpdateCatchmentProvincePayload
    deleteCatchmentProvince(
      input: DeleteCatchmentProvinceInput!
    ): DeleteCatchmentProvincePayload
  }

  input CreateCatchmentProvinceInput {
    province_id: String!
    organisation_id: String!
  }

  type CreateCatchmentProvincePayload {
    catchment_province: CatchmentProvince
  }

  input UpdateCatchmentProvinceInput {
    id: ID!
    update: CatchmentProvinceUpdateInput!
  }

  input CatchmentProvinceUpdateInput {
    disabled: Boolean!
  }

  type UpdateCatchmentProvincePayload {
    catchment_province: CatchmentProvince
  }

  input DeleteCatchmentProvinceInput {
    id: ID!
  }

  type DeleteCatchmentProvincePayload {
    catchment_province: CatchmentProvince
  }

  scalar DateTime
`;

const resolvers: Resolvers = {
  Query: {
    catchment_provinces: (_, args, context) =>
      getCatchmentProvinces(args.organisation_id, context),
    catchment_province: (_, args, context) =>
      getCatchmentProvinceById(args.catchment_province_id, context),
  },
  Mutation: {
    createCatchmentProvince: (_, args, context) =>
      createCatchmentProvince(args, context),
    updateCatchmentProvince: (_, args, context) =>
      updateCatchmentProvince(args, context),
    deleteCatchmentProvince: (_, args, context) =>
      deleteCatchmentProvince(args, context),
  },
  CatchmentProvince: {
    // province: ({ province_id }, _args, context) =>
    //   getProvinceById(province_id, context),
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
