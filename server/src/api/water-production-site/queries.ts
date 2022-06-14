import {
  CreateWaterProductionSitePayload,
  DeleteWaterProductionSitePayload,
  MutationCreateWaterProductionSiteArgs,
  MutationDeleteWaterProductionSiteArgs,
  MutationUpdateWaterProductionSiteArgs,
  QueryWater_Production_SiteArgs,
  QueryWater_Production_SitesArgs,
  UpdateWaterProductionSitePayload,
  WaterProductionSite,
} from "../../libs/resolvers-types";
import { GraphQLContext } from "../../utils";

async function getWaterProductionSites(
  args: QueryWater_Production_SitesArgs,
  context: GraphQLContext
): Promise<WaterProductionSite[]> {
  const water_production_sites = await context.prisma.waterTreatmentPlant
    .findUnique({
      where: {
        id: args.plant_id,
      },
    })
    .water_production_sites();

  return water_production_sites as WaterProductionSite[];
}

async function getWaterProductionSite(
  args: QueryWater_Production_SiteArgs,
  context: GraphQLContext
): Promise<WaterProductionSite> {
  const water_production_site =
    await context.prisma.waterProductionSite.findUnique({
      where: {
        id: args.id,
      },
    });

  return water_production_site as WaterProductionSite;
}

async function createWaterProductionSite(
  args: MutationCreateWaterProductionSiteArgs,
  context: GraphQLContext
): Promise<CreateWaterProductionSitePayload> {
  const water_production_site = await context.prisma.waterProductionSite.create(
    {
      data: {
        name: args.input.name,
        static_suction_head: args.input.static_suction_head,
        static_discharge_head: args.input.static_discharge_head,
        type: args.input.type,
        plant_id: args.input.plant_id,
        gps: args.input.gps,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    }
  );

  return { water_production_site } as CreateWaterProductionSitePayload;
}

async function updateWaterProductioSite(
  args: MutationUpdateWaterProductionSiteArgs,
  context: GraphQLContext
): Promise<UpdateWaterProductionSitePayload> {
  const water_production_site = await context.prisma.waterProductionSite.update(
    {
      where: {
        id: args.input.id,
      },
      data: {
        name: args.input.update.name,
        static_suction_head: args.input.update.static_discharge_head,
        static_discharge_head: args.input.update.static_discharge_head,
        type: args.input.update.type,
        gps: args.input.update.gps,
      },
    }
  );

  return { water_production_site } as UpdateWaterProductionSitePayload;
}

async function deleteWaterProductionSite(
  args: MutationDeleteWaterProductionSiteArgs,
  context: GraphQLContext
): Promise<DeleteWaterProductionSitePayload> {
  const water_production_site = await context.prisma.waterProductionSite.delete(
    {
      where: {
        id: args.input.id,
      },
    }
  );

  return { water_production_site } as DeleteWaterProductionSitePayload;
}

export {
  getWaterProductionSites,
  getWaterProductionSite,
  createWaterProductionSite,
  updateWaterProductioSite,
  deleteWaterProductionSite,
};
