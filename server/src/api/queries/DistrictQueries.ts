import { GraphQLContext } from "../..";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";

function getDistrictById(
  id: string,
  context: GraphQLContext,
  info: GraphQLResolveInfo
) {
  const select = new PrismaSelect(info).value;
  return context.prisma.district.findUnique({
    where: {
      id,
    },
    ...select,
  });
}

function getProvinceByDistrictId(
  id: string,
  context: GraphQLContext,
  info: GraphQLResolveInfo
) {
  return getDistrictById(id, context, info).province();
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
