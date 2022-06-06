import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeResolvers } from "@graphql-tools/merge";
import typeDefs from "../typedefs";
import resolvers from "../resolvers";

const schema = makeExecutableSchema({
  typeDefs: [...typeDefs],
  resolvers: mergeResolvers(resolvers),
});

export default schema;
