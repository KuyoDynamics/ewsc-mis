import { CountryResolvers } from "../../../libs/resolvers-types";

export const countryResolvers: CountryResolvers = {
  provinces: async ({ id }, _args, context) => {
    return context.prisma.province.findMany({
      where: {
        country_id: id,
      },
    });
  },
  organisations: ({ id }, _args, context) => {
    return context.prisma.organisation.findMany({
      where: {
        country_id: id,
      },
    });
  },
};
