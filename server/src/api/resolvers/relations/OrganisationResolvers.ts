import { GraphQLContext } from "../../..";
import {
  Organisation,
  OrganisationResolvers,
} from "../../../libs/resolvers-types";

export const organisationResolvers: OrganisationResolvers<GraphQLContext> = {
  country: ({ country_id }: Organisation, _args, context): Promise<any> => {
    return context.prisma.country.findUnique({
      where: {
        id: country_id,
      },
    });
  },
  catchment_provinces: async (
    { id }: Organisation,
    _args,
    context
  ): Promise<any> => {
    const result = await context.prisma.province.findMany({
      where: {
        districts: {
          some: {
            organisations_in_district: {
              some: {
                organisation_id: id,
              },
            },
          },
        },
      },
    });

    return result;
  },
  catchment_districts: async (
    { id }: Organisation,
    _args,
    context
  ): Promise<any> => {
    const districts = await context.prisma.district.findMany({
      where: {
        organisations_in_district: {
          some: {
            organisation_id: id,
          },
        },
      },
    });
    return districts;
  },
};
