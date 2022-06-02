import { ProvinceResolvers } from "../../../libs/resolvers-types";

export const provinceResolvers: ProvinceResolvers = {
  country: ({ id }, _args, context) => {
    return context.prisma.province
      .findUnique({
        where: {
          id,
        },
      })
      .country();
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

    return context.prisma.province
      .findUnique({
        where: {
          id,
        },
      })
      .districts({
        where,
      });
  },
};
