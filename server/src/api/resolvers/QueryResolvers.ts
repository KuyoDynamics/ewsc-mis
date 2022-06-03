import { QueryResolvers } from "../../libs/resolvers-types";

export const queryResolvers: QueryResolvers = {
  country: async (_root, { id }, context) => {
    return context.prisma.country.findUnique({
      where: {
        id,
      },
    });
  },
  countries: (_root, _args, context) => {
    return context.prisma.country.findMany({});
  },
  province: (_root, { id }, context) => {
    return context.prisma.province.findUnique({
      where: {
        id,
      },
    });
  },
  provinces: (_root, { country_id }, context) => {
    return context.prisma.country
      .findUnique({
        where: {
          id: country_id,
        },
      })
      .provinces();
  },
  district: (_root, { id }, context) => {
    return context.prisma.district.findUnique({
      where: {
        id,
      },
    });
  },
  districts: (_root, { province_id }, context) => {
    return context.prisma.province
      .findUnique({
        where: {
          id: province_id,
        },
      })
      .districts();
  },
};
