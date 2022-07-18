import { gql } from 'apollo-server-express';
import { Resolvers } from '../../libs/resolvers-types';
import {
  createOrganisationUser,
  deleteOrganisationUser,
  getOrganisationUser,
  getOrganisationUsers,
  updateOrganisationUser,
  getOrganisation,
  getUser,
} from '../queries';
const typeDefs = gql`
  type OrganisationUser {
    id: ID!
    user_id: String!
    user: UserResult
    organisation_id: String!
    organisation: OrganisationResult
    is_default_organisation: Boolean!
    default_district: DistrictResult
    role: OrganisationUserRoleType!
    district_roles: [String!]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  type OrganisationUserView {
    id: String!
    first_name: String!
    last_name: String!
    email: String!
    disabled: Boolean!
    master_support: Boolean!
    organisation_id: String!
    organisation: UserOrganisation
    organisation_user_id: String!
    role: OrganisationUserRoleType!
    user_organisations: [UserOrganisation!]
    user_districts: [UserDistrict!]
    hashed_confirmation_token: String
    confirmed_at: DateTime
    hashed_password_reset_token: String
    last_login: DateTime
    theme: UserTheme!
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    organisation_users(organisation_id: ID!): [OrganisationUser!]
    organisation_user(organisation_user_id: ID!): OrganisationUserResult!
  }

  extend type Mutation {
    createOrganisationUser(
      input: CreateOrganisationUserInput!
    ): OrganisationUserResult!
    updateOrganisationUser(
      input: UpdateOrganisationUserInput!
    ): OrganisationUserResult!
    setUserDefaultProject(organisation_user_id: ID!): OrganisationUserResult!
    deleteOrganisationUser(
      input: DeleteOrganisationUserInput!
    ): OrganisationUserResult!
  }

  input CreateOrganisationUserInput {
    role: OrganisationUserRoleType!
    user_id: ID!
    organisation_id: ID!
    is_default_organisation: Boolean!
  }

  input UpdateOrganisationUserInput {
    id: ID!
    update: OrganisationUserUpdateInput!
  }

  input OrganisationUserUpdateInput {
    role: OrganisationUserRoleType!
  }

  input DeleteOrganisationUserInput {
    id: ID!
  }

  union OrganisationUserResult =
      OrganisationUser
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  OrganisationUser: {
    user: (parent, _args, context) => getUser({ id: parent.user_id }, context),
    organisation: (parent, _args, context) =>
      getOrganisation(parent.organisation_id, context),
  },
  Query: {
    organisation_users: (_, args, context) =>
      getOrganisationUsers(args, context),
    organisation_user: (_, args, context) => getOrganisationUser(args, context),
  },
  Mutation: {
    createOrganisationUser: (_, args, context) =>
      createOrganisationUser(args, context),
    updateOrganisationUser: (_, args, context) =>
      updateOrganisationUser(args, context),
    deleteOrganisationUser: (_, args, context) =>
      deleteOrganisationUser(args, context),
  },
};

export {
  typeDefs as OrganisationUserTypeDefs,
  resolvers as OrganisationUserResolvers,
};
