import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createOrganisationUser,
  deleteOrganisationUser,
  getOrganisationUser,
  getOrganisationUsers,
  updateOrganisationUser,
  getOrganisation,
  getUser,
} from "../queries";
const typeDefs = gql`
  type OrganisationUser {
    id: ID!
    is_owner: Boolean!
    user_id: String!
    user: UserResult
    organisation_id: String!
    organisation: OrganisationResult
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    organisation_users(organisation_id: ID!): [OrganisationUser!]
    organisation_user(organisation_user_id: ID!): OrganisationUserResult!
  }

  extend type Mutation {
    createOrganisationUser(
      input: CreateOrganisationUserInput!
    ): OrganisationUserResult!
    updateOrganisationUser(
      input: UpdateOrganisationUserInput!
    ): OrganisationUserResult!
    deleteOrganisationUser(
      input: DeleteOrganisationUserInput!
    ): OrganisationUserResult!
  }

  input CreateOrganisationUserInput {
    user_id: ID!
    organisation_id: ID!
  }

  input UpdateOrganisationUserInput {
    id: ID!
    update: OrganisationUserUpdateInput!
  }

  input OrganisationUserUpdateInput {
    is_owner: Boolean!
  }

  input DeleteOrganisationUserInput {
    id: ID!
  }

  union OrganisationUserResult =
      OrganisationUser
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  OrganisationUser: {
    user: (parent, _args, context) => getUser({ id: parent.user_id }, context),
    organisation: (parent, _args, context) =>
      getOrganisation(parent.organisation_id, context),
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
