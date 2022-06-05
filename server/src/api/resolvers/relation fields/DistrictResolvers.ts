import { DistrictResolvers } from "../../../libs/resolvers-types";
import { getDistrictProvince } from "../../queries";

export const districtResolvers: DistrictResolvers = {
  province: ({ id }, _args, context) => getDistrictProvince(id, context),
  // organisations_in_district: ({ id }, _args, context) =>
  //   getOrganisationsInDistrict(id, context),
};
