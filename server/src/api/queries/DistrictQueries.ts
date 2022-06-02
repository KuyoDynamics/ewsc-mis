import { GraphQLContext } from "../..";

function getDistrictById(id: string, context: GraphQLContext) {
  return context.prisma.district.findUnique({
    where: {
      id,
    },
  });
}

function getProvinceByDistrictId(id: string, context: GraphQLContext) {
  return getDistrictById(id, context).province();
}

export { getProvinceByDistrictId, getDistrictById };
