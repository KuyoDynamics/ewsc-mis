import { GraphQLContext } from "../..";
import { CatchmentProvince } from "../../libs/resolvers-types";

async function getCatchmentProvinceById(
  id: string,
  context: GraphQLContext
): Promise<CatchmentProvince> {
  const result = await context.prisma.catchmentProvince.findUnique({
    where: {
      id,
    },
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

  return {
    ...result,
    province_name: result?.province.name,
    organisation_name: result?.organisation.name,
  } as CatchmentProvince;
}

export { getCatchmentProvinceById };
