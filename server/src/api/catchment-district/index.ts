import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import { getDistrictUsers } from "../district-user/queries";
import {
  createCatchmentDistrict,
  deleteCatchmentDistrict,
  getCatchmentDistrictById,
  getCatchmentDistricts,
  getCatchmentProvinceById,
  getDistrictById,
  updateCatchmentDistrict,
} from "../queries";

const typeDefs = gql`
  type CatchmentDistrict {
    id: ID!
    disabled: Boolean!
    district_id: String!
    district_name: String!
    district: District
    catchment_province_id: String!
    catchment_province_name: String!
    catchment_province: CatchmentProvince
    # water_treatment_plants WaterTreatmentPlant[]
    # service_areas          ServiceArea[]
    # sewer_treatment_plants SewerTreatmentPlant[]
    # reports                Report[]
    district_users: [DistrictUser!]

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    catchment_districts(catchment_province_id: ID!): [CatchmentDistrict!]
    catchment_district(catchment_district_id: ID!): CatchmentDistrict
  }

  extend type Mutation {
    createCatchmentDistrict(
      input: CreateCatchmentDistrictInput!
    ): CreateCatchmentDistrictPayload
    updateCatchmentDistrict(
      input: UpdateCatchmentDistrictInput!
    ): UpdateCatchmentDistrictPayload
    deleteCatchmentDistrict(
      input: DeleteCatchmentDistrictInput!
    ): DeleteCatchmentDistrictPayload
  }

  input CreateCatchmentDistrictInput {
    district_id: String!
    catchment_province_id: String!
  }

  type CreateCatchmentDistrictPayload {
    catchment_district: CatchmentDistrict
  }

  input UpdateCatchmentDistrictInput {
    id: ID!
    update: CatchmentDistrictUpdateInput!
  }

  input CatchmentDistrictUpdateInput {
    disabled: Boolean!
  }

  type UpdateCatchmentDistrictPayload {
    catchment_district: CatchmentDistrict
  }

  input DeleteCatchmentDistrictInput {
    id: ID!
  }

  type DeleteCatchmentDistrictPayload {
    catchment_district: CatchmentDistrict
  }

  scalar DateTime
`;

const resolvers: Resolvers = {
  Query: {
    catchment_districts: (_, args, context) =>
      getCatchmentDistricts(args.catchment_province_id, context),
    catchment_district: (_, args, context) =>
      getCatchmentDistrictById(args.catchment_district_id, context),
  },
  Mutation: {
    createCatchmentDistrict: (_, args, context) =>
      createCatchmentDistrict(args, context),
    updateCatchmentDistrict: (_, args, context) =>
      updateCatchmentDistrict(args, context),
    deleteCatchmentDistrict: (_, args, context) =>
      deleteCatchmentDistrict(args, context),
  },
  CatchmentDistrict: {
    district: ({ district_id }, _args, context) =>
      getDistrictById(district_id, context),
    catchment_province: ({ catchment_province_id }, _args, context) =>
      getCatchmentProvinceById(catchment_province_id, context),
    district_users: (parent, _args, context) =>
      getDistrictUsers({ catchment_district_id: parent.id }, context),
  },
};

export {
  typeDefs as CatchmentDistrictTypeDefs,
  resolvers as CatchmentDistrictResolvers,
};
