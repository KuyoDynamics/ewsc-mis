import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import {
  EmailStatus,
  MutationCreateUserInvitationArgs,
  MutationDeleteUserInvitationArgs,
  MutationSendUserInvitationEmailArgs,
  QueryUser_InvitationArgs,
  QueryUser_InvitationsArgs,
  UserInvitation,
  UserInvitationResult,
} from '../../libs/resolvers-types';
import { GraphQLContext, addDays, generateClientErrors } from '../../utils';
import { AuthenticationError } from 'apollo-server-core';
import { sendInvitation } from '../../mailer';

async function createUserInvitation(
  args: MutationCreateUserInvitationArgs,
  context: GraphQLContext
): Promise<UserInvitationResult[]> {
  try {
    const ttl = addDays(new Date(), 5);

    const {
      catchment_districts,
      organisation_id,
      organisation_role,
      email_addresses,
    } = args.input;

    if (catchment_districts) {
      const disabled_catchment_districts =
        await context.prisma.catchmentDistrict.findMany({
          where: {
            AND: {
              id: {
                in: catchment_districts.map(
                  (item) => item.catchment_district_id
                ),
              },
              disabled: true,
            },
          },
          include: {
            district: {
              select: {
                name: true,
              },
            },
          },
        });

      if (disabled_catchment_districts?.length > 0) {
        return disabled_catchment_districts.map((item) => ({
          __typename: 'ApiCreateError',
          message: `Catchment District ${item.district.name} is disabled`,
          field: 'catchment_districts',
          value: item.id,
        }));
      }
    }

    const existing_invitations = await context.prisma.$transaction(
      email_addresses.map((email) =>
        context.prisma.userInvitation.findFirst({
          where: {
            AND: {
              email,
              organisation_id,
            },
          },
          select: {
            email: true,
          },
        })
      )
    );

    const duplicate_emails = existing_invitations
      ?.map((invite) => invite?.email)
      .filter((email) => email_addresses.indexOf(email) > -1);

    if (duplicate_emails?.length > 0) {
      return duplicate_emails.map((email) => ({
        __typename: 'ApiCreateError',
        message: `${email} has already been invited to this organisation`,
        field: 'email_addresses',
        value: email,
      }));
    }

    const invitation_tokens = email_addresses.map((email) => {
      const id = uuidv4();
      return {
        email_status: EmailStatus.Pending,
        id,
        organisation_id,
        catchment_district_ids: catchment_districts?.map(
          (item) => item.catchment_district_id
        ),
        email,
        ttl,
        invitation_token: jwt.sign(
          {
            email,
            organisation_role: organisation_role,
            catchment_districts: catchment_districts,
          },
          process.env.JWT_SECRET!,
          {
            issuer: context.user.email,
            audience: organisation_id,
            subject: organisation_id,
            jwtid: id,
            expiresIn: '5 days',
          }
        ),
      };
    });

    const user_invitations = await Promise.allSettled(
      invitation_tokens.map((data) =>
        context.prisma.userInvitation.create({
          data,
        })
      )
    );

    return user_invitations.map((result, index) => {
      if (result.status === 'fulfilled') {
        return {
          __typename: 'UserInvitation',
          ...(result.value as UserInvitation),
        };
      }
      return {
        __typename: 'ApiCreateError',
        message: result.reason,
        field: 'email_addresses',
        value: invitation_tokens[index].email,
      };
    });
  } catch (error) {
    return [
      {
        __typename: 'ApiCreateError',
        message: `Failed to create UserInvitation.`,
        errors: generateClientErrors(error),
      },
    ];
  }
}

async function deleteUserInvitation(
  args: MutationDeleteUserInvitationArgs,
  context: GraphQLContext
): Promise<UserInvitationResult> {
  try {
    const user_invitation = await context.prisma.userInvitation.delete({
      where: {
        ...args.input,
      },
    });
    return {
      __typename: 'UserInvitation',
      ...(user_invitation as UserInvitation),
    };
  } catch (error) {
    return {
      __typename: 'ApiDeleteError',
      message: `Failed to delete User Invitation with id ${args.input.id}.`,
      errors: generateClientErrors(error, 'id'),
    };
  }
}

async function sendUserInvitationEmail(
  args: MutationSendUserInvitationEmailArgs,
  context: GraphQLContext
): Promise<UserInvitationResult> {
  try {
    const result = await context.prisma.userInvitation.update({
      where: {
        id: args.input.invitation_id,
      },
      data: {
        email_status: EmailStatus.Pending,
      },
    });

    if (!result) throw new AuthenticationError('Invalid user invitation.');

    sendInvitation(
      args.input.email,
      args.input.invitation_id,
      args.input.organisation_name,
      context
    );

    return {
      __typename: 'UserInvitation',
      ...result,
    } as UserInvitation;
  } catch (error) {
    return {
      __typename: 'ApiUpdateError',
      message: 'User Invitation Resend Failed.',
      errors: generateClientErrors(error, 'email'),
    };
  }
}

async function getUserInvitations(
  args: QueryUser_InvitationsArgs,
  context: GraphQLContext
): Promise<UserInvitation[]> {
  const { catchment_district_ids, email_addresses, organisation_id } =
    args.args;

  const user_invitations = await context.prisma.userInvitation.findMany({
    where: {
      AND: {
        catchment_district_ids: catchment_district_ids
          ? {
              hasEvery: catchment_district_ids,
            }
          : undefined,
        email: email_addresses
          ? {
              in: email_addresses,
            }
          : undefined,
        organisation_id: organisation_id,
      },
    },
  });
  return user_invitations as UserInvitation[];
}

async function getUserInvitation(
  args: QueryUser_InvitationArgs,
  context: GraphQLContext
): Promise<UserInvitationResult> {
  try {
    const user_invitation = await context.prisma.userInvitation.findUnique({
      where: {
        id: args.id,
      },
    });

    if (!user_invitation) {
      return {
        __typename: 'ApiNotFoundError',
        message: `The UserInvitation with the id ${args.id} does not exist.`,
      };
    }

    return {
      __typename: 'UserInvitation',
      ...(user_invitation as UserInvitation),
    };
  } catch (error) {
    return {
      __typename: 'ApiNotFoundError',
      message: `Failed to find UserInvitation with the id ${args.id}.`,
      errors: generateClientErrors(error),
    };
  }
}

export {
  createUserInvitation,
  deleteUserInvitation,
  getUserInvitations,
  getUserInvitation,
  sendUserInvitationEmail,
};
