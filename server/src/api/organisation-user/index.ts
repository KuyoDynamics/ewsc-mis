import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import { getOrganisationById } from "../queries";
import { getUser } from "../user/queries";
import {
  createOrganisationUser,
  deleteOrganisationUser,
  getOrganisationUser,
  getOrganisationUsers,
  updateOrganisationUser,
} from "./queries";
const typeDefs = gql`
  type OrganisationUser {
    id: ID!
    is_owner: Boolean!
    user_id: String!
    user: User
    organisation_id: String!
    organisation: Organisation
    # district_users: [DistrictUser!]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    organisation_users(organisation_id: ID!): [OrganisationUser!]
    organisation_user(organisation_user_id: ID!): OrganisationUser
  }

  extend type Mutation {
    createOrganisationUser(
      input: CreateOrganisationUserInput!
    ): CreateOrganisationUserPayload
    updateOrganisationUser(
      input: UpdateOrganisationUserInput!
    ): UpdateOrganisationUserPayload
    deleteOrganisationUser(
      input: DeleteOrganisationUserInput!
    ): DeleteOrganisationUserPayload
  }

  input CreateOrganisationUserInput {
    user_id: ID!
    organisation_id: ID!
  }

  type CreateOrganisationUserPayload {
    organisation_user: OrganisationUser
  }

  input UpdateOrganisationUserInput {
    id: ID!
    update: OrganisationUserUpdateInput!
  }

  input OrganisationUserUpdateInput {
    is_owner: Boolean!
  }

  type UpdateOrganisationUserPayload {
    organisation_user: OrganisationUser
  }

  input DeleteOrganisationUserInput {
    id: ID!
  }

  type DeleteOrganisationUserPayload {
    organisation_user: OrganisationUser
  }

  scalar DateTime
`;

const resolvers: Resolvers = {
  OrganisationUser: {
    user: (parent, _args, context) => getUser({ id: parent.user_id }, context),
    organisation: (parent, _args, context) =>
      getOrganisationById(parent.organisation_id, context),
  },
  Query: {
    organisation_users: (_, args, context) =>
      getOrganisationUsers(args, context),
    organisation_user: (_, args, context) => getOrganisationUser(args, context),
  },
  Mutation: {
    createOrganisationUser: (_, args, context) =>
      createOrganisationUser(args, context),
    updateOrganisationUser: (_, args, context) =>
      updateOrganisationUser(args, context),
    deleteOrganisationUser: (_, args, context) =>
      deleteOrganisationUser(args, context),
  },
};

export {
  typeDefs as OrganisationUserTypeDefs,
  resolvers as OrganisationUserResolvers,
};
