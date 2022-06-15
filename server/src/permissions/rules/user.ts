import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { rule, and, or, not } from "graphql-shield";
import { JsonWebTokenError, TokenExpiredError, verify } from "jsonwebtoken";

import { GraphQLContext } from "../../utils";
import {
  MutationCreateInvitedUserArgs,
  UserRoleType,
} from "../../libs/resolvers-types";

function hasRole(ctx: GraphQLContext, user_role: UserRoleType): boolean {
  return ctx.user.user_roles.some((role) => role === user_role);
}

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

      if (!userInvitation) {
        return "Invitation Not Found.";
      }

      verify(userInvitation.invitation_token, process.env.JWT_SECRET!, {
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
        return "Invalid Details for this invitation.";
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

const authenticated = rule({ cache: "contextual" })(
  (_parent, _args, ctx: GraphQLContext) => {
    return !!ctx.user;
  }
);

const isUserDisabled = rule({ cache: "contextual" })(
  (_parent, _args, ctx: GraphQLContext) => {
    return !!ctx.user.disabled;
  }
);

const isAuthenticated = and(authenticated, not(isUserDisabled));

const isAdmin = rule({ cache: "contextual" })(
  (_parent, _args, ctx: GraphQLContext, _info) => {
    return hasRole(ctx, UserRoleType.Admin);
  }
);

const canSeeUserSensitiveData = rule({ cache: "strict" })(
  async (parent, args, ctx, info) => {
    /* The id of observed User matches the id of authenticated viewer. */
    return ctx.user.id === parent.id;
  }
);

const isEditor = rule()(async (parent, args, ctx, info) => {
  return hasRole(ctx, UserRoleType.DataEntry);
});

// const isUserSensitiveData = rule()(
//   async (parent,args,ctx,info)=>{
//     return
//   }
// )

// const canEditUserSensitiveData = rule({ cache: "strict" })(
//   async (parent, args, ctx, info) => {

//     return or(and(isAdmin, isAuthenticated), canSeeUserSensitiveData);
//   }
// );

// const isOwner = rule()(async (parent, args, ctx, info) => {
//   return ctx.user.items.some((id) => id === parent.id)
// })

export {
  isValidUserInvitation,
  isAuthenticated,
  isUserDisabled,
  isAdmin,
  isEditor,
  canSeeUserSensitiveData,
};
