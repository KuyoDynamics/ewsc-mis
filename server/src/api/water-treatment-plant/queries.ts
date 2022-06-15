import {
  DeleteWaterTreatmentPlantsResult,
  MutationCreateWaterTreatmentPlantArgs,
  MutationDeleteWaterTreatmentPlantsArgs,
  MutationUpdateWaterTreatmentPlantArgs,
  QueryWater_Treatment_PlantArgs,
  QueryWater_Treatment_PlantsArgs,
  WaterTreatmentPlant,
  WaterTreatmentPlantResult,
} from "../../libs/resolvers-types";
import { generateClientErrors, GraphQLContext } from "../../utils";

async function getWaterTreatmentPlants(
  args: QueryWater_Treatment_PlantsArgs,
  context: GraphQLContext
): Promise<WaterTreatmentPlant[]> {
  const water_treatment_plants = await context.prisma.catchmentDistrict
    .findUnique({
      where: {
        id: args.catchment_district_id,
      },
    })
    .water_treatment_plants();

  return water_treatment_plants as WaterTreatmentPlant[];
}

async function getWaterTreatmentPlant(
  args: QueryWater_Treatment_PlantArgs,
  context: GraphQLContext
): Promise<WaterTreatmentPlant> {
  const water_treatment_plant =
    await context.prisma.waterTreatmentPlant.findUnique({
      where: {
        id: args.id,
      },
    });

  return water_treatment_plant as WaterTreatmentPlant;
}

async function createWaterTreatmentPlant(
  args: MutationCreateWaterTreatmentPlantArgs,
  context: GraphQLContext
): Promise<WaterTreatmentPlantResult> {
  try {
    const water_treatment_plant =
      await context.prisma.waterTreatmentPlant.create({
        data: {
          name: args.input.name,
          water_source: args.input.water_source,
          catchment_district_id: args.input.catchment_district_id,
          production_capacity: args.input.production_capacity,
          gps: args.input.gps,
          created_by: context.user.email,
          last_modified_by: context.user.email,
        },
      });

    return {
      __typename: "WaterTreatmentPlant",
      ...water_treatment_plant,
    } as WaterTreatmentPlantResult;
  } catch (error) {
    return {
      __typename: "WaterTreatmentPlantCreateError",
      message: `Failed to create WaterTreatmentPlant.`,
      errors: generateClientErrors(error),
    };
  }
}

async function updateWaterTreatmentPlant(
  args: MutationUpdateWaterTreatmentPlantArgs,
  context: GraphQLContext
): Promise<WaterTreatmentPlantResult> {
  try {
    const water_treatment_plant =
      await context.prisma.waterTreatmentPlant.update({
        where: {
          id: args.input.id,
        },
        data: {
          name: args.input.update.name || undefined,
          gps: args.input.update.gps || undefined,
          production_capacity:
            args.input.update.production_capacity || undefined,
          water_source: args.input.update.water_source || undefined,
          last_modified_by: args.input.update ? context.user.email : undefined,
        },
      });
    return {
      __typename: "WaterTreatmentPlant",
      ...water_treatment_plant,
    } as WaterTreatmentPlantResult;
  } catch (error) {
    return {
      __typename: "WaterTreatmentPlantUpdateError",
      message: `Failed to update WaterTreatmentPlant.`,
      errors: generateClientErrors(error),
    };
  }
}

async function deleteWaterTreatmentPlants(
  args: MutationDeleteWaterTreatmentPlantsArgs,
  context: GraphQLContext
): Promise<DeleteWaterTreatmentPlantsResult> {
  try {
    const water_treatment_plants =
      await context.prisma.waterTreatmentPlant.deleteMany({
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

    if (water_treatment_plants.count === 0) {
      return {
        __typename: "WaterTreatmentPlantDeleteError",
        message: `Failed to delete WaterTreatmentPlant(s) with filter ${args.filter} or do not exist.`,
      };
    }
    return {
      __typename: "DeleteBatchPayload",
      ...water_treatment_plants,
    } as DeleteWaterTreatmentPlantsResult;
  } catch (error) {
    return {
      __typename: "WaterTreatmentPlantDeleteError",
      message: `Failed to delete WaterTreatmentPlant(s) with filter ${args.filter} or do not exist.`,
      errors: generateClientErrors(error),
    };
  }
}

export {
  getWaterTreatmentPlants,
  getWaterTreatmentPlant,
  createWaterTreatmentPlant,
  updateWaterTreatmentPlant,
  deleteWaterTreatmentPlants,
};
