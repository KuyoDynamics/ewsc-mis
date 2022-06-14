import { AuthenticationError } from "apollo-server-core";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { encryptPassword, isValidPassword, GraphQLContext } from "../../utils";
import {
  CreateInvitedUserPayload,
  CreateUserPayoad,
  DeleteUserPayload,
  DisableUserPayload,
  LoginPayload,
  MutationCreateInvitedUserArgs,
  MutationCreateUserArgs,
  MutationDeleteUserArgs,
  MutationDisableUserArgs,
  MutationLoginArgs,
  MutationRequestPasswordResetArgs,
  MutationResetPasswordArgs,
  MutationUpdateUserArgs,
  Organisation,
  PasswordResetPayload,
  PasswordResetRequestPayload,
  QueryUserArgs,
  UpdateUserPayload,
  User,
  UserRoleType,
} from "../../libs/resolvers-types";

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
    created_by: context.user?.email,
    last_modified_by: context.user?.email,
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
    created_by: context.user?.email,
    last_modified_by: context.user?.email,
  }));

  const user = await context.prisma.user.create({
    data: {
      first_name,
      last_name,
      email,
      password: await encryptPassword(password),
      user_roles: prepareUserRolesForCreate(user_roles),
      created_by: context.user?.email,
      last_modified_by: context.user?.email,
      user_organisations: {
        create: {
          organisation_id,
          created_by: context.user?.email,
          last_modified_by: context.user?.email,
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
      last_modified_by: context.user?.email,
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

  console.log("Deleted User", user);

  return { user } as DeleteUserPayload;
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
      last_modified_by: context.user?.email,
    },
  });

  return { user } as DisableUserPayload;
}

async function login(
  args: MutationLoginArgs,
  context: GraphQLContext
): Promise<LoginPayload> {
  let accessToken;
  try {
    const user = await context.prisma.user.findUnique({
      where: {
        email: args.input.email,
      },
    });

    if (!user)
      throw new AuthenticationError("No account found for this email.");

    if (user.disabled) throw new AuthenticationError("Account is disabled.");

    if (!(await isValidPassword(args.input.password, user.password)))
      throw new AuthenticationError("Invalid password.");

    try {
      accessToken = jwt.sign(
        { roles: user.user_roles },
        process.env.JWT_SECRET!,
        {
          algorithm: "HS256",
          subject: user.id,
          expiresIn: "1d",
        }
      );
    } catch (error) {
      console.log("Failed to generate access token.", error);
      // Also send to Sentry
      throw new AuthenticationError("Failed to generate access token.");
    }

    await context.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        last_login: new Date(),
      },
    });
  } catch (error) {
    console.log("Something bad happened during Authentication: ", error);
    // Also send to Sentry
    throw error;
  }

  return { accessToken };
}

async function requestPasswordReset(
  args: MutationRequestPasswordResetArgs,
  context: GraphQLContext
): Promise<PasswordResetRequestPayload> {
  let hashed_password_reset_token;
  try {
    const user = await context.prisma.user.findUnique({
      where: {
        email: args.input.email,
      },
    });

    if (!user)
      throw new AuthenticationError("Account with this email does not exit.");

    if (user.disabled) throw new AuthenticationError("Account is disabled.");

    hashed_password_reset_token = uuidv4();

    await context.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        hashed_password_reset_token,
        last_modified_by: user.email,
      },
    });

    // We can send email at this point like this, async. After we figure out sending emails, we will not return
    // Email.password_recovery_email(user, token) |> Mailer.deliver_later()
  } catch (error) {
    // Send to Sentry for cryptic errors. TODO
    console.log(error);
    throw error;
  }
  return { hashed_password_reset_token } as PasswordResetRequestPayload;
}

async function resetPassword(
  args: MutationResetPasswordArgs,
  context: GraphQLContext
): Promise<PasswordResetPayload> {
  let updatedUser;
  try {
    const user = await context.prisma.user.findFirst({
      where: {
        hashed_password_reset_token: args.input.hashed_password_reset_token,
      },
    });

    if (!user) throw new AuthenticationError("Invalid password reset link.");

    if (user.disabled) throw new AuthenticationError("Account is disabled.");

    updatedUser = await context.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: await encryptPassword(args.input.password),
        hashed_password_reset_token: "",
        last_modified_by: user.email,
      },
    });
  } catch (error) {
    if (!(error instanceof AuthenticationError)) {
      // Also send to sentry. TODO:
      console.log("Error:", error);
    }
    throw error;
  }
  return { user: updatedUser } as PasswordResetPayload;
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
  login,
  requestPasswordReset,
  resetPassword,
};
