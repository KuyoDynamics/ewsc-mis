import { Resolvers } from "../libs/resolvers-types";

export const resolvers: Resolvers = {
  Query: {
    country: (_parent: unknown, args, context) => {
      return context.prisma.country.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    province: (_parent: unknown, args, context) => {
      return context.prisma.province.findUnique({
        include: { districts: true },
        where: {
          id: args.id,
        },
      });
    },
    allCountries: (_parent: unknown, _args, context) => {
      return context.prisma.country.findMany({ include: { provinces: true } });
    },
    provincesByCountry: (_parent: unknown, args, context) => {
      return context.prisma.province.findMany({
        include: {
          districts: true,
        },
        where: {
          country_id: args.country_id,
        },
      });
    },
  },
  // Mutation,
  // Subscription,
};
