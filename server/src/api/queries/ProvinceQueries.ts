import { GraphQLContext } from "../..";
import { InputMaybe } from "../../libs/resolvers-types";

function getCatchmentProvincesByOrganisationId(
  id: string,
  context: GraphQLContext
) {
  // TODO: Refactor this too. Use findUnique so Prisma can batch
  return context.prisma.province.findMany({
    where: {
      districts: {
        some: {
          organisations_in_district: {
            some: {
              organisation_id: id,
            },
          },
        },
      },
    },
  });
}

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

function getDistrictsByProvinceId(
  id: string,
  context: GraphQLContext,
  catchment_only: InputMaybe<boolean> | undefined
) {
  // TODO: Re-think this logic later
  // For now focus on other tables
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
    .districts();
}

export {
  getCatchmentProvincesByOrganisationId,
  getCountryByProvinceId,
  getProvinceById,
  getDistrictsByProvinceId,
};
