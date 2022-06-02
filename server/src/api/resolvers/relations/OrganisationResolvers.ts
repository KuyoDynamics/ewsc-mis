import { OrganisationResolvers } from "../../../libs/resolvers-types";

export const organisationResolvers: OrganisationResolvers = {
  country: ({ id }, _args, context) => {
    return context.prisma.organisation
      .findUnique({
        where: {
          id,
        },
      })
      .country();
  },
  catchment_provinces: ({ id }, _args, context) => {
    return context.prisma.province.findMany({
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
  },
  catchment_districts: async ({ id }, _args, context) => {
    return context.prisma.district.findMany({
      where: {
        organisations_in_district: {
          some: {
            organisation_id: id,
          },
        },
      },
    });
  },
};
