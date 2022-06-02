import { Resolvers } from "../../libs/resolvers-types";
import { queryResolvers } from "./QueryResolvers";
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
};
