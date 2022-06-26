import { AuthenticationError } from "apollo-server-core";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import {
  encryptPassword,
  isValidPassword,
  GraphQLContext,
  generateClientErrors,
} from "../../utils";
import {
  LoginResult,
  MutationCreateInvitedUserArgs,
  MutationCreateUserArgs,
  MutationDeleteUserArgs,
  MutationDisableUserArgs,
  MutationLoginArgs,
  MutationRequestPasswordResetArgs,
  MutationResetPasswordArgs,
  MutationUpdateUserArgs,
  Organisation,
  OrganisationUser,
  PasswordResetRequestResult,
  PasswordResetResult,
  QueryUserArgs,
  User,
  UserResult,
  UserRoleType,
} from "../../libs/resolvers-types";

async function getUsers(context: GraphQLContext): Promise<User[]> {
  const result = await context.prisma.user.findMany({});

  return result as User[];
}

async function getUser(
  args: QueryUserArgs,
  context: GraphQLContext
): Promise<UserResult> {
  try {
    const user = await context.prisma.user.findUnique({
      where: {
        id: args.id,
      },
    });

    if (!user) {
      return {
        __typename: "ApiNotFoundError",
        message: `The Country with the id ${args.id} does not exist.`,
      };
    }

    return {
      __typename: "User",
      ...user,
    } as UserResult;
  } catch (error) {
    return {
      __typename: "ApiNotFoundError",
      message: `Failed to find Country with the id ${args.id}.`,
      errors: generateClientErrors(error),
    };
  }
}

