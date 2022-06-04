import { ProvinceResolvers } from "../../../libs/resolvers-types";
import {
  getCountryByProvinceId,
  getDistrictsByProvinceId,
} from "../../queries";

export const provinceResolvers: ProvinceResolvers = {
  country: ({ id }, _args, context) => getCountryByProvinceId(id, context),
  districts: (parent, _args, context) => {
    return getDistrictsByProvinceId(parent.id, context);
  },
};
