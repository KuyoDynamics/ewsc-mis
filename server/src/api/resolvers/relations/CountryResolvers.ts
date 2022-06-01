import { Country, CountryResolvers } from "../../../libs/resolvers-types";

export const countryResolvers: CountryResolvers = {
  provinces: ({ id }: Country, _args, context) => {
    return context.prisma.province.findMany({
      where: {
        country_id: id,
      },
    });
  },
  organisations: ({ id }: Country, _args, context) => {
    return context.prisma.organisation.findMany({
      where: {
        country_id: id,
      },
    });
  },
};
