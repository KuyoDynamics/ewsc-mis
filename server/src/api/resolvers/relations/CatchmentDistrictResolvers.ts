import { CatchmentDistrictResolvers } from "../../../libs/resolvers-types";
import { getCatchmentProvinceById, getDistrictById } from "../../queries";

export const catchmentDistrictResolvers: CatchmentDistrictResolvers = {
  district: ({ district_id }, _args, context) =>
    getDistrictById(district_id, context),
  catchment_province: ({ catchment_province_id }, _args, context) =>
    getCatchmentProvinceById(catchment_province_id, context),
};
