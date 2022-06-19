import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createReportType,
  deleteReportType,
  getReportType,
  getReportTypes,
  updateReportType,
} from "../queries";

const typeDefs = gql`
  type ReportType {
    id: ID!
    type: ReportTypeOption!
    frequency: ReportingFrequency!
    window: Int!
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    report_types: [ReportType!]
    report_type(id: ID!): ReportTypeResult!
  }

  extend type Mutation {
    createReportType(input: CreateReportTypeInput!): ReportTypeResult!
    updateReportType(input: UpdateReportTypeInput!): ReportTypeResult!
    deleteReportType(input: DeleteReportTypeInput!): ReportTypeResult!
  }

  input CreateReportTypeInput {
    type: ReportTypeOption!
    frequency: ReportingFrequency!
    window: Int!
  }

  input UpdateReportTypeInput {
    id: ID!
    update: ReportTypeUpdateInput!
  }

  input ReportTypeUpdateInput {
    type: ReportTypeOption!
    frequency: ReportingFrequency!
    window: Int!
  }

  input DeleteReportTypeInput {
    id: ID!
  }

  union ReportTypeResult =
      ReportType
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError

  enum ReportTypeOption {
    PUBLIC_RELATIONS
    COMMERCIAL
    TECHNICAL
    PURCHASE_SUPPLY
    PERSONNEL
    FINANCE
    IT
    INVENTORY
  }

  enum ReportingFrequency {
    WEEKLY
    MONTHLY
    QUARTERLY
    BI_ANNUALY
    ANNUALLY
  }
`;

const resolvers: Resolvers = {
  Query: {
    report_type: (_, args, context) => getReportType(args, context),
    report_types: (_, _args, context) => getReportTypes(context),
  },
  Mutation: {
    createReportType: (_, args, context) => createReportType(args, context),
    updateReportType: (_, args, context) => updateReportType(args, context),
    deleteReportType: (_, args, context) => deleteReportType(args, context),
  },
};

export { typeDefs as ReportTypeTypeDefs, resolvers as ReportTypeResolvers };
