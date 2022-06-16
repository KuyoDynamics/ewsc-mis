import { generateClientErrors, GraphQLContext } from "../../utils";
import {
  MutationCreateOrganisationUserArgs,
  MutationDeleteOrganisationUserArgs,
  MutationUpdateOrganisationUserArgs,
  OrganisationUser,
  OrganisationUserResult,
  QueryOrganisation_UserArgs,
  QueryOrganisation_UsersArgs,
} from "../../libs/resolvers-types";

async function getOrganisationUsers(
  args: QueryOrganisation_UsersArgs,
  context: GraphQLContext
): Promise<OrganisationUser[]> {
  return context.prisma.organisation
    .findUnique({
      where: {
        id: args.organisation_id,
      },
    })
    .users();
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
        __typename: "ApiNotFoundError",
        message: `The OrganisationUser with the id ${args.organisation_user_id} does not exist.`,
      };
    }

    return {
      __typename: "OrganisationUser",
      ...organisation_user,
    };
  } catch (error) {
    return {
      __typename: "ApiNotFoundError",
      message: `Failed to find OrganisationUser with the id ${args.organisation_user_id}.`,
      errors: generateClientErrors(error),
    };
  }
}

async function createOrganisationUser(
  args: MutationCreateOrganisationUserArgs,
  context: GraphQLContext
): Promise<OrganisationUserResult> {
  try {
    const requiredInput = {
      user_id: args.input.user_id,
      organisation_id: args.input.organisation_id,
      created_by: context.user?.email,
      last_modified_by: context.user?.email,
    };
    const organisation_user = await context.prisma.organisationUser.create({
      data: requiredInput,
    });

    return {
      __typename: "OrganisationUser",
      ...organisation_user,
    };
  } catch (error) {
    return {
      __typename: "ApiCreateError",
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
        is_owner: args.input.update.is_owner,
      },
    });
    return {
      __typename: "OrganisationUser",
      ...organisation_user,
    };
  } catch (error) {
    return {
      __typename: "ApiUpdateError",
      message: `Failed to update OrganisationUser with id ${args.input.id}.`,
      errors: generateClientErrors(error, "id"),
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
      __typename: "OrganisationUser",
      ...organisation_user,
    };
  } catch (error) {
    return {
      __typename: "ApiDeleteError",
      message: `Failed to delete OrganisationUser with id ${args.input.id}.`,
      errors: generateClientErrors(error, "id"),
    };
  }
}

export {
  getOrganisationUsers,
  createOrganisationUser,
  getOrganisationUser,
  updateOrganisationUser,
  deleteOrganisationUser,
};
