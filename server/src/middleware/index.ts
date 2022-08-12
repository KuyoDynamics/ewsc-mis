import { EmailStatus, Organisation } from '@prisma/client';
import {
  MutationCreateInvitedUserArgs,
  MutationRequestPasswordResetArgs,
  User,
  UserInvitationResult,
  UserResult,
} from '../libs/resolvers-types';
import { GraphQLContext } from '../utils';
import { sendEmail, sendInvitation } from '../mailer';

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
        const invitedUser: UserResult = await resolve(
          parent,
          args,
          context,
          info
        );
        console.log('invitedUser', invitedUser);
        try {
          if (invitedUser.__typename === 'User') {
            await context.prisma.userInvitation.delete({
              where: {
                id: args.input.user_invitation_id,
              },
            });
          }
          return invitedUser;
        } catch (error) {
          console.log(
            'Chaiwa, just keep quiet or send to Sentry!',
            error,
            args
          );
          return invitedUser;
        }
      } catch (error) {
        console.log('Chaiwa, send to Sentry!', error, args);
        return {
          __typename: 'ApiCreateError',
          message: 'Failed to create User due to internal server error',
        };
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

const sendPasswordResetEmailMiddleware = {
  Mutation: {
    requestPasswordReset: async (
      resolve: any,
      parent: any,
      args: MutationRequestPasswordResetArgs,
      context: GraphQLContext,
      info: any
    ) => {
      const userResult: UserResult = await resolve(parent, args, context, info);

      const user = userResult.__typename === 'User' ? userResult : null;

      if (user) {
        if (userResult?.__typename === 'User') {
          try {
            console.log('Chaiwa, was this called?');
            const url = `${process.env.HOST_URL}/resetPassword?token=${user.hashed_password_reset_token}`;
            await sendEmail(
              user.user_default_organisation?.name!,
              user.email,
              'Request to reset your password',
              `<p>To reset your password for your ${user.user_default_organisation?.name} MIS Account, please click on the link below. If clicking does not work, copy the url and paste in the broswer:</p> <br/> <a href=${url}>${url}<a/>`,
              async (err, information) => {
                const emailStatus: EmailStatus = err
                  ? EmailStatus.FAILED
                  : information?.accepted?.indexOf(user.email) > -1
                  ? EmailStatus.SENT
                  : EmailStatus.REJECTED;
                console.log('Chaiwa, EmailStatus', emailStatus);
                try {
                  const result = await context.prisma.user.update({
                    where: {
                      email: user.email,
                    },
                    data: {
                      password_reset_email_status: emailStatus,
                      last_modified_by: context.user.email,
                    },
                  });

                  context.pubSub.publish(
                    `PASSWORD_REQUEST_EMAIL_${emailStatus}`,
                    {
                      passwordRequestEmailCompleted: result,
                    }
                  );
                } catch (error) {
                  console.log(
                    'Error during email sending. Failed to update hashed_password_reset_token:',
                    error
                  );
                  context.pubSub.publish(
                    `PASSWORD_REQUEST_EMAIL_${emailStatus}`,
                    {
                      passwordRequestEmailCompleted: null,
                    }
                  );
                }
              }
            );
          } catch (error) {
            console.log(
              'Error occured before sending email to user for password reset request',
              error
            );
            context.pubSub.publish('PASSWORD_REQUEST_EMAIL_FAILED', {
              passwordRequestEmailCompleted: null,
            });
          }
        }
      }

      return userResult;
    },
  },
};

export {
  deleteUserInvitationMiddleware,
  sendInvitationEmailMiddleware,
  sendPasswordResetEmailMiddleware,
};
