import { GraphQLContext } from "../..";
import { CatchmentDistrict } from "../../libs/resolvers-types";

async function getCatchmentDistricts(
  id: string,
  context: GraphQLContext
): Promise<CatchmentDistrict[]> {
  const result = await context.prisma.catchmentProvince
    .findUnique({
      where: {
        id,
      },
    })
    .catchment_districts({
      include: {
        district: {
          select: {
            name: true,
            province: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  return result.map((value) => ({
    ...value,
    district_name: value.district.name,
    catchment_province_name: value.district.province.name,
  })) as CatchmentDistrict[];
}

export { getCatchmentDistricts };
