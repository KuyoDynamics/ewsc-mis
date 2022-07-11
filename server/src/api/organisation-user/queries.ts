import { generateClientErrors, GraphQLContext } from '../../utils';
import {
  MutationCreateOrganisationUserArgs,
  MutationDeleteOrganisationUserArgs,
  MutationSetUserDefaultProjectArgs,
  MutationUpdateOrganisationUserArgs,
  OrganisationResult,
  OrganisationUser,
  OrganisationUserResult,
  QueryOrganisation_UserArgs,
  QueryOrganisation_UsersArgs,
  UserOrganisation,
} from '../../libs/resolvers-types';

async function getOrganisationUsers(
  args: QueryOrganisation_UsersArgs,
  context: GraphQLContext
): Promise<OrganisationUser[]> {
  const org_users = await context.prisma.organisation
    .findUnique({
      where: {
        id: args.organisation_id,
      },
    })
    .users();
  return org_users as OrganisationUser[];
}

async function getOrganisationUser(
  args: QueryOrganisation_UserArgs,
  context: GraphQLContext
): Promise<OrganisationUserResult> {
  try {
    const organisation_user = await context.prisma.organisationUser.findUnique({
      where: {
        id: args.organisation_user_id,
      },
    });

    if (!organisation_user) {
      return {
        __typename: 'ApiNotFoundError',
        message: `The OrganisationUser with the id ${args.organisation_user_id} does not exist.`,
      };
    }

    return {
      __typename: 'OrganisationUser',
      ...organisation_user,
    } as OrganisationUser;
  } catch (error) {
    return {
      __typename: 'ApiNotFoundError',
      message: `Failed to find OrganisationUser with the id ${args.organisation_user_id}.`,
      errors: generateClientErrors(error),
    };
  }
}

async function resolveUserDefaultOrganisation(
  user_id: string,
  context: GraphQLContext
): Promise<UserOrganisation> {
  const result = await context.prisma.user.findUnique({
    where: {
      id: user_id,
    },
    select: {
      id: true,
      user_organisations: {
        where: {
          is_default_organisation: true,
        },
        select: {
          is_default_organisation: true,
          role: true,
          organisation: true,
        },
      },
    },
  });

  const default_organisation = result?.user_organisations.flatMap(
    (user_org) => ({
      user_id: result.id,
      is_user_default_organisation: user_org.is_default_organisation,
      user_organisation_role: user_org.role,
      ...user_org.organisation,
    })
  )[0];

  return default_organisation as UserOrganisation;
}

async function getDefaultUserOrganisation(
  user_id: string,
  context: GraphQLContext
): Promise<OrganisationResult> {
  try {
    const result = await context.prisma.user.findUnique({
      where: {
        id: user_id,
      },
      include: {
        user_organisations: {
          where: {
            is_default_organisation: true,
          },
          select: {
            organisation: true,
          },
        },
      },
    });

    const user_default_organisation = result?.user_organisations.flatMap(
      (user_org) => user_org.organisation
    )[0];

    if (!user_default_organisation) {
      return {
        __typename: 'ApiNotFoundError',
        message: `The Default Organisation not found for organisation_user_id ${user_id}.`,
      };
    }

    return {
      __typename: 'Organisation',
      ...user_default_organisation,
    } as OrganisationResult;
  } catch (error) {
    return {
      __typename: 'ApiNotFoundError',
      message: `The Default Organisation not found for organisation_user_id ${user_id}.`,
      errors: generateClientErrors(error),
    };
  }
}

async function createOrganisationUser(
  args: MutationCreateOrganisationUserArgs,
  context: GraphQLContext
): Promise<OrganisationUserResult> {
  try {
    const organisation_user = await context.prisma.organisationUser.create({
      data: {
        user_id: args.input.user_id,
        organisation_id: args.input.organisation_id,
        role: args.input.role,
        is_default_organisation: args.input.is_default_organisation,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });

    return {
      __typename: 'OrganisationUser',
      ...organisation_user,
    } as OrganisationUser;
  } catch (error) {
    return {
      __typename: 'ApiCreateError',
      message: `Failed to create OrganisationUser.`,
      errors: generateClientErrors(error),
    };
  }
}

async function updateOrganisationUser(
  args: MutationUpdateOrganisationUserArgs,
  context: GraphQLContext
): Promise<OrganisationUserResult> {
  try {
    const organisation_user = await context.prisma.organisationUser.update({
      where: {
        id: args.input.id,
      },
      data: {
        role: args.input.update.role || undefined,
        last_modified_by: args.input.update ? context.user.email : undefined,
      },
    });
    return {
      __typename: 'OrganisationUser',
      ...organisation_user,
    } as OrganisationUser;
  } catch (error) {
    return {
      __typename: 'ApiUpdateError',
      message: `Failed to update OrganisationUser with id ${args.input.id}.`,
      errors: generateClientErrors(error, 'id'),
    };
  }
}

async function setUserDefaultOrganisation(
  args: MutationSetUserDefaultProjectArgs,
  context: GraphQLContext
): Promise<OrganisationUserResult> {
  try {
    const [_batchResult, updateResult] = await context.prisma.$transaction([
      context.prisma.organisationUser.updateMany({
        where: {
          id: args.organisation_user_id,
        },
        data: {
          is_default_organisation: false,
        },
      }),

      context.prisma.organisationUser.update({
        where: {
          id: args.organisation_user_id,
        },
        data: {
          is_default_organisation: true,
        },
      }),
    ]);
    return {
      __typename: 'OrganisationUser',
      ...updateResult,
    } as OrganisationUser;
  } catch (error) {
    return {
      __typename: 'ApiUpdateError',
      message: `Failed to update UserOrganisation as Default with ${{
        id: args.organisation_user_id,
      }}.`,
      errors: generateClientErrors(error, 'district_user_id'),
    };
  }
}

async function deleteOrganisationUser(
  args: MutationDeleteOrganisationUserArgs,
  context: GraphQLContext
): Promise<OrganisationUserResult> {
  try {
    const organisation_user = await context.prisma.organisationUser.delete({
      where: {
        id: args.input.id,
      },
    });

    return {
      __typename: 'OrganisationUser',
      ...organisation_user,
    } as OrganisationUser;
  } catch (error) {
    return {
      __typename: 'ApiDeleteError',
      message: `Failed to delete OrganisationUser with id ${args.input.id}.`,
      errors: generateClientErrors(error, 'id'),
    };
  }
}

export {
  getOrganisationUsers,
  createOrganisationUser,
  getOrganisationUser,
  updateOrganisationUser,
  deleteOrganisationUser,
  setUserDefaultOrganisation,
  getDefaultUserOrganisation,
  resolveUserDefaultOrganisation,
};
