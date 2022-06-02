import { DistrictResolvers } from "../../../libs/resolvers-types";

export const districtResolvers: DistrictResolvers = {
  province: ({ id }, _args, context) => {
    return context.prisma.district
      .findUnique({
        where: {
          id,
        },
      })
      .province();
  },
};
