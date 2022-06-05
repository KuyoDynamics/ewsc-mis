import { GraphQLContext } from "../..";

function getProvinceById(id: string, context: GraphQLContext) {
  return context.prisma.province.findUnique({
    where: {
      id,
    },
  });
}

function getCountryByProvinceId(id: string, context: GraphQLContext) {
  return getProvinceById(id, context).country();
}

export { getCountryByProvinceId, getProvinceById };
