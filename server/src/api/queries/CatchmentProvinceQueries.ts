import { GraphQLContext } from "../..";

async function getCatchmentProvinceById(id: string, context: GraphQLContext) {
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
  };
}

export { getCatchmentProvinceById };
