// import { PubSub } from 'graphql-subscriptions';
import { GraphQLContext } from '../utils';
import {
  MutationCreateInvitedUserArgs,
  UserInvitation,
  UserInvitationResult,
} from '../libs/resolvers-types';
import { sendEmail } from '../mailer';
import { EmailStatus, Organisation } from '@prisma/client';

// const pubSub = new PubSub();

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

      console.log('userInvitationResult', userInvitationResult);

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
            'Error occure before sending email to invited users',
            error
          );
        }
      }

      userInvitationResult.forEach(async (item) => {
        if (item.__typename === 'UserInvitation') {
          try {
            const url = `${process.env.HOST_URL}//signup?id=${item.id}`;
            sendEmail(
              organisation?.name ?? '',
              item.email,
              `${organisation?.name} MIS Invitation`,
              `<p>To join and start using the ${organisation?.name} MIS, please click on the link below. If clicking does not work, copy the url and paste in the broswer:</p>
              <br/>
              <a href=${url}>${url}<a/>`,
              async (err, information) => {
                const emailStatus: EmailStatus = err
                  ? EmailStatus.FAILED
                  : information?.accepted?.indexOf(item.email) > -1
                  ? EmailStatus.SENT
                  : EmailStatus.REJECTED;
                try {
                  const result = await context.prisma.userInvitation.update({
                    where: {
                      id: item.id,
                    },
                    data: {
                      email_status: emailStatus,
                    },
                  });

                  context.pubSub.publish('USER_INVITATION_UPDATED', {
                    userInvitationUpdated: result,
                  });
                } catch (error) {
                  console.log(
                    'Error during email sending. Failed to update Invitation Email Status:',
                    error
                  );
                }
              }
            );
          } catch (error) {
            console.log(
              'Error occured during sending email for UserInvitation',
              error
            );
          }
        }
      });

      return userInvitationResult;
    },
  },
};

export { deleteUserInvitationMiddleware, sendInvitationEmailMiddleware };
