import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import {
  MutationCreateUserInvitationArgs,
  MutationDeleteUserInvitationArgs,
  QueryUser_InvitationArgs,
  QueryUser_InvitationsArgs,
  UserInvitation,
  UserInvitationResult,
} from '../../libs/resolvers-types';
import { GraphQLContext, addDays, generateClientErrors } from '../../utils';

async function createUserInvitation(
  args: MutationCreateUserInvitationArgs,
  context: GraphQLContext
): Promise<UserInvitationResult> {
  try {
    const id = uuidv4();
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
        });

      if (disabled_catchment_districts) {
        return {
          __typename: 'ApiCreateError',
          message: `Failed to create UserInvitation because the following catchment districts are disabled.${catchment_districts.map(
            (item) => item.catchment_district_id
          )}`,
        };
      }
    }

    const invitation_token = jwt.sign(
      {
        emails: email_addresses,
        organisation_role: organisation_role,
        catchment_districts: catchment_districts,
      },
      process.env.JWT_SECRET!,
      {
        issuer: context.user.email,
        audience: organisation_id,
        subject: organisation_id,
        jwtid: id,
        expiresIn: '2s',
      }
    );

    const user_invitation = await context.prisma.userInvitation.create({
      data: {
        id,
        organisation_id,
        catchment_district_ids: catchment_districts?.map(
          (item) => item.catchment_district_id
        ),
        email_addresses,
        ttl,
        invitation_token,
      },
    });

    return {
      __typename: 'UserInvitation',
      ...user_invitation,
    };
  } catch (error) {
    return {
      __typename: 'ApiCreateError',
      message: `Failed to create UserInvitation.`,
      errors: generateClientErrors(error),
    };
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
      ...user_invitation,
    };
  } catch (error) {
    return {
      __typename: 'ApiDeleteError',
      message: `Failed to delete User with id ${args.input.id}.`,
      errors: generateClientErrors(error, 'id'),
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
        email_addresses: email_addresses
          ? {
              hasEvery: email_addresses,
            }
          : undefined,
        organisation_id: organisation_id,
      },
    },
  });
  return user_invitations;
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
      ...user_invitation,
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
};
