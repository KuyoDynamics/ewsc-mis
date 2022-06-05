import { OrganisationResolvers } from "../../../libs/resolvers-types";
import {
  getCountryByOrganisationId,
  getCatchmentProvinces,
} from "../../queries";

export const organisationResolvers: OrganisationResolvers = {
  country: ({ id }, _args, context) => getCountryByOrganisationId(id, context),
  catchment_provinces: ({ id }, _args, context) =>
    getCatchmentProvinces(id, context),
};
