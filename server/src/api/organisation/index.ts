import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import { getOrganisationUsers } from "../organisation-user/queries";
import {
  createOrganisation,
  deleteOrganisation,
  getCatchmentProvinces,
  getCountry,
  getOrganisation,
  getOrganisations,
  updateOrganisation,
} from "../queries";

const typeDefs = gql`
  type Organisation {
    id: ID!
    name: String!
    logo: Byte
    country_id: String!
    country: CountryResult
    catchment_provinces: [CatchmentProvince!]
    users: [OrganisationUser!]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  type Query {
    organisations(country_id: ID!): [Organisation!]
    organisation(id: ID!): OrganisationResult
  }

  type Mutation {
    createOrganisation(input: CreateOrganisationInput!): OrganisationResult!
    updateOrganisation(input: UpdateOrganisationInput!): OrganisationResult!
    deleteOrganisation(input: DeleteOrganisationInput!): OrganisationResult!
  }

  input CreateOrganisationInput {
    name: String!
    logo: Byte
    country_id: String!
  }

  input UpdateOrganisationInput {
    id: ID!
    update: OrganisationUpdateInput!
  }

  input OrganisationUpdateInput {
    name: String
    logo: Byte
  }

  input DeleteOrganisationInput {
    id: ID!
  }

  union OrganisationResult =
      Organisation
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  Query: {
    organisations: (_, args, context) =>
      getOrganisations(args.country_id, context),
    organisation: (_, args, context) => getOrganisation(args.id, context),
  },

  Mutation: {
    createOrganisation: (_, args, context) => createOrganisation(args, context),
    updateOrganisation: (_, args, context) => updateOrganisation(args, context),
    deleteOrganisation: (_, args, context) =>
      deleteOrganisation(args.input.id, context),
  },
  Organisation: {
    country: (parent, _args, context) => getCountry(parent.country_id, context),
    catchment_provinces: (parent, _args, context) =>
      getCatchmentProvinces(parent.id, context),
    users: (parent, _args, context) =>
      getOrganisationUsers({ organisation_id: parent.id }, context),
  },
};

export { typeDefs as OrganisationTypeDefs, resolvers as OrganisationResolvers };
