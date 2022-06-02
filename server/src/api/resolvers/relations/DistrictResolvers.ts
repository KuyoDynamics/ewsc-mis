import { GraphQLContext } from "../../..";
import { District, DistrictResolvers } from "../../../libs/resolvers-types";

export const districtResolvers: DistrictResolvers<GraphQLContext> = {
  province: ({ province_id }: District, _args, context): Promise<any> => {
    return context.prisma.province.findUnique({
      where: {
        id: province_id,
      },
    });
  },
};
