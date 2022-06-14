import {
  CreateWaterStorageTankPayload,
  DeleteWaterStorageTankPayload,
  MutationCreateWaterStorageTankArgs,
  MutationDeleteWaterStorageTankArgs,
  MutationUpdateWaterStorageTankArgs,
  QueryWater_Storage_TankArgs,
  QueryWater_Storage_TanksArgs,
  UpdateWaterStorageTankPayload,
  WaterStorageTank,
} from "../../libs/resolvers-types";
import { GraphQLContext } from "../../utils";

async function getWaterStorageTanks(
  args: QueryWater_Storage_TanksArgs,
  context: GraphQLContext
): Promise<WaterStorageTank[]> {
  const water_storage_tanks = await context.prisma.waterTreatmentPlant
    .findUnique({
      where: {
        id: args.plant_id,
      },
    })
    .water_storage_tanks();

  return water_storage_tanks as WaterStorageTank[];
}

async function getWaterStorageTank(
  args: QueryWater_Storage_TankArgs,
  context: GraphQLContext
): Promise<WaterStorageTank> {
  const water_storage_tank = await context.prisma.waterStorageTank.findUnique({
    where: {
      id: args.id,
    },
  });

  return water_storage_tank as WaterStorageTank;
}

async function createWaterStorageTank(
  args: MutationCreateWaterStorageTankArgs,
  context: GraphQLContext
): Promise<CreateWaterStorageTankPayload> {
  const water_storage_tank = await context.prisma.waterStorageTank.create({
    data: {
      name: args.input.name,
      type: args.input.type,
      storage_capacity: args.input.storage_capacity,
      plant_id: args.input.plant_id,
      gps: args.input.gps,
      created_by: context.user.email,
      last_modified_by: context.user.email,
    },
  });

  return { water_storage_tank } as CreateWaterStorageTankPayload;
}

async function updateWaterStorageTank(
  args: MutationUpdateWaterStorageTankArgs,
  context: GraphQLContext
): Promise<UpdateWaterStorageTankPayload> {
  const water_storage_tank = await context.prisma.waterStorageTank.update({
    where: {
      id: args.input.id,
    },
    data: {
      name: args.input.update.name || undefined,
      type: args.input.update.type || undefined,
      storage_capacity: args.input.update.storage_capacity || undefined,
      plant_id: args.input.update.plant_id || undefined,
      gps: args.input.update.gps || undefined,
      last_modified_by: context.user.email,
    },
  });

  return { water_storage_tank } as UpdateWaterStorageTankPayload;
}

async function deleteWaterStorageTank(
  args: MutationDeleteWaterStorageTankArgs,
  context: GraphQLContext
): Promise<DeleteWaterStorageTankPayload> {
  const water_storage_tank = await context.prisma.waterStorageTank.delete({
    where: {
      id: args.input.id,
    },
  });

  return { water_storage_tank } as DeleteWaterStorageTankPayload;
}

export {
  getWaterStorageTanks,
  getWaterStorageTank,
  createWaterStorageTank,
  updateWaterStorageTank,
  deleteWaterStorageTank,
};
