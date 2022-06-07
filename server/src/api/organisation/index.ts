import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createOrganisation,
  deleteOrganisation,
  getAllOrganisations,
  getCatchmentProvinces,
  getCountryByOrganisationId,
  getOrganisationById,
  getOrganisationsByCountryId,
  updateOrganisation,
} from "../queries";

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

  type Query {
    allOrganisations: [Organisation!]
    organisations(country_id: ID!): [Organisation!]
    organisation(id: ID!): Organisation
  }

  type Mutation {
    createOrganisation(
      input: CreateOrganisationInput!
    ): CreateOrganisationPayload
    updateOrganisation(
      input: UpdateOrganisationInput!
    ): UpdateOrganisationPayload
    deleteOrganisation(
      input: DeleteOrganisationInput!
    ): DeleteOrganisationPayload
  }

  input CreateOrganisationInput {
    name: String!
    logo: Byte
    country_id: String!
    # catchment_provinces: [CreateCatchmentProvinceInput!]
    # users: [User]
  }

  type CreateOrganisationPayload {
    organisation: Organisation
  }

  input UpdateOrganisationInput {
    id: ID!
    update: OrganisationUpdateInput!
  }

  input OrganisationUpdateInput {
    name: String
    logo: Byte
  }

  type UpdateOrganisationPayload {
    organisation: Organisation
  }

  input DeleteOrganisationInput {
    id: ID!
  }

  type DeleteOrganisationPayload {
    organisation: Organisation
  }

  scalar DateTime
  scalar Byte
`;

const resolvers: Resolvers = {
  Query: {
    allOrganisations: (_, _args, context) => getAllOrganisations(context),
    organisations: (_, args, context) =>
      getOrganisationsByCountryId(args.country_id, context),
    organisation: (_, args, context) => getOrganisationById(args.id, context),
  },

  Mutation: {
    createOrganisation: (_, args, context) => createOrganisation(args, context),
    updateOrganisation: (_, args, context) => updateOrganisation(args, context),
    deleteOrganisation: (_, args, context) =>
      deleteOrganisation(args.input.id, context),
  },
  Organisation: {
    country: (parent, _args, context) =>
      getCountryByOrganisationId(parent.id, context),
    catchment_provinces: (parent, _args, context) =>
      getCatchmentProvinces(parent.id, context),
  },
};

export { typeDefs as OrganisationTypeDefs, resolvers as OrganisationResolvers };
