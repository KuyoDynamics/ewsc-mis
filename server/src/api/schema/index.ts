import {
  typeDefs as scalarTypeDefs,
  resolvers as scalarResolvers,
} from "graphql-scalars";
import { makeExecutableSchema } from "@graphql-tools/schema";
import * as typeDefs from "../typedefs";
import * as resolvers from "../resolvers";

const schema = makeExecutableSchema({
  typeDefs: [...typeDefs, ...scalarTypeDefs],
  resolvers: { ...resolvers, ...scalarResolvers },
});

export default schema;
