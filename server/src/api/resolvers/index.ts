import { Resolvers } from "../../libs/resolvers-types";
import { queryResolvers } from "./QueryResolvers";
import { catchmentDistrictResolvers } from "./relations/CatchmentDistrictResolvers";
import { catchmentProvinceResolvers } from "./relations/CatchmentProvinceResolvers";
import { countryResolvers } from "./relations/CountryResolvers";
import { districtResolvers } from "./relations/DistrictResolvers";
import { organisationResolvers } from "./relations/OrganisationResolvers";
import { provinceResolvers } from "./relations/ProvinceResolvers";

export const resolvers: Resolvers = {
  Query: queryResolvers,

  //==================Relation Fields Resolvers===================
  Country: countryResolvers,
  Province: provinceResolvers,
  District: districtResolvers,
  Organisation: organisationResolvers,
  CatchmentProvince: catchmentProvinceResolvers,
  CatchmentDistrict: catchmentDistrictResolvers,
};
