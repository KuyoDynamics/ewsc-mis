import { AuthenticationError } from 'apollo-server-core';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import {
  encryptPassword,
  isValidPassword,
  GraphQLContext,
  generateClientErrors,
  prepareDistrictUserRolesForCreate,
} from '../../utils';
import {
  CatchmentDistrictInput,
  DistrictResult,
  DistrictUser,
  LoginResult,
  MutationCreateInvitedUserArgs,
  MutationCreateUserArgs,
  MutationDeleteUserArgs,
  MutationDisableUserArgs,
  MutationLoginArgs,
  MutationRequestPasswordResetArgs,
  MutationResetPasswordArgs,
  MutationUpdateUserArgs,
  OrganisationUserRoleType,
  PasswordResetRequestResult,
  PasswordResetResult,
  QueryDefault_User_DistrictArgs,
  QueryUserArgs,
  User,
  UserOrganisation,
  UserResult,
} from '../../libs/resolvers-types';

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
        __typename: 'ApiNotFoundError',
        message: `The User with the id ${args.id} does not exist.`,
      };
    }

    return {
      __typename: 'User',
      ...user,
    } as User;
  } catch (error) {
    return {
      __typename: 'ApiNotFoundError',
      message: `Failed to find User with the id ${args.id}.`,
      errors: generateClientErrors(error),
    };
  }
}

async function getUserDistricts(
  user_id: string,
  context: GraphQLContext
): Promise<DistrictUser[]> {
  const result = await context.prisma.user.findUnique({
    where: {
      id: user_id,
    },
    select: {
      user_organisations: {
        select: {
          district_users: true,
        },
      },
    },
  });
  const districts = result?.user_organisations.flatMap(
    (org_user) => org_user.district_users
  );
  return districts as DistrictUser[];
}

