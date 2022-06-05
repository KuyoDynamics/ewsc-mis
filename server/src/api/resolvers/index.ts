import { Resolvers } from "../../libs/resolvers-types";
import { mutationResolvers } from "./MutationResolvers";
import { queryResolvers } from "./QueryResolvers";
import { catchmentDistrictResolvers } from "./relation fields/CatchmentDistrictResolvers";
import { catchmentProvinceResolvers } from "./relation fields/CatchmentProvinceResolvers";
import { countryResolvers } from "./relation fields/CountryResolvers";
import { districtResolvers } from "./relation fields/DistrictResolvers";
import { organisationResolvers } from "./relation fields/OrganisationResolvers";
import { provinceResolvers } from "./relation fields/ProvinceResolvers";

export const resolvers: Resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,

  //==================Relation Fields Resolvers===================
  Country: countryResolvers,
  Province: provinceResolvers,
  District: districtResolvers,
  Organisation: organisationResolvers,
  CatchmentProvince: catchmentProvinceResolvers,
  CatchmentDistrict: catchmentDistrictResolvers,
};
