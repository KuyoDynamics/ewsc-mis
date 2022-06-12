import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { rule, and, or, not } from "graphql-shield";
import { JsonWebTokenError, TokenExpiredError, verify } from "jsonwebtoken";

import { GraphQLContext } from "../..";
import { MutationCreateInvitedUserArgs } from "../../libs/resolvers-types";

const isValidUserInvitation = rule()(
  async (_, args: MutationCreateInvitedUserArgs, ctx: GraphQLContext) => {
    const { catchment_district_ids, organisation_id, user_invitation_id } =
      args.input;
    const { email } = args.input.user_details;

    try {
      const userInvitation = await ctx.prisma.userInvitation.findUnique({
        where: {
          id: user_invitation_id,
        },
      });

      verify(userInvitation?.invitation_token!, process.env.JWT_SECRET!, {
        audience: catchment_district_ids,
        issuer: organisation_id,
        subject: email,
        jwtid: user_invitation_id,
      });
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        return "Invitation expired.";
      }
      if (error instanceof JsonWebTokenError) {
        return "You provided Invalid Details for this invitation.";
      }

      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P5003") {
          return "Invitation Not Found.";
        }
      }

      if (error instanceof Error) {
        console.log("Error occured", error);
        return "Invalid Invitation Link.";
      }
    }

    return true;
  }
);

export { isValidUserInvitation };
