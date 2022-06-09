import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import { getUserRole } from "../user-role/queries";
import {
  createUserRoleScope,
  getRoleScope,
  getScopeLevelObject,
  getUserRoleScopes,
} from "./queries";

const typeDefs = gql`
  type UserRoleScope {
    id: ID!
    scope_level: RoleScopeLevel!
    scope_level_id: String!
    scope_level_object: ScopeLevelObject
    scope_permissions: [PermissionType!]!
    user_role_id: String!
    user_role: UserRole
  }

  extend type Query {
    role_scopes(user_role_id: ID!): [UserRoleScope!]
    role_scope(role_scope_id: ID!): UserRoleScope
  }

  extend type Mutation {
    createUserRoleScope(
      input: CreateUserRoleScopeInput!
    ): CreateUserRoleScopePayload
    # TODO: Add update and delete mutations
  }

  input CreateUserRoleScopeInput {
    user_role_id: String!
    scope_level: RoleScopeLevel!
    scope_level_id: String!
    scope_permissions: [PermissionType!]!
  }

  type CreateUserRoleScopePayload {
    user_role_scope: UserRoleScope
  }

  union ScopeLevelObject = Organisation | District

  enum RoleScopeLevel {
    ORGANISATION
    DISTRICT
  }

  enum PermissionType {
    VIEW
    CREATE
    UPDATE
    DELETE
  }
`;

const resolvers: Resolvers = {
  Query: {
    role_scopes: (_, args, context) =>
      getUserRoleScopes(args.user_role_id, context),
    role_scope: (_, args, context) => getRoleScope(args.role_scope_id, context),
  },
  Mutation: {
    createUserRoleScope: (_, args, context) =>
      createUserRoleScope(args, context),
  },
  UserRoleScope: {
    user_role: (parent, _args, context) =>
      getUserRole({ role_id: parent.user_role_id }, context),
    scope_level_object: (parent, _args, context) =>
      getScopeLevelObject(parent.scope_level_id, parent.scope_level, context),
  },
};

export {
  typeDefs as UserRoleScopeTypeDefs,
  resolvers as UserRoleScopeResolvers,
};
