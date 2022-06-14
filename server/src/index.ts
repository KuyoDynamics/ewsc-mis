import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { PrismaClient } from "@prisma/client";
import express from "express";
import http from "http";
import { GraphQLSchema } from "graphql";
import dotenv from "dotenv";
import { expressjwt } from "express-jwt";
import { schema } from "./api/schema";
import { createContext } from "./utils";

const prisma = new PrismaClient({
  // rejectOnNotFound: {
  //   findUnique: true,
  //   findFirst: true,
  // },
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

// prisma.$on("query", (e) => {
//   console.log("Query: " + e.query);
//   console.log("Params: " + e.params);
//   console.log("Duration: " + e.duration + "ms");
//   console.log("\n===================================");
// });

async function startApolloServer(
  gqlSchema: GraphQLSchema,
  prismaClient: PrismaClient
) {
  dotenv.config();

  const app = express();

  app.use(
    expressjwt({
      secret: process.env.JWT_SECRET!,
      algorithms: ["HS256"],
      credentialsRequired: false,
    })
  );

  // Express global error handler
  app.use(function (_err: any, _req: any, _res: any, next: any) {
    next();
  });

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
