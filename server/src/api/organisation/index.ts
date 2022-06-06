import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import { getCatchmentProvinces, getCountryByOrganisationId } from "../queries";

const typeDefs = gql`
  type Organisation {
    id: ID!
    name: String!
    logo: Byte
    country_id: String!
    country: Country
    catchment_provinces: [CatchmentProvince!]
    # users: [User]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  input CreateOrganisationInput {
    name: String!
    logo: Byte
    country_id: String!
    # catchment_provinces: [CreateCatchmentProvinceInput!]
    # users: [User]
  }

  scalar DateTime
  scalar Byte
`;

const resolvers: Resolvers = {
  Organisation: {
    country: (parent, _args, context) =>
      getCountryByOrganisationId(parent.id, context),
    catchment_provinces: (parent, _args, context) =>
      getCatchmentProvinces(parent.id, context),
  },
};

export { typeDefs as OrganisationTypeDefs, resolvers as OrganisationResolvers };
