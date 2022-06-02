import { ProvinceResolvers } from "../../../libs/resolvers-types";

export const provinceResolvers: ProvinceResolvers = {
  country: ({ country_id }, _args, context) => {
    return context.prisma.country.findUnique({
      where: {
        id: country_id,
      },
    });
  },
  districts: async ({ id }, { catchment_only }, context) => {
    const where = catchment_only
      ? {
          organisations_in_district: {
            some: {
              district: {
                province_id: id,
              },
            },
          },
        }
      : {
          province_id: id,
        };

    return context.prisma.district.findMany({
      where,
    });
  },
};
