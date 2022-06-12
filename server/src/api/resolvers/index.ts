import { resolvers as scalarResolvers } from "graphql-scalars";
import { CountryResolvers } from "../country/index";
import { ProvinceResolvers } from "../province/index";
import { DistrictResolvers } from "../district/index";
import { OrganisationResolvers } from "../organisation/index";
import { CatchmentProvinceResolvers } from "../catchment-province/index";
import { CatchmentDistrictResolvers } from "../catchment-district/index";
import { UserResolvers } from "../user";
import { OrganisationUserResolvers } from "../organisation-user";
import { DistrictUserResolvers } from "../district-user";
import { UserInvitationResolvers } from "../user-invitation";

export default [
  CountryResolvers,
  ProvinceResolvers,
  DistrictResolvers,
  OrganisationResolvers,
  CatchmentProvinceResolvers,
  CatchmentDistrictResolvers,
  UserResolvers,
  OrganisationUserResolvers,
  DistrictUserResolvers,
  UserInvitationResolvers,
  scalarResolvers,
];
