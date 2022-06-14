import { hash, compare } from "bcrypt";
import { Request as JWTRequest } from "express-jwt";
import { PrismaClient, User } from "@prisma/client";
async function encryptPassword(password: string) {
  return hash(password, 10);
}

async function isValidPassword(passwordText: string, passwordhash: string) {
  return compare(passwordText, passwordhash);
}

function addDays(date: Date, days: number) {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}

type GraphQLContext = {
  req: JWTRequest;
  user: User;
  prisma: PrismaClient;
};

async function createContext(
  req: JWTRequest,
  prismaClient: PrismaClient
): Promise<GraphQLContext> {
  let user;
  try {
    user = await prismaClient.user.findUnique({
      where: {
        id: req.auth?.sub,
      },
    });
  } catch (error) {
    console.log("Failed to find user for createContext", error);
  }
  return {
    req,
    prisma: prismaClient,
    user,
  } as GraphQLContext;
}

export {
  encryptPassword,
  isValidPassword,
  addDays,
  GraphQLContext,
  createContext,
};
