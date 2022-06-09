import { GraphQLContext } from "../..";
import {
  CreateUserRoleScopePayload,
  MutationCreateUserRoleScopeArgs,
  RoleScopeLevel,
  ScopeLevelObject,
  UserRoleScope,
} from "../../libs/resolvers-types";

async function getScopeLevelObject(
  scope_level_id: string,
  role_scope_level: RoleScopeLevel,
  context: GraphQLContext
): Promise<ScopeLevelObject> {
  let result;
  if (role_scope_level === RoleScopeLevel.Organisation) {
    result = await context.prisma.organisation.findUnique({
      where: {
        id: scope_level_id,
      },
    });
  } else if (role_scope_level === RoleScopeLevel.District) {
    result = await context.prisma.district.findUnique({
      where: {
        id: scope_level_id,
      },
    });
  }

  return result as ScopeLevelObject;
}

async function getUserRoleScopes(
  user_role_id: string,
  context: GraphQLContext
): Promise<UserRoleScope[]> {
  const result = await context.prisma.userRole
    .findUnique({
      where: {
        id: user_role_id,
      },
    })
    .role_scopes();

  return result as UserRoleScope[];
}

async function getRoleScope(
  role_scope_id: string,
  context: GraphQLContext
): Promise<UserRoleScope> {
  const role_scope = await context.prisma.userRoleScope.findUnique({
    where: {
      id: role_scope_id,
    },
  });

  return role_scope as UserRoleScope;
}

async function createUserRoleScope(
  args: MutationCreateUserRoleScopeArgs,
  context: GraphQLContext
): Promise<CreateUserRoleScopePayload> {
  const requiredFields = {
    user_role_id: args.input.user_role_id,
    scope_level: args.input.scope_level,
    scope_level_id: args.input.scope_level_id,
    scope_permissions: args.input.scope_permissions,
    created_by: context.user.email,
    last_modified_by: context.user.email,
  };
  const result = await context.prisma.userRoleScope.create({
    data: requiredFields,
  });

  return result as CreateUserRoleScopePayload;
}

export {
  getUserRoleScopes,
  getScopeLevelObject,
  getRoleScope,
  createUserRoleScope,
};
