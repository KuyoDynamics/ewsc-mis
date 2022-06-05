import { CatchmentProvinceResolvers } from "../../../libs/resolvers-types";
import {
  getCatchmentDistricts,
  getOrganisationById,
  getProvinceById,
} from "../../queries";

export const catchmentProvinceResolvers: CatchmentProvinceResolvers = {
  province: ({ province_id }, _args, context) =>
    getProvinceById(province_id, context),
  organisation: ({ organisation_id }, _args, context) =>
    getOrganisationById(organisation_id, context),
  catchment_districts: ({ id }, _args, context) =>
    getCatchmentDistricts(id, context),
};
