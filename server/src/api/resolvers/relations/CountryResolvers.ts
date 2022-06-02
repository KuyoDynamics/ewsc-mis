import { GraphQLContext } from "../../..";
import { Country, CountryResolvers } from "../../../libs/resolvers-types";

export const countryResolvers: CountryResolvers<GraphQLContext> = {
  provinces: ({ id }: Country, _args, context): Promise<any> => {
    return context.prisma.province.findMany({
      where: {
        country_id: id,
      },
    });
  },
  organisations: ({ id }: Country, _args, context): Promise<any> => {
    return context.prisma.organisation.findMany({
      where: {
        country_id: id,
      },
    });
  },
};
