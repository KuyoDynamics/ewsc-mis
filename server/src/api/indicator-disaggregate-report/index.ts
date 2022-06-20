import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import { getIndicatorDisaggregate, getReport } from "../queries";
import {
  createIndicatorDisaggregateReport,
  deleteIndicatorDisaggregateReport,
  getIndicatorDisaggregateReport,
  getIndicatorDisaggregateReports,
  updateIndicatorDisaggregateReport,
} from "./queries";

const typeDefs = gql`
  type IndicatorDisaggregateReport {
    id: ID!
    target: Float
    achieved: Float!
    comment: String

    report_id: String!
    report: ReportResult

    indicator_disaggregate_id: String!
    indicator_disaggregate: IndicatorDisaggregateResult

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    indicator_disaggregate_reports(
      report_id: ID!
    ): [IndicatorDisaggregateReport!]
    indicator_disaggregate_report(id: ID!): IndicatorDisaggregateReportResult!
  }

  extend type Mutation {
    createIndicatorDisaggregateReport(
      input: CreateIndicatorDisaggregateReportInput!
    ): IndicatorDisaggregateReportResult!
    updateIndicatorDisaggregateReport(
      input: UpdateIndicatorDisaggregateReportInput!
    ): IndicatorDisaggregateReportResult!
    deleteIndicatorDisaggregateReport(
      input: DeleteIndicatorDisaggregateReportInput!
    ): IndicatorDisaggregateReportResult!
  }

  input CreateIndicatorDisaggregateReportInput {
    report_id: String!
    indicator_disaggregate_id: String!
    target: Float
    achieved: Float!
    comment: String
  }

  input UpdateIndicatorDisaggregateReportInput {
    id: ID!
    update: IndicatorDisaggregateReportUpdateInput!
  }

  input IndicatorDisaggregateReportUpdateInput {
    target: Float
    achieved: Float!
    comment: String
  }

  input DeleteIndicatorDisaggregateReportInput {
    id: ID!
  }

  union IndicatorDisaggregateReportResult =
      IndicatorDisaggregateReport
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  Query: {
    indicator_disaggregate_reports: (_, args, context) =>
      getIndicatorDisaggregateReports(args, context),
    indicator_disaggregate_report: (_, args, context) =>
      getIndicatorDisaggregateReport(args, context),
  },
  Mutation: {
    createIndicatorDisaggregateReport: (_, args, context) =>
      createIndicatorDisaggregateReport(args, context),
    updateIndicatorDisaggregateReport: (_, args, context) =>
      updateIndicatorDisaggregateReport(args, context),
    deleteIndicatorDisaggregateReport: (_, args, context) =>
      deleteIndicatorDisaggregateReport(args, context),
  },
  IndicatorDisaggregateReport: {
    indicator_disaggregate: (parent, _args, context) =>
      getIndicatorDisaggregate(
        { id: parent.indicator_disaggregate_id },
        context
      ),
    report: (parent, _args, context) => getReport({ id: parent.id }, context),
  },
};

export {
  typeDefs as IndicatorDisaggregateReportTypeDefs,
  resolvers as IndicatorDisaggregateReportResolvers,
};
