import { gql } from "apollo-server-express";
const typeDefs = gql`
  type OrganisationUser {
    id: ID!
    is_owner: Boolean!
    user_id: String!
    user: User
    organisation_id: String!
    organisation: Organisation
    district_users: [DistrictUser!]
    #   Separate these into their own table called UserInvitation
    invited_at: DateTime!
    invited_by: String!
    invitation_mode: UserInvitationMode
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  scalar DateTime
`;
