import { Organisation } from '@prisma/client';
import {
  MutationCreateInvitedUserArgs,
  UserInvitationResult,
} from '../libs/resolvers-types';
import { GraphQLContext } from '../utils';
import { sendInvitation } from '../mailer';

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
      const userInvitationResult: UserInvitationResult[] = await resolve(
        parent,
        args,
        context,
        info
      );

      const userInvitation: UserInvitationResult | undefined =
        userInvitationResult.find(
          (item) => item.__typename === 'UserInvitation'
        );

      let organisation: Organisation | null;
      if (userInvitation?.__typename === 'UserInvitation') {
        try {
          organisation = await context.prisma.organisation.findUnique({
            where: {
              id: userInvitation.organisation_id,
            },
          });
        } catch (error) {
          console.log(
            'Error occured before sending email to invited users',
            error
          );
        }
      }

      userInvitationResult.forEach(async (item) => {
        if (item.__typename === 'UserInvitation') {
          await sendInvitation(
            item.email,
            item.id,
            organisation?.name ?? '',
            context
          );
        }
      });

      return userInvitationResult;
    },
  },
};

export { deleteUserInvitationMiddleware, sendInvitationEmailMiddleware };
