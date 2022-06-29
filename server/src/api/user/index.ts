import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import { getDefaultUserOrganisation } from "../queries";
import {
  createInvitedUser,
  createUser,
  deleteUser,
  disableUser,
  getDefaultUserDistrict,
  getUser,
  getUserDistricts,
  getUserOrganisations,
  getUsers,
  login,
  requestPasswordReset,
  resetPassword,
  updateUser,
} from "./queries";
// User View
// has_many(:project_users, OpenFn.ProjectUser)
// has_many(:projects, through: [:project_users, :project])
// field(:master_support, :boolean)

// ProjectUser View
// id: project_user.id,
// user: render_one(project_user.user, UserView, "collaborator.json"),
// project_id: project_user.project_id,
// role: project_user.role
const typeDefs = gql`
  type User {
    id: String!
    first_name: String!
    last_name: String!
    email: String!
    disabled: Boolean!
    master_support: Boolean!
    user_organisations: [OrganisationUser!]
    user_districts: [District!]
    hashed_confirmation_token: String
    confirmed_at: DateTime
    hashed_password_reset_token: String
    last_login: DateTime
    theme: UserTheme
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  type OrganisationUserProfile {
    organisation_user_id: ID!
    user: UserResult!
    organisation: OrganisationResult!
    default_district: DistrictResult!
    organisation_roles: [String!]!
    district_roles: [String!]!
  }
  # NOTES and TODO:
  # 1. Should we be able to resolve profile given a user or given a selected organisation?
  # -
  # 2. Should the UserProfile include roles per organisation?
  # - Yes, organisation roles and create a view for OrganisationUser
  # 3. Should the UserProfile include roles per district?
  # 4. Yes, please

  extend type Query {
    users: [User!]
    user(id: ID!): UserResult!
    me: UserResult!
    default_user_district(
      user_id: ID!
      organisation_user_id: ID!
    ): DistrictResult!
    default_user_organisation(user_id: ID!): OrganisationResult!
  }

  extend type Mutation {
    createUser(input: CreateUserInput!): UserResult!
    createInvitedUser(input: CreateInvitedUserInput!): UserResult!
    deleteUser(input: DeleteUserInput!): UserResult!
    disableUser(input: DisableUserInput!): UserResult!
    updateUser(input: UpdateUserInput!): UserResult!
    login(input: LoginInput!): LoginResult!
    requestPasswordReset(
      input: PasswordResetRequestInput!
    ): PasswordResetRequestResult!
    resetPassword(input: PasswordResetInput!): PasswordResetResult!
  }

  input PasswordResetInput {
    hashed_password_reset_token: String!
    password: String!
  }

  input PasswordResetRequestInput {
    email: EmailAddress!
  }

  type PasswordResetRequestPayload {
    hashed_password_reset_token: String!
  }

  input LoginInput {
    email: EmailAddress!
    password: String!
  }

  type LoginSuccess {
    accessToken: JWT!
    id: ID!
  }

  input CreateInvitedUserInput {
    user_invitation_id: ID!
    organisation_id: ID!
    catchment_districts: [CatchmentDistrictInput!]!
    user_details: CreateUserInput!
  }

  input CatchmentDistrictInput {
    catchment_district_id: ID!
    role: UserRoleType!
  }

  # when creating a user, we do not give them any roles until they create an organisation in which case they
  # are given a role of owner
  input CreateUserInput {
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }

  input DeleteUserInput {
    id: ID!
  }

  input DisableUserInput {
    id: ID!
    update: UserDisableInput!
  }

  input UserDisableInput {
    disabled: Boolean!
  }

  input UpdateUserInput {
    id: ID!
    update: UserUpdateInput!
  }

  input UserUpdateInput {
    first_name: String
    last_name: String
    theme: UserTheme
  }

  enum UserRoleType {
    SUPPORT
    ADMIN
    APPROVER
    DATA_ENTRY
    USER
    OWNER
  }

  enum UserTheme {
    DARK
    LIGHT
  }

  union UserResult =
      User
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError

  union LoginResult = LoginSuccess | ApiLoginError

  union PasswordResetRequestResult =
      PasswordResetRequestPayload
    | ApiPasswordResetError

  union PasswordResetResult = User | ApiPasswordResetError
`;

const resolvers: Resolvers = {
  User: {
    user_organisations: (parent, _args, context) =>
      getUserOrganisations(parent.id, context),
    user_districts: (parent, _args, context) =>
      getUserDistricts(parent.id, context),
  },
  Query: {
    users: (_, _args, context) => getUsers(context),
    user: (_, args, context) => getUser(args, context),
    me: (_, _args, context) => getUser({ id: context.user?.id }, context),
    default_user_district: (_, args, context) =>
      getDefaultUserDistrict(args, context),
    default_user_organisation: (_, args, context) =>
      getDefaultUserOrganisation(args.user_id, context),
  },
  Mutation: {
    createUser: (_, args, context) => createUser(args, context),
    createInvitedUser: (_, args, context) => createInvitedUser(args, context),
    deleteUser: (_, args, context) => deleteUser(args, context),
    disableUser: (_, args, context) => disableUser(args, context),
    updateUser: (_, args, context) => updateUser(args, context),
    login: (_, args, context) => login(args, context),
    requestPasswordReset: (_, args, context) =>
      requestPasswordReset(args, context),
    resetPassword: (_, args, context) => resetPassword(args, context),
  },
};

export { typeDefs as UserTypeDefs, resolvers as UserResolvers };
