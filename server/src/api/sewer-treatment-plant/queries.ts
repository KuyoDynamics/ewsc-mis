import {
  ApiBatchPayloadResult,
  MutationCreateSewerTreatmentPlantArgs,
  MutationDeleteSewerTreatmentPlantsArgs,
  MutationUpdateSewerTreatmentPlantArgs,
  QuerySewer_Treatment_PlantArgs,
  QuerySewer_Treatment_PlantsArgs,
  SewerTreatmentPlant,
  SewerTreatmentPlantResult,
} from "../../libs/resolvers-types";
import { generateClientErrors, GraphQLContext } from "../../utils";

async function getSewerTreatmentPlants(
  args: QuerySewer_Treatment_PlantsArgs,
  context: GraphQLContext
): Promise<SewerTreatmentPlant[]> {
  const sewer_treatment_plants = await context.prisma.catchmentDistrict
    .findUnique({
      where: {
        id: args.catchment_district_id,
      },
    })
    .sewer_treatment_plants();

  return sewer_treatment_plants as SewerTreatmentPlant[];
}

async function getSewerTreatmentPlant(
  args: QuerySewer_Treatment_PlantArgs,
  context: GraphQLContext
): Promise<SewerTreatmentPlantResult> {
  try {
    const sewer_treatment_plant =
      await context.prisma.sewerTreatmentPlant.findUnique({
        where: {
          id: args.id,
        },
      });
    if (!sewer_treatment_plant) {
      return {
        __typename: "ApiNotFoundError",
        message: `Failed to find SewerTreatmentPlant with id ${args.id}.`,
      };
    }

    return {
      __typename: "SewerTreatmentPlant",
      ...sewer_treatment_plant,
    };
  } catch (error) {
    return {
      __typename: "ApiNotFoundError",
      message: `Failed to find SewerTreatmentPlant with id ${args.id}.`,
      errors: generateClientErrors(error, "id"),
    };
  }
}

async function createSewerTreatmentPlant(
  args: MutationCreateSewerTreatmentPlantArgs,
  context: GraphQLContext
): Promise<SewerTreatmentPlantResult> {
  try {
    const sewer_treatment_plant =
      await context.prisma.sewerTreatmentPlant.create({
        data: {
          name: args.input.name,
          ponds: args.input.ponds,
          catchment_district_id: args.input.catchment_district_id,
          capacity: args.input.capacity,
          gps: args.input.gps,
          created_by: context.user.email,
          last_modified_by: context.user.email,
        },
      });

    return {
      __typename: "SewerTreatmentPlant",
      ...sewer_treatment_plant,
    };
  } catch (error) {
    return {
      __typename: "ApiCreateError",
      message: `Failed to create SewerTreatmentPlant.`,
      errors: generateClientErrors(error),
    };
  }
}

async function updateSewerTreatmentPlant(
  args: MutationUpdateSewerTreatmentPlantArgs,
  context: GraphQLContext
): Promise<SewerTreatmentPlantResult> {
  try {
    const sewer_treatment_plant =
      await context.prisma.sewerTreatmentPlant.update({
        where: {
          id: args.input.id,
        },
        data: {
          name: args.input.update.name || undefined,
          gps: args.input.update.gps || undefined,
          capacity: args.input.update.capacity || undefined,
          ponds: args.input.update.ponds || undefined,
          last_modified_by: args.input.update ? context.user.email : undefined,
        },
      });
    return {
      __typename: "SewerTreatmentPlant",
      ...sewer_treatment_plant,
    };
  } catch (error) {
    return {
      __typename: "ApiUpdateError",
      message: `Failed to update SewerTreatmentPlant.`,
      errors: generateClientErrors(error),
    };
  }
}

async function deleteSewerTreatmentPlants(
  args: MutationDeleteSewerTreatmentPlantsArgs,
  context: GraphQLContext
): Promise<ApiBatchPayloadResult> {
  try {
    const sewer_treatment_plants =
      await context.prisma.sewerTreatmentPlant.deleteMany({
        where: {
          OR: [
            { id: args.filter.id || undefined },
            {
              catchment_district_id:
                args.filter.catchment_district_id || undefined,
            },
          ],
        },
      });

    if (sewer_treatment_plants.count === 0) {
      return {
        __typename: "ApiOperationError",
        message: `Failed to delete SewerTreatmentPlant(s) with filter ${args.filter} or do not exist.`,
      };
    }
    return {
      __typename: "ApiBatchPayload",
      ...sewer_treatment_plants,
    };
  } catch (error) {
    return {
      __typename: "ApiOperationError",
      message: `Failed to delete SewerTreatmentPlant(s) with filter ${args.filter} or do not exist.`,
      errors: generateClientErrors(error),
    };
  }
}

export {
  getSewerTreatmentPlants,
  getSewerTreatmentPlant,
  createSewerTreatmentPlant,
  updateSewerTreatmentPlant,
  deleteSewerTreatmentPlants,
};
