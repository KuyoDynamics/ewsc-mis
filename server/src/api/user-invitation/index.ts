import { gql } from 'apollo-server-express';
import { Resolvers } from '../../libs/resolvers-types';
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
    email_addresses: [EmailAddress!]!
    organisation_id: String!
    catchment_district_ids: [String!]
    invitation_token: String!
  }

  extend type Query {
    user_invitations(args: SearchUserInvitationsInput!): [UserInvitation!]
    user_invitation(id: ID!): UserInvitationResult!
  }

  extend type Mutation {
    createUserInvitation(
      input: CreateUserInvitationInput!
    ): UserInvitationResult!
    deleteUserInvitation(
      input: DeleteUserInvitationInput!
    ): UserInvitationResult!
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

  union UserInvitationResult =
      UserInvitation
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
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
