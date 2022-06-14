import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import { getCatchmentDistrictById } from "../queries";
import { getResidence } from "../residence/queries";
import {
  createServiceArea,
  deleteServiceArea,
  getCatchmentDistrictServiceAreas,
  getServiceArea,
} from "./queries";

const typeDefs = gql`
  type ServiceArea {
    id: ID!
    residence_id: String!
    residence: Residence
    catchment_district_id: String!
    catchment_district: CatchmentDistrict
    # service_area_water_connections: [ServiceAreaWaterConnection!]
    # service_area_sewer_connections: [ServiceAreaSewerConnection!]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    service_areas(catchment_district_id: ID!): [ServiceArea!]
    service_area(id: ID!): ServiceArea!
  }

  extend type Mutation {
    createServiceArea(input: CreateServiceAreaInput!): CreateServiceAreaPayload
    deleteServiceArea(input: DeleteServiceAreaInput!): DeleteServiceAreaPayload
  }

  input DeleteServiceAreaInput {
    id: ID!
  }

  type DeleteServiceAreaPayload {
    service_area: ServiceArea!
  }

  input CreateServiceAreaInput {
    residence_id: String!
    catchment_district_id: String!
  }

  type CreateServiceAreaPayload {
    service_area: ServiceArea!
  }

  scalar DateTime
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
      getCatchmentDistrictById(parent.catchment_district_id, context),
  },
};

export { resolvers as ServiceAreaResolvers, typeDefs as ServiceAreaTypeDefs };
