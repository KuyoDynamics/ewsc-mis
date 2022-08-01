import { gql } from 'apollo-server-express';
import { Resolvers } from '../../libs/resolvers-types';
import { sendInvitation } from '../../mailer';
import {
  createUserInvitation,
  deleteUserInvitation,
  getUserInvitation,
  getUserInvitations,
} from './queries';

const typeDefs = gql`
  type UserInvitation {
    id: ID!
    ttl: DateTime!
    email: EmailAddress!
    organisation_id: String!
    catchment_district_ids: [String!]
    invitation_token: String!
    email_status: EmailStatus!
  }

  extend type Query {
    user_invitations(args: SearchUserInvitationsInput!): [UserInvitation!]
    user_invitation(id: ID!): UserInvitationResult!
  }

  extend type Mutation {
    createUserInvitation(
      input: CreateUserInvitationInput!
    ): [UserInvitationResult!]!
    sendUserInvitationEmail(input: SendInvitationEmailInput!): Void
    deleteUserInvitation(
      input: DeleteUserInvitationInput!
    ): UserInvitationResult!
  }

  type Subscription {
    userInvitationUpdated: UserInvitation!
  }

  input DeleteUserInvitationInput {
    id: String!
  }

  input SearchUserInvitationsInput {
    email_addresses: [EmailAddress!]
    organisation_id: ID!
    catchment_district_ids: [ID!]
  }

  input CreateUserInvitationInput {
    email_addresses: [EmailAddress!]!
    organisation_id: ID!
    organisation_role: OrganisationUserRoleType!
    catchment_districts: [CreateUserInvitationCatchmentDistrictInput!]
  }

  input CreateUserInvitationCatchmentDistrictInput {
    catchment_district_id: ID!
    roles: [DistrictUserRoleType!]!
  }

  input SendInvitationEmailInput {
    email: String!
    invitation_id: String!
    organisation_name: String!
  }

  union UserInvitationResult =
      UserInvitation
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError

  enum EmailStatus {
    SENT
    REJECTED
    FAILED
    PENDING
  }
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
    sendUserInvitationEmail: (_, args, context) => {
      sendInvitation(
        args.input.email,
        args.input.invitation_id,
        args.input.organisation_name,
        context
      );
    },
  },
  Subscription: {
    userInvitationUpdated: {
      // Also apply withFilter to only subscribe to organisation user invitation updates
      //@ts-ignore
      subscribe: (_parent, _args, context) => {
        return context.pubSub.asyncIterator(['USER_INVITATION_UPDATED']);
      },
    },
  },
};

export {
  typeDefs as UserInvitationTypeDefs,
  resolvers as UserInvitationResolvers,
};
