import {
  typeDefs as scalarTypeDefs,
  resolvers as scalarResolvers,
} from "graphql-scalars";
import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from "../typedefs";
import {
  CountryResolvers,
  ProvinceResolvers,
  DistrictResolvers,
  CatchmentDistrictResolvers,
  CatchmentProvinceResolvers,
  OrganisationResolvers,
} from "../resolvers";

const schema = makeExecutableSchema({
  typeDefs: [...typeDefs, ...scalarTypeDefs],
  resolvers: {
    ...CountryResolvers,
    ...ProvinceResolvers,
    ...DistrictResolvers,
    ...OrganisationResolvers,
    ...CatchmentDistrictResolvers,
    ...CatchmentProvinceResolvers,
    ...scalarResolvers,
  },
});

export default schema;
