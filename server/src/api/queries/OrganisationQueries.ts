import { GraphQLContext } from "../..";
import { CatchmentProvince } from "../../libs/resolvers-types";

// .then((values) => [
//   ...new Map(
//     values.map((item) => [
//       item.district.province["id"],
//       item.district.province,
//     ])
//   ).values(),

function getOrganisationById(id: string, context: GraphQLContext) {
  return context.prisma.organisation.findUnique({
    where: {
      id,
    },
  });
}

async function getCatchmentProvinces(
  id: string,
  context: GraphQLContext
): Promise<CatchmentProvince[]> {
  const result = await context.prisma.organisation
    .findUnique({
      where: {
        id,
      },
    })
    .catchment_provinces({
      include: {
        province: {
          select: {
            name: true,
          },
        },
        organisation: {
          select: {
            name: true,
          },
        },
      },
    });
  return result.map((value) => ({
    ...value,
    province_name: value.province.name,
    organisation_name: value.organisation.name,
  })) as CatchmentProvince[];
}

function getCountryByOrganisationId(id: string, context: GraphQLContext) {
  return getOrganisationById(id, context).country();
}

export {
  getCountryByOrganisationId,
  getOrganisationById,
  getCatchmentProvinces,
};
