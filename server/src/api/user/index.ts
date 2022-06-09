import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createUser,
  deleteUser,
  disableUser,
  getUser,
  getUsers,
  updateUser,
} from "./queries";

const typeDefs = gql`
  type User {
    id: String!
    first_name: String!
    last_name: String!
    email: String!
    disabled: Boolean
    # user_organisations: [OrganisationUser!]
    user_roles: [UserRoleType!]!
    # hashed_confirmation_token: String
    confirmed_at: DateTime
    # hashed_password_reset_token: String
    last_login: DateTime
    theme: UserTheme
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    users: [User!]
    user(id: ID!): User
  }

  extend type Mutation {
    createUser(input: CreateUserInput!): CreateUserPayoad
    deleteUser(input: DeleteUserInput!): DeleteUserPayload
    disableUser(input: DisableUserInput!): DisableUserPayload
    updateUser(input: UpdateUserInput!): UpdateUserPayload
  }

  input CreateUserInput {
    first_name: String!
    last_name: String!
    email: String!
    password: String!
    user_roles: [UserRoleType!]!
  }

  type CreateUserPayoad {
    user: User
  }

  input DeleteUserInput {
    id: ID!
  }

  type DeleteUserPayload {
    user: User
  }

  input DisableUserInput {
    id: ID!
    update: UserDisableInput!
  }

  input UserDisableInput {
    disabled: Boolean!
  }

  type DisableUserPayload {
    user: User
  }

  input UpdateUserInput {
    id: ID!
    update: UserUpdateInput!
  }

  input UserUpdateInput {
    first_name: String
    last_name: String
    theme: UserTheme
    user_roles: [UserRoleType!]
  }

  type UpdateUserPayload {
    user: User
  }

  enum UserRoleType {
    SUPPORT
    ADMIN
    APPROVER
    DATA_ENTRY
    USER
  }

  enum UserTheme {
    DARK
    LIGHT
  }
  scalar DateTime
`;

const resolvers: Resolvers = {
  Query: {
    users: (_, _args, context) => getUsers(context),
    user: (_, args, context) => getUser(args, context),
  },
  Mutation: {
    createUser: (_, args, context) => createUser(args, context),
    deleteUser: (_, args, context) => deleteUser(args, context),
    disableUser: (_, args, context) => disableUser(args, context),
    updateUser: (_, args, context) => updateUser(args, context),
  },
};

export { typeDefs as UserTypeDefs, resolvers as UserResolvers };
