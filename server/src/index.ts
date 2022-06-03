import fs from "fs";
import path from "path";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { PrismaClient } from "@prisma/client";
import express, { Request } from "express";
import http from "http";
import {
  typeDefs as scalarTypeDefs,
  resolvers as scalarResolvers,
} from "graphql-scalars";
import { GraphQLSchema } from "graphql";
import { resolvers } from "./api/resolvers";

const prisma = new PrismaClient({
  rejectOnNotFound: {
    findUnique: true,
    findFirst: true,
  },
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "stdout",
      level: "error",
    },
    {
      emit: "stdout",
      level: "info",
    },
    {
      emit: "stdout",
      level: "warn",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log("Query: " + e.query);
  console.log("Params: " + e.params);
  console.log("Duration: " + e.duration + "ms");
  console.log("\n===================================");
});

export type GraphQLContext = {
  req: Request;
  prisma: PrismaClient;
};

export function createContext(
  req: Request,
  prismaClient: PrismaClient
): GraphQLContext {
  return {
    req,
    prisma: prismaClient,
  };
}

const typeDefs = fs.readFileSync(
  path.join(path.resolve(), "src/api/domain/schema.graphql"),
  "utf-8"
);

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, ...scalarTypeDefs],
  resolvers: { ...resolvers, ...scalarResolvers },
});

async function startApolloServer(
  gqlSchema: GraphQLSchema,
  prismaClient: PrismaClient
) {
  const app = express();

  // 1. Http Server
  const httpServer = http.createServer(app);

  // 2. Websocket Server
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/",
  });

  const wsServerCleanup = useServer({ schema: gqlSchema }, wsServer);

  // 3. Apollo Server
  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      return createContext(req, prismaClient);
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

  await new Promise<any>((resolve: any) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(schema, prisma);