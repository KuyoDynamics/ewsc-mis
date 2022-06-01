import {
  Organisation,
  OrganisationResolvers,
} from "../../../libs/resolvers-types";

export const organisationResolvers: OrganisationResolvers = {
  country: ({ country_id }: Organisation, _args, context) => {
    return context.prisma.country.findUnique({
      where: {
        id: country_id,
      },
    });
  },
  catchment_provinces: async ({ id }: Organisation, _args, context) => {
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
  catchment_districts: async ({ id }: Organisation, _args, context) => {
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
