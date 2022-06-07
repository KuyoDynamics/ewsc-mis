import { GraphQLContext } from "../..";
import {
  CatchmentProvince,
  MutationCreateOrganisationArgs,
  MutationUpdateOrganisationArgs,
} from "../../libs/resolvers-types";

function getAllOrganisations(context: GraphQLContext) {
  return context.prisma.organisation.findMany({});
}

function getOrganisationById(id: string, context: GraphQLContext) {
  return context.prisma.organisation.findUnique({
    where: {
      id,
    },
  });
}

async function getCatchmentProvinces(
  id: string,
  context: GraphQLContext
): Promise<CatchmentProvince[]> {
  const result = await context.prisma.organisation
    .findUnique({
      where: {
        id,
      },
    })
    .catchment_provinces({
      include: {
        province: {
          select: {
            name: true,
          },
        },
        organisation: {
          select: {
            name: true,
          },
        },
      },
    });
  return result.map((value) => ({
    ...value,
    province_name: value.province.name,
    organisation_name: value.organisation.name,
  })) as CatchmentProvince[];
}

function getCountryByOrganisationId(id: string, context: GraphQLContext) {
  return getOrganisationById(id, context).country();
}

// Mutations
async function createOrganisation(
  args: MutationCreateOrganisationArgs,
  context: GraphQLContext
) {
  const requiredInput = {
    code: args.input.logo || undefined,
    name: args.input.name,
    country_id: args.input.country_id,
    created_by: context.user.email,
    last_modified_by: context.user.email,
  };
  const organisation = await context.prisma.organisation.create({
    data: requiredInput,
  });

  return { organisation };
}

async function updateOrganisation(
  args: MutationUpdateOrganisationArgs,
  context: GraphQLContext
) {
  const organisation = await context.prisma.organisation.update({
    where: {
      id: args.input.id,
    },
    data: {
      name: args.input.update.name || undefined,
      logo: args.input.update.logo || undefined,
      last_modified_by: context.user.email,
    },
  });

  return { organisation };
}

async function deleteOrganisation(id: string, context: GraphQLContext) {
  const organisation = await context.prisma.organisation.delete({
    where: {
      id,
    },
  });

  return { organisation };
}

export {
  getCountryByOrganisationId,
  getOrganisationById,
  getCatchmentProvinces,
  getAllOrganisations,
  createOrganisation,
  updateOrganisation,
  deleteOrganisation,
};