async function getDefaultUserDistrict(
  args: QueryDefault_User_DistrictArgs,
  context: GraphQLContext
): Promise<DistrictResult> {
  try {
    const result = await context.prisma.user.findUnique({
      where: {
        id: args.user_id,
      },
      select: {
        user_organisations: {
          where: {
            id: args.organisation_user_id,
          },
          select: {
            district_users: {
              where: {
                is_default_user_district: true,
              },
              select: {
                catchment_district: {
                  select: {
                    district: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    const district = { ...result?.user_organisations! }.flatMap((user_org) =>
      user_org.district_users.flatMap(
        (user_district) => user_district.catchment_district.district
      )
    )[0];

    if (!district) {
      return {
        __typename: 'ApiNotFoundError',
        message: `The Default District not found for organisation_user_id ${{
          user_id: args.user_id,
          user_organisation_id: args.organisation_user_id,
        }}.`,
      };
    }

    return {
      __typename: 'District',
      ...district,
    };
  } catch (error) {
    return {
      __typename: 'ApiNotFoundError',
      message: `Failed to find Default District for organisation_user_id ${{
        user_id: args.user_id,
        user_organisation_id: args.organisation_user_id,
      }}.`,
      errors: generateClientErrors(error),
    };
  }
}

async function getUserOrganisations(
  user_id: string,
  context: GraphQLContext
): Promise<UserOrganisation[]> {
  const result = await context.prisma.user.findUnique({
    where: {
      id: user_id,
    },
    select: {
      id: true,
      user_organisations: {
        select: {
          is_default_organisation: true,
          role: true,
          organisation: true,
        },
      },
    },
  });

  const user_orgs = result?.user_organisations.flatMap((user_org) => ({
    ...user_org.organisation,
    user_id: result.id,
    is_user_default_organisation: user_org.is_default_organisation,
    user_organisation_role: user_org.role,
  }));

  return user_orgs as UserOrganisation[];
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
        created_by: context.user?.email || 'system@kuyodynamics.com',
        last_modified_by: context.user?.email || 'system@kuyodynamics.com',
      },
    });

    return {
      __typename: 'User',
      ...user,
    } as UserResult;
  } catch (error) {
    return {
      __typename: 'ApiCreateError',
      message: `Failed to create User.`,
      errors: generateClientErrors(error),
    };
  }
}

type InvitationPayloadType = {
  email: string;
  organisation_role: string;
  catchment_districts?: CatchmentDistrictInput[];
} & JwtPayload;

async function createInvitedUser(
  args: MutationCreateInvitedUserArgs,
  context: GraphQLContext
): Promise<UserResult> {
  try {
    const { email, first_name, last_name, password, user_invitation_id } =
      args.input;

    const user_invitation = await context.prisma.userInvitation.findUnique({
      where: {
        id: user_invitation_id,
      },
    });

    if (!user_invitation) {
      return {
        __typename: 'ApiCreateError',
        message:
          'Failed to create User because we do not recognise the invitation or it expited',
      };
    }

    const payload = jwt.decode(
      user_invitation.invitation_token
    ) as InvitationPayloadType;

    if (payload.email !== email) {
      return {
        __typename: 'ApiCreateError',
        message: `Failed to create User because we do not recognise the invitation for this email:${email}`,
      };
    }

    const disabled_catchment_districts =
      await context.prisma.catchmentDistrict.findMany({
        where: {
          AND: {
            id: {
              in: user_invitation.catchment_district_ids.map((id) => id),
            },
            disabled: true,
          },
        },
        include: {
          district: true,
        },
      });

    console.log('disabled_catchment_districts', disabled_catchment_districts);

    if (disabled_catchment_districts?.length > 0) {
      return {
        __typename: 'ApiCreateError',
        message: `Failed to create User because the following catchment districts are disabled.${disabled_catchment_districts.map(
          (item) => item.district.name
        )}`,
      };
    }

    const user_districts = payload.catchment_districts?.map((item) => ({
      roles: prepareDistrictUserRolesForCreate(item.roles),
      catchment_district_id: item.catchment_district_id,
      created_by: context.user.email,
      last_modified_by: context.user.email,
    }));

    const user = await context.prisma.user.create({
      data: {
        first_name,
        last_name,
        email,
        password: await encryptPassword(password),
        // master_support: false,
        created_by: context.user.email,
        last_modified_by: context.user.email,
        user_organisations: {
          create: {
            organisation_id: user_invitation.organisation_id,
            is_default_organisation: true,
            // Also add the Organisation Role
            role: payload.organisation_role as OrganisationUserRoleType,
            created_by: context.user.email,
            last_modified_by: context.user.email,
            district_users: {
              createMany: {
                data: user_districts!,
                skipDuplicates: true,
              },
            },
          },
        },
      },
    });

    return {
      __typename: 'User',
      ...user,
    } as UserResult;
  } catch (error) {
    return {
      __typename: 'ApiCreateError',
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
        last_modified_by: args.input.update ? context.user.email : undefined,
      },
    });

    return {
      __typename: 'User',
      ...user,
    } as UserResult;
  } catch (error) {
    return {
      __typename: 'ApiUpdateError',
      message: `Failed to update User with id ${args.input.id}.`,
      errors: generateClientErrors(error, 'id'),
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
      __typename: 'User',
      ...user,
    } as UserResult;
  } catch (error) {
    return {
      __typename: 'ApiDeleteError',
      message: `Failed to delete User with id ${args.input.id}.`,
      errors: generateClientErrors(error, 'id'),
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
      __typename: 'User',
      ...user,
    } as UserResult;
  } catch (error) {
    return {
      __typename: 'ApiUpdateError',
      message: `Failed to disable/enable User with id ${args.input.id}.`,
      errors: generateClientErrors(error, 'id'),
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
      throw new AuthenticationError('No account found for this email.', {
        field: 'email',
      });

    if (user.disabled)
      throw new AuthenticationError('Account is disabled.', { field: 'email' });

    if (!(await isValidPassword(args.input.password, user.password)))
      throw new AuthenticationError('Invalid password.', { field: 'password' });

    try {
      accessToken = jwt.sign({}, process.env.JWT_SECRET!, {
        algorithm: 'HS256',
        subject: user.id,
        expiresIn: '1d',
      });
    } catch (error) {
      console.log('Failed to generate access token.', error);
      // Also send to Sentry
      throw new AuthenticationError('Failed to generate access token.', {
        field: 'email',
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
      __typename: 'LoginSuccess',
      accessToken,
      id: user.id,
    };
  } catch (error) {
    return {
      __typename: 'ApiLoginError',
      message: 'Login Failed.',
      errors: generateClientErrors(
        error,
        error instanceof AuthenticationError
          ? error.extensions.field
          : 'email,password'
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
      throw new AuthenticationError('Account with this email does not exit.');

    if (user.disabled) throw new AuthenticationError('Account is disabled.');

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
      __typename: 'PasswordResetRequestPayload',
      hashed_password_reset_token,
    };
  } catch (error) {
    return {
      __typename: 'ApiPasswordResetError',
      message: 'Password Reset Request Failed.',
      errors: generateClientErrors(error, 'email,password'),
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

    if (!user) throw new AuthenticationError('Invalid password reset link.');

    if (user.disabled) throw new AuthenticationError('Account is disabled.');

    const updatedUser = await context.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: await encryptPassword(args.input.password),
        hashed_password_reset_token: '',
        last_modified_by: user.email,
      },
    });

    return {
      __typename: 'User',
      ...updatedUser,
    } as PasswordResetResult;
  } catch (error) {
    return {
      __typename: 'ApiPasswordResetError',
      message: 'Password Reset Failed.',
      errors: generateClientErrors(error, 'email'),
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
  getUserDistricts,
  getDefaultUserDistrict,
};
