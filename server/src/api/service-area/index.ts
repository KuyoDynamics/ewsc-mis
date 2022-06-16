import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createServiceArea,
  deleteServiceArea,
  getCatchmentDistrictServiceAreas,
  getServiceArea,
  getResidence,
  getCatchmentDistrict,
  getServiceAreaSewerConnections,
} from "../queries";
import { getServiceAreaWaterConnections } from "../service-area-water-connection/queries";

const typeDefs = gql`
  type ServiceArea {
    id: ID!
    residence_id: String!
    residence: ResidenceResult
    catchment_district_id: String!
    catchment_district: CatchmentDistrictResult!
    service_area_water_connections: [ServiceAreaWaterConnection!]
    service_area_sewer_connections: [ServiceAreaSewerConnection!]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    service_areas(catchment_district_id: ID!): [ServiceArea!]
    service_area(id: ID!): ServiceAreaResult!
  }

  extend type Mutation {
    createServiceArea(input: CreateServiceAreaInput!): ServiceAreaResult!
    deleteServiceArea(input: DeleteServiceAreaInput!): ServiceAreaResult!
  }

  union ServiceAreaResult =
      ServiceArea
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError

  input DeleteServiceAreaInput {
    id: ID!
  }

  input CreateServiceAreaInput {
    residence_id: String!
    catchment_district_id: String!
  }
`;

const resolvers: Resolvers = {
  Query: {
    service_areas: (_, args, context) =>
      getCatchmentDistrictServiceAreas(args, context),
    service_area: (_, args, context) => getServiceArea(args, context),
  },
  Mutation: {
    createServiceArea: (_, args, context) => createServiceArea(args, context),
    deleteServiceArea: (_, args, context) => deleteServiceArea(args, context),
  },
  ServiceArea: {
    residence: (parent, _args, context) =>
      getResidence({ id: parent.residence_id }, context),
    catchment_district: (parent, _args, context) =>
      getCatchmentDistrict(parent.catchment_district_id, context),
    service_area_water_connections: (parent, _args, context) =>
      getServiceAreaWaterConnections(parent.id, context),
    service_area_sewer_connections: (parent, _args, context) =>
      getServiceAreaSewerConnections(parent.id, context),
  },
};

export { resolvers as ServiceAreaResolvers, typeDefs as ServiceAreaTypeDefs };
