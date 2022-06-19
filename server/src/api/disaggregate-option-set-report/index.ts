import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createDisaggregateOptionSetReport,
  deleteDisaggregateOptionSetReport,
  getDisaggregateOptionSetReport,
  updateDisaggregateOptionSetReport,
  getDisaggregateOptionSet,
  getReport,
} from "../queries";
import { getDisaggregateOptionSetReports } from "./queries";

const typeDefs = gql`
  type DisaggregateOptionSetReport {
    id: ID!
    target: Float
    achieved: Float!
    comment: String
    report_id: String!
    report: ReportResult
    disaggregate_option_set_id: String!
    disaggregate_option_set: DisaggregateOptionSetResult

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    disaggregate_option_set_reports(
      report_id: ID!
    ): [DisaggregateOptionSetReport!]
    disaggregate_option_set_report(id: ID!): DisaggregateOptionSetReportResult!
  }

  extend type Mutation {
    createDisaggregateOptionSetReport(
      input: CreateDisaggregateOptionSetReportInput!
    ): DisaggregateOptionSetReportResult!
    updateDisaggregateOptionSetReport(
      input: UpdateDisaggregateOptionSetReportInput!
    ): DisaggregateOptionSetReportResult!
    deleteDisaggregateOptionSetReport(
      input: DeleteDisaggregateOptionSetReportInput!
    ): DisaggregateOptionSetReportResult!
  }

  input CreateDisaggregateOptionSetReportInput {
    report_id: String!
    disaggregate_option_set_id: String!
    target: Float
    achieved: Float!
    comment: String
  }

  input UpdateDisaggregateOptionSetReportInput {
    id: ID!
    update: DisaggregateOptionSetReportUpdateInput!
  }

  input DisaggregateOptionSetReportUpdateInput {
    target: Float
    achieved: Float!
    comment: String
  }

  input DeleteDisaggregateOptionSetReportInput {
    id: ID!
  }

  union DisaggregateOptionSetReportResult =
      DisaggregateOptionSetReport
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  Query: {
    disaggregate_option_set_report: (_, args, context) =>
      getDisaggregateOptionSetReport(args, context),
    disaggregate_option_set_reports: (_, args, context) =>
      getDisaggregateOptionSetReports(args, context),
  },
  Mutation: {
    createDisaggregateOptionSetReport: (_, args, context) =>
      createDisaggregateOptionSetReport(args, context),
    updateDisaggregateOptionSetReport: (_, args, context) =>
      updateDisaggregateOptionSetReport(args, context),
    deleteDisaggregateOptionSetReport: (_, args, context) =>
      deleteDisaggregateOptionSetReport(args, context),
  },
  DisaggregateOptionSetReport: {
    disaggregate_option_set: (parent, _args, context) =>
      getDisaggregateOptionSet(
        { id: parent.disaggregate_option_set_id },
        context
      ),
    report: (parent, _args, context) => getReport({ id: parent.id }, context),
  },
};

export {
  typeDefs as DisaggregateOptionSetReportTypeDefs,
  resolvers as DisaggregateOptionSetReportResolvers,
};
