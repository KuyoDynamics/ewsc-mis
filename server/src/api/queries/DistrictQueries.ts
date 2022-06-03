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
// TODO: Refactor this
function getCatchmentDistrictsByOrganisationId(
  id: string,
  context: GraphQLContext
) {
  return context.prisma.district.findMany({
    where: {
      organisations_in_district: {
        some: {
          organisation_id: id,
        },
      },
    },
  });
}

export {
  getProvinceByDistrictId,
  getDistrictById,
  getCatchmentDistrictsByOrganisationId,
};
