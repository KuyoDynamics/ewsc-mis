import { CountryResolvers } from "../../../libs/resolvers-types";
import {
  getOrganisationsByCountryId,
  getProvincesByCountryId,
} from "../../queries";

export const countryResolvers: CountryResolvers = {
  provinces: async ({ id }, _args, context) =>
    getProvincesByCountryId(id, context),
  organisations: ({ id }, _args, context) =>
    getOrganisationsByCountryId(id, context),
};
