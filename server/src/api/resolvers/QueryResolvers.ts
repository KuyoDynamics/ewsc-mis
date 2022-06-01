import { GraphQLContext } from "../..";
import { QueryResolvers } from "../../libs/resolvers-types";

export const queryResolvers: QueryResolvers = {
  country: (_root, { id, code, name }, context) => {
    return context.prisma.country.findFirst({
      where: {
        id: id || undefined,
        code: code
          ? {
              equals: code,
              mode: "insensitive",
            }
          : undefined,
        name: name
          ? {
              equals: name,
              mode: "insensitive",
            }
          : undefined,
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
    return context.prisma.province.findMany({
      where: {
        country_id,
      },
    });
  },
  district: (_root, { id }, context) => {
    return context.prisma.district.findUnique({
      where: {
        id,
      },
    });
  },
  districts: (_root, { province_id }, context) => {
    return context.prisma.district.findMany({
      where: {
        province_id,
      },
    });
  },
};
