import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import { getOrganisationUser } from "../organisation-user/queries";
import { getCatchmentDistrictById } from "../queries";
import {
  createDistrictUser,
  deleteDistrictUser,
  getDistrictUser,
  getDistrictUsers,
} from "./queries";
const typeDefs = gql`
  type DistrictUser {
    id: ID!
    organisation_user_id: ID!
    organisation_user: OrganisationUser
    catchment_district_id: ID!
    catchment_district: CatchmentDistrict
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    district_users(catchment_district_id: ID!): [DistrictUser!]
    district_user(district_user_id: ID!): DistrictUser
  }

  extend type Mutation {
    createDistrictUser(
      input: CreateDistrictUserInput!
    ): CreateDistrictUserPayload
    deleteDistrictUser(
      input: DeleteDistrictUserInput!
    ): DeleteDistrictUserPayload
  }

  input CreateDistrictUserInput {
    organisation_user_id: ID!
    catchment_district_id: ID!
  }

  type CreateDistrictUserPayload {
    district_user: DistrictUser
  }

  input DeleteDistrictUserInput {
    id: ID!
  }

  type DeleteDistrictUserPayload {
    district_user: DistrictUser
  }

  scalar DateTime
`;

const resolvers: Resolvers = {
  Query: {
    district_users: (_, args, context) => getDistrictUsers(args, context),
    district_user: (_, args, context) => getDistrictUser(args, context),
  },
  DistrictUser: {
    organisation_user: (parent, _args, context) =>
      getOrganisationUser(
        { organisation_user_id: parent.organisation_user_id },
        context
      ),
    catchment_district: (parent, _args, context) =>
      getCatchmentDistrictById(parent.catchment_district_id, context),
  },
  Mutation: {
    createDistrictUser: (_, args, context) => createDistrictUser(args, context),
    deleteDistrictUser: (_, args, context) => deleteDistrictUser(args, context),
  },
};

export { typeDefs as DistrictUserTypeDefs, resolvers as DistrictUserResolvers };
