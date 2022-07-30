import { GraphQLContext } from '../utils';
import { MutationCreateInvitedUserArgs } from '../libs/resolvers-types';

const deleteUserInvitationMiddleware = {
  Mutation: {
    createInvitedUser: async (
      resolve: any,
      parent: any,
      args: MutationCreateInvitedUserArgs,
      context: GraphQLContext,
      info: any
    ) => {
      try {
        const invitedUser = await resolve(parent, args, context, info);
        try {
          if (invitedUser) {
            await context.prisma.userInvitation.delete({
              where: {
                id: args.input.user_invitation_id,
              },
            });
          }
        } catch (error) {
          console.log('Chaiwa, just keep quiet or send to Sentry!', error);
        }
        return invitedUser;
      } catch (error) {
        return error;
      }
    },
  },
};

const sendInvitationEmailMiddleware = {
  Mutation: {
    createUserInvitation: async (
      resolve: any,
      parent: any,
      args: MutationCreateInvitedUserArgs,
      context: GraphQLContext,
      info: any
    ) => {
      const userInvitationResult = await resolve(parent, args, context, info);

      console.log('userInvitationResult', userInvitationResult);

      return userInvitationResult;
    },
  },
};

export { deleteUserInvitationMiddleware, sendInvitationEmailMiddleware };
