import { GraphQLContext } from "../..";

function getOrganisationById(id: string, context: GraphQLContext) {
  return context.prisma.organisation.findUnique({
    where: {
      id,
    },
  });
}

function getCountryByOrganisationId(id: string, context: GraphQLContext) {
  return getOrganisationById(id, context).country();
}

export { getCountryByOrganisationId, getOrganisationById };
