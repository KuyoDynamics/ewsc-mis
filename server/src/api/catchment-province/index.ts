import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createCatchmentProvince,
  deleteCatchmentProvince,
  getCatchmentDistricts,
  getCatchmentProvince,
  getCatchmentProvinces,
  getOrganisation,
  getProvince,
  updateCatchmentProvince,
} from "../queries";

const typeDefs = gql`
  type CatchmentProvince {
    id: ID!
    disabled: Boolean!
    province_id: String!
    province: ProvinceResult
    organisation_id: String!
    organisation: OrganisationResult
    catchment_districts: [CatchmentDistrict!]
    created_at: DateTime
    created_by: String
    last_modified_at: DateTime
    last_modified_by: String
  }

  type Query {
    catchment_provinces(organisation_id: ID!): [CatchmentProvince!]
    catchment_province(catchment_province_id: ID!): CatchmentProvinceResult!
  }

  type Mutation {
    createCatchmentProvince(
      input: CreateCatchmentProvinceInput!
    ): CatchmentProvinceResult!
    updateCatchmentProvince(
      input: UpdateCatchmentProvinceInput!
    ): CatchmentProvinceResult!
    deleteCatchmentProvince(
      input: DeleteCatchmentProvinceInput!
    ): CatchmentProvinceResult!
  }

  input CreateCatchmentProvinceInput {
    province_id: String!
    organisation_id: String!
  }

  input UpdateCatchmentProvinceInput {
    id: ID!
    update: CatchmentProvinceUpdateInput!
  }

  input CatchmentProvinceUpdateInput {
    disabled: Boolean!
  }

  input DeleteCatchmentProvinceInput {
    id: ID!
  }

  union CatchmentProvinceResult =
      CatchmentProvince
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  Query: {
    catchment_provinces: (_, args, context) =>
      getCatchmentProvinces(args.organisation_id, context),
    catchment_province: (_, args, context) =>
      getCatchmentProvince(args.catchment_province_id, context),
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
    province: ({ province_id }, _args, context) =>
      getProvince(province_id, context),
    organisation: ({ organisation_id }, _args, context) =>
      getOrganisation(organisation_id, context),
    catchment_districts: ({ id }, _args, context) =>
      getCatchmentDistricts(id, context),
  },
};

export {
  typeDefs as CatchmentProvinceTypeDefs,
  resolvers as CatchmentProvinceResolvers,
};
