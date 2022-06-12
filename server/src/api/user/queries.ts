import { GraphQLContext } from "../..";
import {
  CreateInvitedUserPayload,
  CreateUserPayoad,
  DeleteUserPayload,
  DisableUserPayload,
  MutationCreateInvitedUserArgs,
  MutationCreateUserArgs,
  MutationDeleteUserArgs,
  MutationDisableUserArgs,
  MutationUpdateUserArgs,
  Organisation,
  QueryUserArgs,
  UpdateUserPayload,
  User,
  UserRoleType,
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

async function getUserOrganisations(
  user_id: string,
  context: GraphQLContext
): Promise<Organisation[]> {
  const user_organisations = await context.prisma.user
    .findUnique({
      where: {
        id: user_id,
      },
    })
    .user_organisations({
      include: {
        organisation: true,
      },
    });

  return user_organisations.map((value) => value.organisation);
}

function prepareUserRolesForUpdate(new_user_roles: UserRoleType[] | undefined) {
  return !new_user_roles?.length
    ? undefined
    : [...new Set([...new_user_roles, UserRoleType.User])];
}

function prepareUserRolesForCreate(user_roles: UserRoleType[]) {
  return !user_roles?.length
    ? [UserRoleType.User]
    : [...new Set([...user_roles, UserRoleType.User])];
}

async function createUser(
  args: MutationCreateUserArgs,
  context: GraphQLContext
): Promise<CreateUserPayoad> {
  const { email, first_name, last_name, password, user_roles } = args.input;

  const requiredFields = {
    email,
    first_name,
    last_name,
    password: await encryptPassword(password),
    user_roles: prepareUserRolesForCreate(user_roles),
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

async function createInvitedUser(
  args: MutationCreateInvitedUserArgs,
  context: GraphQLContext
): Promise<CreateInvitedUserPayload> {
  const { email, first_name, last_name, password, user_roles } =
    args.input.user_details;
  const { catchment_district_ids, organisation_id } = args.input;

  const user_districts = catchment_district_ids.map((id) => ({
    catchment_district_id: id,
    created_by: context.user.email,
    last_modified_by: context.user.email,
  }));

  const user = await context.prisma.user.create({
    data: {
      first_name,
      last_name,
      email,
      password: await encryptPassword(password),
      user_roles: prepareUserRolesForCreate(user_roles),
      created_by: context.user.email,
      last_modified_by: context.user.email,
      user_organisations: {
        create: {
          organisation_id,
          created_by: context.user.email,
          last_modified_by: context.user.email,
          district_users: {
            createMany: {
              data: user_districts,
              skipDuplicates: true,
            },
          },
        },
      },
    },
  });

  return { user } as CreateInvitedUserPayload;
}

async function updateUser(
  args: MutationUpdateUserArgs,
  context: GraphQLContext
): Promise<UpdateUserPayload> {
  const { user_roles } = args.input.update;
  const user = await context.prisma.user.update({
    where: {
      id: args.input.id,
    },
    data: {
      first_name: args.input.update.first_name || undefined,
      last_name: args.input.update.last_name || undefined,
      theme: args.input.update.theme || undefined,
      user_roles: prepareUserRolesForUpdate(user_roles!),
      last_modified_by: context.user.email,
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

export {
  createUser,
  getUsers,
  deleteUser,
  getUser,
  disableUser,
  updateUser,
  getUserOrganisations,
  createInvitedUser,
};
