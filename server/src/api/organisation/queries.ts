import { generateClientErrors, GraphQLContext } from "../../utils";
import {
  MutationCreateOrganisationArgs,
  MutationUpdateOrganisationArgs,
  Organisation,
  OrganisationResult,
} from "../../libs/resolvers-types";

async function getOrganisations(
  country_id: string,
  context: GraphQLContext
): Promise<Organisation[]> {
  const orgs = await context.prisma.country
    .findUnique({
      where: {
        id: country_id,
      },
    })
    .organisations();
  return orgs as Organisation[];
}
async function getOrganisation(
  id: string,
  context: GraphQLContext
): Promise<OrganisationResult> {
  try {
    const organisation = await context.prisma.organisation.findUnique({
      where: {
        id,
      },
    });

    if (!organisation) {
      return {
        __typename: "ApiNotFoundError",
        message: `The Residence with the id ${id}} does not exist.`,
      };
    }

    return {
      __typename: "Organisation",
      ...organisation,
    } as OrganisationResult;
  } catch (error) {
    return {
      __typename: "ApiNotFoundError",
      message: `Failed to find Organisation with the id ${id}.`,
      errors: generateClientErrors(error),
    };
  }
}

async function createOrganisation(
  args: MutationCreateOrganisationArgs,
  context: GraphQLContext
): Promise<OrganisationResult> {
  try {
    const organisation = await context.prisma.organisation.create({
      data: {
        logo: args.input.logo,
        name: args.input.name,
        country_id: args.input.country_id,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });

    return {
      __typename: "Organisation",
      ...organisation,
    } as OrganisationResult;
  } catch (error) {
    return {
      __typename: "ApiCreateError",
      message: `Failed to create Organisation.`,
      errors: generateClientErrors(error),
    };
  }
}

async function isMasterSupportAllowed(
  organisation_id: string,
  context: GraphQLContext
): Promise<boolean> {
  try {
    const org_master_support_users = await context.prisma.organisation
      .findUnique({
        where: {
          id: organisation_id,
        },
      })
      .users({
        where: {
          role: "SUPPORT",
        },
      });
    if (org_master_support_users?.length <= 0) {
      return false;
    }
    return true;
  } catch (error) {
    // Also send to Sentry
    console.log("Error running isMasterSupportAllowed", error);
    return false;
  }
}

async function updateOrganisation(
  args: MutationUpdateOrganisationArgs,
  context: GraphQLContext
): Promise<OrganisationResult> {
  try {
    const organisation = await context.prisma.organisation.update({
      where: {
        id: args.input.id,
      },
      data: {
        name: args.input.update.name || undefined,
        logo: args.input.update.logo || undefined,
        last_modified_by: args.input.update ? context.user.email : undefined,
      },
    });

    return {
      __typename: "Organisation",
      ...organisation,
    } as OrganisationResult;
  } catch (error) {
    return {
      __typename: "ApiUpdateError",
      message: `Failed to update Organisation with id ${args.input.id}.`,
      errors: generateClientErrors(error, "id"),
    };
  }
}

async function deleteOrganisation(
  id: string,
  context: GraphQLContext
): Promise<OrganisationResult> {
  try {
    const organisation = await context.prisma.organisation.delete({
      where: {
        id,
      },
    });

    return {
      __typename: "Organisation",
      ...organisation,
    } as OrganisationResult;
  } catch (error) {
    return {
      __typename: "ApiDeleteError",
      message: `Failed to delete Organisation with id ${id}.`,
      errors: generateClientErrors(error, "id"),
    };
  }
}

export {
  getOrganisation,
  getOrganisations,
  createOrganisation,
  updateOrganisation,
  deleteOrganisation,
  isMasterSupportAllowed,
};
