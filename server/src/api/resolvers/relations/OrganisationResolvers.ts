import { OrganisationResolvers } from "../../../libs/resolvers-types";
import {
  getCatchmentDistrictsByOrganisationId,
  getCatchmentProvincesByOrganisationId,
  getCountryByOrganisationId,
} from "../../queries";

export const organisationResolvers: OrganisationResolvers = {
  country: ({ id }, _args, context) => getCountryByOrganisationId(id, context),
  catchment_provinces: ({ id }, _args, context) =>
    getCatchmentProvincesByOrganisationId(id, context),
  catchment_districts: async ({ id }, _args, context) =>
    getCatchmentDistrictsByOrganisationId(id, context),
};
