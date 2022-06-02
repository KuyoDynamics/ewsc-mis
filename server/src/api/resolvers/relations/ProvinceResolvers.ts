import { ProvinceResolvers } from "../../../libs/resolvers-types";
import {
  getCountryByProvinceId,
  getDistrictsByProvinceId,
} from "../../queries";

export const provinceResolvers: ProvinceResolvers = {
  country: ({ id }, _args, context) => getCountryByProvinceId(id, context),
  districts: async ({ id }, { catchment_only }, context) =>
    getDistrictsByProvinceId(id, context, catchment_only),
};
