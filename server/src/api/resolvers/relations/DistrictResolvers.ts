import { District, DistrictResolvers } from "../../../libs/resolvers-types";

export const districtResolvers: DistrictResolvers = {
  province: ({ province_id }: District, _args, context) => {
    return context.prisma.province.findUnique({
      where: {
        id: province_id,
      },
    });
  },
};
