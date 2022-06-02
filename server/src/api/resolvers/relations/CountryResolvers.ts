import { CountryResolvers } from "../../../libs/resolvers-types";

export const countryResolvers: CountryResolvers = {
  provinces: async ({ id }, _args, context) => {
    return context.prisma.country
      .findUnique({
        where: {
          id,
        },
      })
      .provinces();
  },
  organisations: ({ id }, _args, context) => {
    return context.prisma.country
      .findUnique({
        where: {
          id,
        },
      })
      .organisations();
  },
};
