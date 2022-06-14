import {
  CreateServiceAreaPayload,
  DeleteServiceAreaPayload,
  MutationCreateServiceAreaArgs,
  MutationDeleteServiceAreaArgs,
  QueryService_AreaArgs,
  QueryService_AreasArgs,
  ServiceArea,
} from "../../libs/resolvers-types";
import { GraphQLContext } from "../../utils";

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
): Promise<ServiceArea> {
  const service_area = await context.prisma.serviceArea.findUnique({
    where: {
      id: args.id,
    },
  });

  return service_area!;
}

async function createServiceArea(
  args: MutationCreateServiceAreaArgs,
  context: GraphQLContext
): Promise<CreateServiceAreaPayload> {
  const service_area = await context.prisma.serviceArea.create({
    data: {
      catchment_district_id: args.input.catchment_district_id,
      residence_id: args.input.residence_id,
      created_by: context.user.email,
      last_modified_by: context.user.email,
    },
  });

  return { service_area };
}

async function deleteServiceArea(
  args: MutationDeleteServiceAreaArgs,
  context: GraphQLContext
): Promise<DeleteServiceAreaPayload> {
  const service_area = await context.prisma.serviceArea.delete({
    where: {
      id: args.input.id,
    },
  });

  return { service_area };
}

export {
  getCatchmentDistrictServiceAreas,
  getResidenceServiceAreas,
  createServiceArea,
  deleteServiceArea,
  getServiceArea,
};
