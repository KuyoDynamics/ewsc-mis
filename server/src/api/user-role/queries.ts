import { Context } from "vm";
import { GraphQLContext } from "../..";
import {
  CreateUserRolePayload,
  DeleteUserRolePayload,
  MutationCreateUserRoleArgs,
  MutationDeleteUserRoleArgs,
  QueryUser_RoleArgs,
  QueryUser_RolesArgs,
  UserRole,
} from "../../libs/resolvers-types";

async function getUserRoles(
  args: QueryUser_RolesArgs,
  context: GraphQLContext
): Promise<UserRole[]> {
  const user_roles = await context.prisma.user
    .findUnique({
      where: {
        id: args.user_id,
      },
    })
    .user_roles();

  return user_roles as UserRole[];
}

async function getUserRole(
  args: QueryUser_RoleArgs,
  context: GraphQLContext
): Promise<UserRole> {
  const user_role = await context.prisma.userRole.findUnique({
    where: {
      id: args.role_id,
    },
  });
  return user_role as UserRole;
}

async function createUserRole(
  args: MutationCreateUserRoleArgs,
  context: Context
): Promise<CreateUserRolePayload> {
  const requiredFields = {
    role: args.input.role,
    user_id: args.input.user_id,
    created_by: context.user.email,
    last_modified_by: context.user.email,
  };
  const user_role = await context.prisma.userRole.create({
    data: requiredFields,
  });

  return { user_role } as CreateUserRolePayload;
}

async function deleteUserRole(
  args: MutationDeleteUserRoleArgs,
  context: GraphQLContext
): Promise<DeleteUserRolePayload> {
  const user_role = await context.prisma.userRole.delete({
    where: {
      id: args.input.id,
    },
  });

  return user_role as DeleteUserRolePayload;
}

export { createUserRole, getUserRoles, getUserRole, deleteUserRole };
