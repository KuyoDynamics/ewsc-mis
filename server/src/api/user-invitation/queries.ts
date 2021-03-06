import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import {
  MutationCreateUserInvitationArgs,
  MutationDeleteUserInvitationArgs,
  QueryUser_InvitationArgs,
  QueryUser_InvitationsArgs,
  UserInvitation,
  UserInvitationResult,
} from "../../libs/resolvers-types";
import { GraphQLContext, addDays, generateClientErrors } from "../../utils";

async function createUserInvitation(
  args: MutationCreateUserInvitationArgs,
  context: GraphQLContext
): Promise<UserInvitationResult> {
  try {
    const id = uuidv4();
    const ttl = addDays(new Date(), 5);

    const invitation_data = {
      email: args.input.email,
      organisation_id: args.input.organisation_id,
      invited_by: args.input.invited_by,
      catchment_districts: args.input.catchment_districts,
      id,
    };

    const disabled_catchment_districts =
      await context.prisma.catchmentDistrict.findMany({
        where: {
          AND: {
            id: {
              in: invitation_data.catchment_districts.map(
                (item) => item.catchment_district_id
              ),
            },
            disabled: true,
          },
        },
      });

    if (disabled_catchment_districts) {
      return {
        __typename: "ApiCreateError",
        message: `Failed to create UserInvitation because the following catchment districts are disabled.${invitation_data.catchment_districts.map(
          (item) => item.catchment_district_id
        )}`,
      };
    }

    const invitation_token = jwt.sign(
      {
        invited_by: invitation_data.invited_by,
      },
      process.env.JWT_SECRET!,
      {
        issuer: invitation_data.organisation_id,
        audience: invitation_data.catchment_districts.map(
          (item) => item.catchment_district_id
        ),
        subject: invitation_data.email,
        jwtid: invitation_data.id,
        expiresIn: "5 days",
      }
    );

    const requiredInput = {
      ...invitation_data,
      ttl,
      invitation_token,
    };

    const user_invitation = await context.prisma.userInvitation.create({
      data: requiredInput,
    });

    return {
      __typename: "UserInvitation",
      ...user_invitation,
    };
  } catch (error) {
    return {
      __typename: "ApiCreateError",
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
      __typename: "UserInvitation",
      ...user_invitation,
    };
  } catch (error) {
    return {
      __typename: "ApiDeleteError",
      message: `Failed to delete User with id ${args.input.id}.`,
      errors: generateClientErrors(error, "id"),
    };
  }
}

async function getUserInvitations(
  args: QueryUser_InvitationsArgs,
  context: GraphQLContext
): Promise<UserInvitation[]> {
  const { catchment_district_ids, email, organisation_id } = args.args;

  const user_invitations = await context.prisma.userInvitation.findMany({
    where: {
      AND: {
        catchment_district_ids: catchment_district_ids
          ? {
              hasEvery: catchment_district_ids,
            }
          : undefined,
        email: email || undefined,
        organisation_id: organisation_id || undefined,
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
        __typename: "ApiNotFoundError",
        message: `The UserInvitation with the id ${args.id} does not exist.`,
      };
    }

    return {
      __typename: "UserInvitation",
      ...user_invitation,
    };
  } catch (error) {
    return {
      __typename: "ApiNotFoundError",
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
