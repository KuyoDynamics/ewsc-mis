import { GraphQLContext } from "../..";

function getDistrictById(id: string, context: GraphQLContext) {
  return context.prisma.district.findUnique({
    where: {
      id,
    },
  });
}

function getProvinceDistricts(id: string, context: GraphQLContext) {
  return context.prisma.province
    .findUnique({
      where: {
        id,
      },
    })
    .districts();
}

function getOrganisationsInDistrict(id: string, context: GraphQLContext) {
  return context.prisma.district
    .findUnique({
      where: {
        id,
      },
    })
    .organisations_in_district();
}

function getDistrictsByProvinceId(id: string, context: GraphQLContext) {
  return getProvinceDistricts(id, context);
}

function getDistrictProvince(id: string, context: GraphQLContext) {
  return getDistrictById(id, context).province();
}

export { getDistrictProvince, getDistrictById, getDistrictsByProvinceId };
