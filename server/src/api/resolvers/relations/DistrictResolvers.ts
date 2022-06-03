import { DistrictResolvers } from "../../../libs/resolvers-types";
import { getProvinceByDistrictId } from "../../queries";

export const districtResolvers: DistrictResolvers = {
  province: ({ id }, _args, context, info) =>
    getProvinceByDistrictId(id, context, info),
};
