import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { GraphQLContext } from "../..";
import {
  CreateUserInvitationPayload,
  DeleteUserInvitationPayload,
  MutationCreateUserInvitationArgs,
  MutationDeleteUserInvitationArgs,
  QueryUser_InvitationArgs,
  QueryUser_InvitationsArgs,
  UserInvitation,
} from "../../libs/resolvers-types";
import { addDays } from "../../utils";

async function createUserInvitation(
  args: MutationCreateUserInvitationArgs,
  context: GraphQLContext
): Promise<CreateUserInvitationPayload> {
  const id = uuidv4();
  const ttl = addDays(new Date(), 5);

  const invitation_data = {
    email: args.input.email,
    organisation_id: args.input.organisation_id,
    district_ids: args.input.district_ids,
    id,
  };

  const invitation_token = jwt.sign(
    {
      data: "user_invitation",
    },
    process.env.JWT_SECRET!,
    {
      issuer: invitation_data.organisation_id,
      audience: invitation_data.district_ids,
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

  return { user_invitation };
}

async function deleteUserInvitation(
  args: MutationDeleteUserInvitationArgs,
  context: GraphQLContext
): Promise<DeleteUserInvitationPayload> {
  const user_invitation = await context.prisma.userInvitation.delete({
    where: {
      ...args.input,
    },
  });

  return { user_invitation };
}

async function getUserInvitations(
  args: QueryUser_InvitationsArgs,
  context: GraphQLContext
): Promise<UserInvitation[]> {
  const { district_ids, email, organisation_id } = args.args;

  const user_invitations = await context.prisma.userInvitation.findMany({
    where: {
      AND: {
        district_ids: district_ids
          ? {
              hasEvery: district_ids,
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
): Promise<UserInvitation | null> {
  const user_invitation = await context.prisma.userInvitation.findUnique({
    where: {
      id: args.id,
    },
  });

  return user_invitation;
}

export {
  createUserInvitation,
  deleteUserInvitation,
  getUserInvitations,
  getUserInvitation,
};
