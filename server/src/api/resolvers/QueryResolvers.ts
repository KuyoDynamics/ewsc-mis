import { QueryResolvers } from "../../libs/resolvers-types";

export const queryResolvers: QueryResolvers = {
  country: (_root: unknown, { id, code, name }, context) => {
    return context.prisma.country.findUnique({
      where: {
        id: id || undefined,
        code: code || undefined,
        name: name || undefined,
      },
    });
  },
  countries: (_root: unknown, _args, context) => {
    return context.prisma.country.findMany({});
  },
  province: (_root: unknown, { id }, context) => {
    return context.prisma.province.findUnique({
      where: {
        id,
      },
    });
  },
  provinces: (_root: unknown, { country_id }, context) => {
    return context.prisma.province.findMany({
      where: {
        country_id,
      },
    });
  },
  district: (_root: unknown, { id }, context) => {
    return context.prisma.district.findUnique({
      where: {
        id,
      },
    });
  },
  districts: (_root: unknown, { province_id }, context) => {
    return context.prisma.district.findMany({
      where: {
        province_id,
      },
    });
  },
};