async function getUserOrganisations(
  user_id: string,
  context: GraphQLContext
): Promise<OrganisationUser[]> {
  return context.prisma.user
    .findUnique({
      where: {
        id: user_id,
      },
    })
    .user_organisations();
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
): Promise<UserResult> {
  try {
    const user = await context.prisma.user.create({
      data: {
        email: args.input.email,
        first_name: args.input.first_name,
        last_name: args.input.last_name,
        password: await encryptPassword(args.input.password),
        user_roles: prepareUserRolesForCreate(args.input.user_roles),
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });

    return {
      __typename: "User",
      ...user,
    } as UserResult;
  } catch (error) {
    return {
      __typename: "ApiCreateError",
      message: `Failed to create User.`,
      errors: generateClientErrors(error),
    };
  }
}

async function createInvitedUser(
  args: MutationCreateInvitedUserArgs,
  context: GraphQLContext
): Promise<UserResult> {
  try {
    const { email, first_name, last_name, password, user_roles } =
      args.input.user_details;
    const { catchment_district_ids, organisation_id } = args.input;

    const user_districts = catchment_district_ids.map((id) => ({
      catchment_district_id: id,
      created_by: "system_user@kuyodynamics.com",
      last_modified_by: "system_user@kuyodynamics.com",
    }));

    const user = await context.prisma.user.create({
      data: {
        first_name,
        last_name,
        email,
        password: await encryptPassword(password),
        user_roles: prepareUserRolesForCreate(user_roles),
        created_by: "system_user@kuyodynamics.com",
        last_modified_by: "system_user@kuyodynamics.com",
        user_organisations: {
          create: {
            organisation_id,
            created_by: "system_user@kuyodynamics.com",
            last_modified_by: "system_user@kuyodynamics.com",
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

    return {
      __typename: "User",
      ...user,
    } as UserResult;
  } catch (error) {
    return {
      __typename: "ApiCreateError",
      message: `Failed to create User.`,
      errors: generateClientErrors(error),
    };
  }
}

async function updateUser(
  args: MutationUpdateUserArgs,
  context: GraphQLContext
): Promise<UserResult> {
  try {
    const user = await context.prisma.user.update({
      where: {
        id: args.input.id,
      },
      data: {
        first_name: args.input.update.first_name || undefined,
        last_name: args.input.update.last_name || undefined,
        theme: args.input.update.theme || undefined,
        user_roles: prepareUserRolesForUpdate(args.input.update.user_roles!),
        last_modified_by: args.input.update ? context.user.email : undefined,
      },
    });

    return {
      __typename: "User",
      ...user,
    } as UserResult;
  } catch (error) {
    return {
      __typename: "ApiUpdateError",
      message: `Failed to update User with id ${args.input.id}.`,
      errors: generateClientErrors(error, "id"),
    };
  }
}

async function deleteUser(
  args: MutationDeleteUserArgs,
  context: GraphQLContext
): Promise<UserResult> {
  try {
    const user = await context.prisma.user.delete({
      where: {
        id: args.input.id,
      },
    });

    return {
      __typename: "User",
      ...user,
    } as UserResult;
  } catch (error) {
    return {
      __typename: "ApiDeleteError",
      message: `Failed to delete User with id ${args.input.id}.`,
      errors: generateClientErrors(error, "id"),
    };
  }
}

async function disableUser(
  args: MutationDisableUserArgs,
  context: GraphQLContext
): Promise<UserResult> {
  try {
    const user = await context.prisma.user.update({
      where: {
        id: args.input.id,
      },
      data: {
        disabled: args.input.update.disabled,
        last_modified_by: args.input.update ? context.user.email : undefined,
      },
    });

    return {
      __typename: "User",
      ...user,
    } as UserResult;
  } catch (error) {
    return {
      __typename: "ApiUpdateError",
      message: `Failed to disable/enable User with id ${args.input.id}.`,
      errors: generateClientErrors(error, "id"),
    };
  }
}

async function login(
  args: MutationLoginArgs,
  context: GraphQLContext
): Promise<LoginResult> {
  let accessToken;
  try {
    const user = await context.prisma.user.findUnique({
      where: {
        email: args.input.email,
      },
    });

    if (!user)
      throw new AuthenticationError("No account found for this email.", {
        field: "email",
      });

    if (user.disabled)
      throw new AuthenticationError("Account is disabled.", { field: "email" });

    if (!(await isValidPassword(args.input.password, user.password)))
      throw new AuthenticationError("Invalid password.", { field: "password" });

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
      throw new AuthenticationError("Failed to generate access token.", {
        field: "email",
      });
    }

    await context.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        last_login: new Date(),
      },
    });
    return {
      __typename: "LoginSuccess",
      accessToken,
      id: user.id,
    };
  } catch (error) {
    return {
      __typename: "ApiLoginError",
      message: "Login Failed.",
      errors: generateClientErrors(
        error,
        error instanceof AuthenticationError
          ? error.extensions.field
          : "email,password"
      ),
    };
  }
}

async function requestPasswordReset(
  args: MutationRequestPasswordResetArgs,
  context: GraphQLContext
): Promise<PasswordResetRequestResult> {
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
    return {
      __typename: "PasswordResetRequestPayload",
      hashed_password_reset_token,
    };
  } catch (error) {
    return {
      __typename: "ApiPasswordResetError",
      message: "Password Reset Request Failed.",
      errors: generateClientErrors(error, "email,password"),
    };
  }
}

async function resetPassword(
  args: MutationResetPasswordArgs,
  context: GraphQLContext
): Promise<PasswordResetResult> {
  try {
    const user = await context.prisma.user.findFirst({
      where: {
        hashed_password_reset_token: args.input.hashed_password_reset_token,
      },
    });

    if (!user) throw new AuthenticationError("Invalid password reset link.");

    if (user.disabled) throw new AuthenticationError("Account is disabled.");

    const updatedUser = await context.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: await encryptPassword(args.input.password),
        hashed_password_reset_token: "",
        last_modified_by: user.email,
      },
    });

    return {
      __typename: "User",
      ...updatedUser,
    } as PasswordResetResult;
  } catch (error) {
    return {
      __typename: "ApiPasswordResetError",
      message: "Password Reset Failed.",
      errors: generateClientErrors(error, "email"),
    };
  }
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
