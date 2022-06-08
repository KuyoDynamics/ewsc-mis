import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { PrismaClient, User } from "@prisma/client";
import express, { Request } from "express";
import http from "http";
import { GraphQLSchema } from "graphql";
import dotenv from "dotenv";

import { schema } from "./api/schema";

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
  user: User;
};

export function createContext(
  req: Request,
  prismaClient: PrismaClient
): GraphQLContext {
  return {
    req,
    prisma: prismaClient,
    // Replace this currently logged-in user
    user: {
      id: "f37beb05-fd36-4046-81a2-33b7051d1ff6",
      first_name: "Berian",
      last_name: "Chaiwa",
      last_login: new Date(),
      last_modified_at: new Date(),
      created_at: new Date(),
      created_by: "chaiwa@kuyodynamics.com",
      email: "chaiwa@kuyodynamics.com",
      last_modified_by: "chaiwa@kuyodynamics.com",
      password: "password",
      theme: null,
      confirmed_at: null,
      hashed_confirmation_token: null,
      hashed_password_reset_token: null,
      disabled: false,
    },
  };
}

async function startApolloServer(
  gqlSchema: GraphQLSchema,
  prismaClient: PrismaClient
) {
  dotenv.config();

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
    httpServer.listen({ port: process.env.PORT }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(schema, prisma);
