import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createUserInvitation,
  deleteUserInvitation,
  getUserInvitation,
  getUserInvitations,
} from "./queries";

const typeDefs = gql`
  type UserInvitation {
    id: ID!
    ttl: DateTime!
    email: String!
    organisation_id: String!
    district_ids: [String!]
    invitation_token: String!
  }

  extend type Query {
    user_invitations(args: UserInvitationsArgsInput!): [UserInvitation!]
    user_invitation(id: ID!): UserInvitation
  }

  extend type Mutation {
    createUserInvitation(
      input: CreateUserInvitationInput!
    ): CreateUserInvitationPayload
    deleteUserInvitation(
      input: DeleteUserInvitationInput!
    ): DeleteUserInvitationPayload
  }

  input DeleteUserInvitationInput {
    id: String!
  }

  type DeleteUserInvitationPayload {
    user_invitation: UserInvitation
  }

  input UserInvitationsArgsInput {
    email: String
    organisation_id: String
    district_ids: [String!]
  }

  input CreateUserInvitationInput {
    email: String!
    organisation_id: String!
    district_ids: [String!]!
  }

  type CreateUserInvitationPayload {
    user_invitation: UserInvitation
  }

  scalar DateTime
`;

const resolvers: Resolvers = {
  Query: {
    user_invitations: (_, args, context) => getUserInvitations(args, context),
    user_invitation: (_, args, context) => getUserInvitation(args, context),
  },
  Mutation: {
    createUserInvitation: (_, args, context) =>
      createUserInvitation(args, context),
    deleteUserInvitation: (_, args, context) =>
      deleteUserInvitation(args, context),
  },
};

export {
  typeDefs as UserInvitationTypeDefs,
  resolvers as UserInvitationResolvers,
};
