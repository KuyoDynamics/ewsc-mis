import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import { getCatchmentProvinceById, getDistrictById } from "../queries";

const typeDefs = gql`
  type CatchmentDistrict {
    id: ID!
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
    # users                  DistrictUser[]

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  input CreateCatchmentDistrictInput {
    district_id: String!
    catchment_province_id: String!
    # water_treatment_plants WaterTreatmentPlant[]
    # service_areas          ServiceArea[]
    # sewer_treatment_plants SewerTreatmentPlant[]
    # reports                Report[]
    # users                  DistrictUser[]
  }

  scalar DateTime
`;

const resolvers: Resolvers = {
  CatchmentDistrict: {
    district: ({ district_id }, _args, context) =>
      getDistrictById(district_id, context),
    catchment_province: ({ catchment_province_id }, _args, context) =>
      getCatchmentProvinceById(catchment_province_id, context),
  },
};

export {
  typeDefs as CatchmentDistrictTypeDefs,
  resolvers as CatchmentDistrictResolvers,
};
