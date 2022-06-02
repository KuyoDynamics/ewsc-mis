import { GraphQLContext } from "../..";
import { QueryResolvers } from "../../libs/resolvers-types";

export const queryResolvers: QueryResolvers<GraphQLContext> = {
  country: async (_root, { id, code, name }, context): Promise<any> => {
    const res = await context.prisma.country.findFirst({
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
    return res;
  },
  countries: (_root, _args, context): Promise<any> => {
    return context.prisma.country.findMany({});
  },
  province: (_root, { id }, context): Promise<any> => {
    return context.prisma.province.findUnique({
      where: {
        id,
      },
    });
  },
  provinces: (_root, { country_id }, context): Promise<any> => {
    return context.prisma.province.findMany({
      where: {
        country_id,
      },
    });
  },
  district: (_root, { id }, context): Promise<any> => {
    return context.prisma.district.findUnique({
      where: {
        id,
      },
    });
  },
  districts: (_root, { province_id }, context): Promise<any> => {
    return context.prisma.district.findMany({
      where: {
        province_id,
      },
    });
  },
};
