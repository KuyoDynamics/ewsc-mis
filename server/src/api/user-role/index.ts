import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import { getUser } from "../user/queries";
import {
  createUserRole,
  deleteUserRole,
  getUserRole,
  getUserRoles,
} from "./queries";

const typeDefs = gql`
  type UserRole {
    id: ID!
    role: UserRoleType
    user_id: String!
    user: User
    # role_scopes: [UserRoleScope!]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    user_roles(user_id: ID!): [UserRole!]
    user_role(role_id: ID!): UserRole
  }

  extend type Mutation {
    createUserRole(input: CreateUserRoleInput!): CreateUserRolePayload
    deleteUserRole(input: DeleteUserRoleInput!): DeleteUserRolePayload
  }

  input CreateUserRoleInput {
    role: UserRoleType!
    user_id: String!
  }

  type CreateUserRolePayload {
    user_role: UserRole
  }

  input DeleteUserRoleInput {
    id: ID!
  }

  type DeleteUserRolePayload {
    user_role: UserRole
  }

  enum UserRoleType {
    SUPPORT
    ADMIN
    APPROVER
    DATA_ENTRY
    USER
  }
  scalar DateTime
`;

const resolvers: Resolvers = {
  Query: {
    user_roles: (_, args, context) => getUserRoles(args, context),
    user_role: (_, args, context) => getUserRole(args, context),
  },
  UserRole: {
    user: (parent, _args, context) => getUser({ id: parent.user_id }, context),
  },
  Mutation: {
    createUserRole: (_, args, context) => createUserRole(args, context),
    deleteUserRole: (_, args, context) => deleteUserRole(args, context),
  },
};

export { typeDefs as UserRoleTypeDefs, resolvers as UserRoleResolvers };
