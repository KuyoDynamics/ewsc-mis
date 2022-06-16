import {
  MutationCreateServiceAreaArgs,
  MutationDeleteServiceAreaArgs,
  QueryService_AreaArgs,
  QueryService_AreasArgs,
  ServiceArea,
  ServiceAreaResult,
} from "../../libs/resolvers-types";
import { generateClientErrors, GraphQLContext } from "../../utils";

async function getCatchmentDistrictServiceAreas(
  args: QueryService_AreasArgs,
  context: GraphQLContext
): Promise<ServiceArea[]> {
  const result = await context.prisma.catchmentDistrict
    .findUnique({
      where: {
        id: args.catchment_district_id,
      },
    })
    .service_areas();

  return result as ServiceArea[];
}

async function getResidenceServiceAreas(
  residence_id: string,
  context: GraphQLContext
): Promise<ServiceArea[]> {
  const result = await context.prisma.residence
    .findUnique({
      where: {
        id: residence_id,
      },
    })
    .service_areas();

  return result as ServiceArea[];
}

async function getServiceArea(
  args: QueryService_AreaArgs,
  context: GraphQLContext
): Promise<ServiceAreaResult> {
  try {
    const service_area = await context.prisma.serviceArea.findUnique({
      where: {
        id: args.id,
      },
    });

    if (!service_area) {
      return {
        __typename: "ApiNotFoundError",
        message: `The ServiceArea with the id ${args.id} does not exist.`,
      };
    }

    return {
      __typename: "ServiceArea",
      ...service_area,
    };
  } catch (error) {
    return {
      __typename: "ApiNotFoundError",
      message: `Failed to find ServiceArea with the id ${args.id}.`,
      errors: generateClientErrors(error),
    };
  }
}

async function createServiceArea(
  args: MutationCreateServiceAreaArgs,
  context: GraphQLContext
): Promise<ServiceAreaResult> {
  try {
    const service_area = await context.prisma.serviceArea.create({
      data: {
        catchment_district_id: args.input.catchment_district_id,
        residence_id: args.input.residence_id,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });

    return {
      __typename: "ServiceArea",
      ...service_area,
    };
  } catch (error) {
    return {
      __typename: "ApiCreateError",
      message: `Failed to create ServiceArea.`,
      errors: generateClientErrors(error),
    };
  }
}

async function deleteServiceArea(
  args: MutationDeleteServiceAreaArgs,
  context: GraphQLContext
): Promise<ServiceAreaResult> {
  try {
    const service_area = await context.prisma.serviceArea.delete({
      where: {
        id: args.input.id,
      },
    });

    return {
      __typename: "ServiceArea",
      ...service_area,
    };
  } catch (error) {
    return {
      __typename: "ApiDeleteError",
      message: `Failed to delete ServiceArea with id ${args.input.id}.`,
      errors: generateClientErrors(error, "id"),
    };
  }
}

export {
  getCatchmentDistrictServiceAreas,
  getResidenceServiceAreas,
  createServiceArea,
  deleteServiceArea,
  getServiceArea,
};
