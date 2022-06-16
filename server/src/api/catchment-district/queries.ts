import { generateClientErrors, GraphQLContext } from "../../utils";
import {
  CatchmentDistrict,
  CatchmentDistrictResult,
  MutationCreateCatchmentDistrictArgs,
  MutationDeleteCatchmentDistrictArgs,
  MutationUpdateCatchmentDistrictArgs,
} from "../../libs/resolvers-types";

async function getCatchmentDistricts(
  id: string,
  context: GraphQLContext
): Promise<CatchmentDistrict[]> {
  return context.prisma.catchmentProvince
    .findUnique({
      where: {
        id,
      },
    })
    .catchment_districts();
}

async function getCatchmentDistrict(
  id: string,
  context: GraphQLContext
): Promise<CatchmentDistrictResult> {
  try {
    const catchment_district =
      await context.prisma.catchmentDistrict.findUnique({
        where: {
          id,
        },
      });
    if (!catchment_district) {
      return {
        __typename: "ApiNotFoundError",
        message: `The CatchmentDistrict with the id ${id}} does not exist.`,
      };
    }
    return {
      __typename: "CatchmentDistrict",
      ...catchment_district,
    };
  } catch (error) {
    return {
      __typename: "ApiNotFoundError",
      message: `Failed to find CatchmentDistrict with the id ${id}.`,
      errors: generateClientErrors(error),
    };
  }
}

async function createCatchmentDistrict(
  args: MutationCreateCatchmentDistrictArgs,
  context: GraphQLContext
): Promise<CatchmentDistrictResult> {
  try {
    const catchment_district = await context.prisma.catchmentDistrict.create({
      data: {
        district_id: args.input.district_id,
        catchment_province_id: args.input.catchment_province_id,
        created_by: context.user?.email,
        last_modified_by: context.user?.email,
      },
    });

    return {
      __typename: "CatchmentDistrict",
      ...catchment_district,
    };
  } catch (error) {
    return {
      __typename: "ApiCreateError",
      message: `Failed to create CatchmentDistrict.`,
      errors: generateClientErrors(error),
    };
  }
}

async function updateCatchmentDistrict(
  args: MutationUpdateCatchmentDistrictArgs,
  context: GraphQLContext
): Promise<CatchmentDistrictResult> {
  try {
    const catchment_district = await context.prisma.catchmentDistrict.update({
      where: {
        id: args.input.id,
      },
      data: {
        disabled: args.input.update.disabled,
        last_modified_by: args.input.update ? context.user.email : undefined,
      },
    });
    return {
      __typename: "CatchmentDistrict",
      ...catchment_district,
    };
  } catch (error) {
    return {
      __typename: "ApiUpdateError",
      message: `Failed to update CatchmentDistrict with id ${args.input.id}.`,
      errors: generateClientErrors(error, "id"),
    };
  }
}

async function deleteCatchmentDistrict(
  args: MutationDeleteCatchmentDistrictArgs,
  context: GraphQLContext
): Promise<CatchmentDistrictResult> {
  try {
    const catchment_district = await context.prisma.catchmentDistrict.delete({
      where: {
        id: args.input.id,
      },
    });
    return {
      __typename: "CatchmentDistrict",
      ...catchment_district,
    };
  } catch (error) {
    return {
      __typename: "ApiDeleteError",
      message: `Failed to delete CatchmentDistrict with id ${args.input.id}.`,
      errors: generateClientErrors(error, "id"),
    };
  }
}

export {
  getCatchmentDistricts,
  getCatchmentDistrict,
  createCatchmentDistrict,
  updateCatchmentDistrict,
  deleteCatchmentDistrict,
};
