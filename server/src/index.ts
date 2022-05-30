import fs from "fs";
import path from "path";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { PrismaClient } from "@prisma/client";
import express from "express";
import http from "http";
import Query from "./api/resolvers/Query";
// import Mutation from "./api/resolvers/Mutation";
// import Subscription from "./api/resolvers/Subscription";
import { GraphQLSchema } from "graphql";

const prisma = new PrismaClient();
const pubSub = "";

const resolvers = {
  Query,
  // Mutation,
  // Subscription,
};

const typeDefs = fs.readFileSync(
  path.join(path.resolve(), "src/domain/schema.graphql"),
  "utf-8"
);

const schema = makeExecutableSchema({ typeDefs, resolvers });

async function startApolloServer(schema: GraphQLSchema, prisma: PrismaClient) {
  const app = express();

  // 1. Http Server
  const httpServer = http.createServer(app);

  // 2. Websocket Server
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/",
  });

  const wsServerCleanup = useServer({ schema }, wsServer);

  // 3. Apollo Server
  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      return {
        ...req,
        prisma,
        //pubsub,
        //userId: req && req.headers.authorization ? getUserId(req) : null,
      };
    },
    csrfPrevention: true,
    plugins: [
      // Proper shutdown for the HTTP server.
      ApolloServerPluginDrainHttpServer({ httpServer }),

      // Proper shutdown for the websocket server
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await wsServerCleanup.dispose();
            },
          };
        },
      },
    ],
  });

  await server.start();
  server.applyMiddleware({
    app,
  });

  //   Modified server startup
  await new Promise<any>((resolve: any) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(schema, prisma);
