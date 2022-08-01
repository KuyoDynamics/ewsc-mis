import { gql } from 'apollo-server-express';
import { Resolvers } from '../../libs/resolvers-types';
import {
  createCatchmentDistrict,
  deleteCatchmentDistrict,
  getCatchmentDistrict,
  getCatchmentDistricts,
  getCatchmentDistrictServiceAreas,
  getCatchmentProvince,
  getDistrict,
  getSewerTreatmentPlants,
  getWaterTreatmentPlants,
  updateCatchmentDistrict,
  getDistrictUsers,
  getReports,
  getReportsByCatchmentDistrict,
} from '../queries';

const typeDefs = gql`
  type CatchmentDistrict {
    id: ID!
    disabled: Boolean!
    district_id: String!
    district: DistrictResult
    catchment_province_id: String!
    catchment_province: CatchmentProvinceResult
    water_treatment_plants: [WaterTreatmentPlant!]
    service_areas: [ServiceArea!]
    sewer_treatment_plants: [SewerTreatmentPlant!]
    reports: [Report!]
    district_users: [DistrictUser!]

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  type CatchmentDistrictView {
    id: ID!
    name: String!
    code: String!
    province_id: String!
    province: ProvinceResult
    organisations_in_district: [CatchmentDistrict!]
    residences: [Residence!]

    disabled: Boolean!
    catchment_district_id: String!
    catchment_province_id: String!
    catchment_province: CatchmentProvinceView
    water_treatment_plants: [WaterTreatmentPlant!]
    service_areas: [ServiceArea!]
    sewer_treatment_plants: [SewerTreatmentPlant!]
    reports: [Report!]
    district_users: [DistrictUser!]

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    catchment_districts(catchment_province_id: ID!): [CatchmentDistrict!]
    catchment_district(catchment_district_id: ID!): CatchmentDistrictResult!
  }

  extend type Mutation {
    createCatchmentDistrict(
      input: CreateCatchmentDistrictInput!
    ): CatchmentDistrictResult!
    updateCatchmentDistrict(
      input: UpdateCatchmentDistrictInput!
    ): CatchmentDistrictResult!
    deleteCatchmentDistrict(
      input: DeleteCatchmentDistrictInput!
    ): CatchmentDistrictResult!
  }

  input CreateCatchmentDistrictInput {
    district_id: String!
    catchment_province_id: String!
  }

  input UpdateCatchmentDistrictInput {
    id: ID!
    update: CatchmentDistrictUpdateInput!
  }

  input CatchmentDistrictUpdateInput {
    disabled: Boolean!
  }

  input DeleteCatchmentDistrictInput {
    id: ID!
  }

  union CatchmentDistrictResult =
      CatchmentDistrict
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  Query: {
    catchment_districts: (_, args, context) =>
      getCatchmentDistricts(args.catchment_province_id, context),
    catchment_district: (_, args, context) =>
      getCatchmentDistrict(args.catchment_district_id, context),
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
      getDistrict(district_id, context),
    catchment_province: ({ catchment_province_id }, _args, context) =>
      getCatchmentProvince(catchment_province_id, context),
    district_users: (parent, _args, context) =>
      getDistrictUsers({ catchment_district_id: parent.id }, context),
    water_treatment_plants: (parent, _args, context) =>
      getWaterTreatmentPlants({ catchment_district_id: parent.id }, context),
    service_areas: (parent, _args, context) =>
      getCatchmentDistrictServiceAreas(
        { catchment_district_id: parent.id },
        context
      ),
    sewer_treatment_plants: (parent, _args, context) =>
      getSewerTreatmentPlants({ catchment_district_id: parent.id }, context),
    reports: (parent, _args, context) =>
      getReportsByCatchmentDistrict(parent.id, context),
  },
};

export {
  typeDefs as CatchmentDistrictTypeDefs,
  resolvers as CatchmentDistrictResolvers,
};
