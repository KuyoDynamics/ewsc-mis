import { GraphQLContext } from "..";
import { MutationCreateInvitedUserArgs } from "../libs/resolvers-types";

const deleteUserInvitationMiddleware = {
  Mutation: {
    createInvitedUser: async (
      resolve: (
        arg0: any,
        arg1: MutationCreateInvitedUserArgs,
        arg2: GraphQLContext,
        arg3: any
      ) => any,
      parent: any,
      args: MutationCreateInvitedUserArgs,
      context: GraphQLContext,
      info: any
    ) => {
      try {
        const invitedUser = await resolve(parent, args, context, info);
        try {
          await context.prisma.userInvitation.delete({
            where: {
              id: args.input.user_invitation_id,
            },
          });
        } catch (error) {
          console.log("Chaiwa, just keep quiet or send to Sentry!", error);
        }
        return invitedUser;
      } catch (error) {
        return error;
      }
    },
  },
};

export { deleteUserInvitationMiddleware };
