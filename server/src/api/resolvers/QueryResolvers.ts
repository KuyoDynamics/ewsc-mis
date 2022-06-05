import { QueryResolvers } from "../../libs/resolvers-types";
import {
  getCountries,
  getCountryById,
  getDistrictById,
  getDistrictsByProvinceId,
  getProvinceById,
  getProvincesByCountryId,
} from "../queries";

export const queryResolvers: QueryResolvers = {
  country: async (_root, { id }, context) => {
    return getCountryById(id, context);
  },
  countries: (_root, _args, context) => getCountries(context),
  province: (_root, { id }, context) => getProvinceById(id, context),
  provinces: (_root, { country_id }, context) =>
    getProvincesByCountryId(country_id, context),
  district: (_root, { id }, context) => getDistrictById(id, context),
  districts: (_root, { province_id }, context) =>
    getDistrictsByProvinceId(province_id, context),
};
