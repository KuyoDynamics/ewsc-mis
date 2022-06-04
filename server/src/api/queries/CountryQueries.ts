import { GraphQLContext } from "../..";

function getCountries(context: GraphQLContext) {
  return context.prisma.country.findMany({});
}
function getCountryById(id: string, context: GraphQLContext) {
  return context.prisma.country.findUnique({
    where: {
      id,
    },
  });
}

function getProvincesByCountryId(id: string, context: GraphQLContext) {
  return getCountryById(id, context).provinces();
}

function getOrganisationsByCountryId(id: string, context: GraphQLContext) {
  return getCountryById(id, context).organisations();
}
export {
  getCountries,
  getProvincesByCountryId,
  getOrganisationsByCountryId,
  getCountryById,
};
