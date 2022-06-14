import { GraphQLContext } from "../../utils";
import {
  CreateOrganisationUserPayload,
  DeleteOrganisationUserPayload,
  MutationCreateOrganisationUserArgs,
  MutationDeleteOrganisationUserArgs,
  MutationUpdateOrganisationUserArgs,
  OrganisationUser,
  QueryOrganisation_UserArgs,
  QueryOrganisation_UsersArgs,
  UpdateOrganisationUserPayload,
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
): Promise<OrganisationUser> {
  const organisation_user = await context.prisma.organisationUser.findUnique({
    where: {
      id: args.organisation_user_id,
    },
  });
  return organisation_user as OrganisationUser;
}

async function createOrganisationUser(
  args: MutationCreateOrganisationUserArgs,
  context: GraphQLContext
): Promise<CreateOrganisationUserPayload> {
  const requiredInput = {
    user_id: args.input.user_id,
    organisation_id: args.input.organisation_id,
    created_by: context.user?.email,
    last_modified_by: context.user?.email,
  };
  const organisation_user = await context.prisma.organisationUser.create({
    data: requiredInput,
  });

  return { organisation_user };
}

async function updateOrganisationUser(
  args: MutationUpdateOrganisationUserArgs,
  context: GraphQLContext
): Promise<UpdateOrganisationUserPayload> {
  const organisation_user = await context.prisma.organisationUser.update({
    where: {
      id: args.input.id,
    },
    data: {
      is_owner: args.input.update.is_owner,
    },
  });

  return { organisation_user };
}

async function deleteOrganisationUser(
  args: MutationDeleteOrganisationUserArgs,
  context: GraphQLContext
): Promise<DeleteOrganisationUserPayload> {
  const organisation_user = await context.prisma.organisationUser.delete({
    where: {
      id: args.input.id,
    },
  });

  return { organisation_user };
}

export {
  getOrganisationUsers,
  createOrganisationUser,
  getOrganisationUser,
  updateOrganisationUser,
  deleteOrganisationUser,
};
