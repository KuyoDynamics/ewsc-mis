import { gql } from 'apollo-server-express';
import { Resolvers } from '../../libs/resolvers-types';
import {
  createInvitedUser,
  createUser,
  deleteUser,
  disableUser,
  getUser,
  getUserOrganisations,
  getUsers,
  login,
  requestPasswordReset,
  resetPassword,
  updateUser,
  resolveCountry,
  resolveUserDefaultOrganisation,
  resolveUserDistricts,
  resolveProvince,
  resolveOrganisationUsers,
  resolveCatchmentProvinces,
} from '../queries';

const typeDefs = gql`
  type User {
    id: String!
    first_name: String!
    last_name: String!
    email: String!
    disabled: Boolean!
    master_support: Boolean!
    user_organisations: [UserOrganisation!]
    user_default_organisation: UserOrganisation
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

  type UserDistrict {
    id: ID!
    name: String!
    code: String!
    user_id: ID!
    user: User
    catchment_district_id: ID!
    organisation_id: ID!
    organisation: UserOrganisation
    is_default_user_district: Boolean!
    district_user_id: ID!
    disabled: Boolean!
    user_district_roles: [DistrictUserRoleType!]!
    province_id: String!
    province: Province
    service_areas: [ServiceArea!]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  type UserOrganisation {
    id: ID!
    name: String!
    logo: Byte
    user_id: ID!
    user: User
    is_user_default_organisation: Boolean!
    user_default_district: UserDistrict
    user_districts: [UserDistrict!]
    user_organisation_role: OrganisationUserRoleType!
    country_id: String!
    country: Country
    catchment_provinces: [CatchmentProvinceView!]
    users: [OrganisationUserView!]
    organisation_report_templates: [OrganisationReportTemplateView!]
    organisation_indicators: [OrganisationIndicatorView!]
    reports: [Report!]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    users: [User!]
    user(id: ID!): UserResult!
    me: UserResult!
    default_user_district(
      user_id: ID!
      organisation_user_id: ID!
    ): UserDistrictResult!
    default_user_organisation(user_id: ID!): UserOrganisationResult!
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
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }

  input CatchmentDistrictInput {
    catchment_district_id: ID!
    roles: [DistrictUserRoleType!]!
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

  enum OrganisationUserRoleType {
    SUPPORT
    OWNER
    ADMIN
    USER
  }

  enum DistrictUserRoleType {
    DISTRICT_MANAGER
    APPROVER
    DATA_ENTRY
    USER
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

  union UserOrganisationResult = UserOrganisation | ApiNotFoundError

  union UserDistrictResult = UserDistrict | ApiNotFoundError

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
    user_default_organisation: (parent, _args, context) =>
      resolveUserDefaultOrganisation(parent.id, context),
  },
  UserOrganisation: {
    country: (parent, _args, context) =>
      resolveCountry(parent.country_id, context),
    user_districts: (parent, _args, context) =>
      resolveUserDistricts(parent.user_id, parent.id, context),
    users: (parent, _args, context) =>
      resolveOrganisationUsers(parent.id, context),
    catchment_provinces: (parent, _args, context) =>
      resolveCatchmentProvinces(parent.id, context),
  },
  UserDistrict: {
    province: (parent, _args, context) =>
      resolveProvince(parent.province_id, context),
  },
  Query: {
    users: (_, _args, context) => getUsers(context),
    user: (_, args, context) => getUser(args, context),
    me: (_, _args, context) => getUser({ id: context.user?.id }, context),
    // default_user_district: (_, args, context) =>
    //   getDefaultUserDistrict(args, context),
    // default_user_organisation: (_, args, context) =>
    //   getDefaultUserOrganisation(args.user_id, context),
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
