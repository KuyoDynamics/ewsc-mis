import { resolvers as scalarResolvers } from "graphql-scalars";
import { CountryResolvers } from "../country/index";
import { ProvinceResolvers } from "../province/index";
import { DistrictResolvers } from "../district/index";
import { OrganisationResolvers } from "../organisation/index";
import { CatchmentProvinceResolvers } from "../catchment-province/index";
import { CatchmentDistrictResolvers } from "../catchment-district/index";
import { UserResolvers } from "../user";
import { UserRoleResolvers } from "../user-role";

export default [
  CountryResolvers,
  ProvinceResolvers,
  DistrictResolvers,
  OrganisationResolvers,
  CatchmentProvinceResolvers,
  CatchmentDistrictResolvers,
  UserResolvers,
  UserRoleResolvers,
  scalarResolvers,
];
