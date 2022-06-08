import { GraphQLContext } from "../..";
import {
  CreateUserPayoad,
  DeleteUserPayload,
  DisableUserPayload,
  MutationCreateUserArgs,
  MutationDeleteUserArgs,
  MutationDisableUserArgs,
  MutationUpdateUserArgs,
  QueryUserArgs,
  UpdateUserPayload,
  User,
} from "../../libs/resolvers-types";
import { encryptPassword } from "../../utils";

async function getUsers(context: GraphQLContext): Promise<User[]> {
  const result = await context.prisma.user.findMany({});

  return result as User[];
}
async function getUser(
  args: QueryUserArgs,
  context: GraphQLContext
): Promise<User> {
  const user = await context.prisma.user.findUnique({
    where: {
      id: args.id,
    },
  });

  return user as User;
}

async function createUser(
  args: MutationCreateUserArgs,
  context: GraphQLContext
): Promise<CreateUserPayoad> {
  const { email, first_name, last_name, password } = args.input;

  const requiredFields = {
    email,
    first_name,
    last_name,
    password: await encryptPassword(password),
    created_by: context.user.email,
    last_modified_by: context.user.email,
  };

  const user = await context.prisma.user.create({
    data: requiredFields,
  });

  return {
    user,
  } as CreateUserPayoad;
}

async function updateUser(
  args: MutationUpdateUserArgs,
  context: GraphQLContext
): Promise<UpdateUserPayload> {
  const user = await context.prisma.user.update({
    where: {
      id: args.input.id,
    },
    data: {
      first_name: args.input.update.first_name || undefined,
      last_name: args.input.update.last_name || undefined,
      theme: args.input.update.theme || undefined,
    },
  });

  return { user } as UpdateUserPayload;
}

async function deleteUser(
  args: MutationDeleteUserArgs,
  context: GraphQLContext
): Promise<DeleteUserPayload> {
  const user = await context.prisma.user.delete({
    where: {
      id: args.input.id,
    },
  });

  return user as DeleteUserPayload;
}

async function disableUser(
  args: MutationDisableUserArgs,
  context: GraphQLContext
): Promise<DisableUserPayload> {
  const user = await context.prisma.user.update({
    where: {
      id: args.input.id,
    },
    data: {
      disabled: args.input.update.disabled,
      last_modified_by: context.user.email,
    },
  });

  return { user } as DisableUserPayload;
}

export { createUser, getUsers, deleteUser, getUser, disableUser, updateUser };
