import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createReport,
  deleteReport,
  getReport,
  getReports,
  updateReport,
  getCatchmentDistrict,
  getIndicatorDisaggregateReports,
  getOrganisationReportTemplate,
} from "../queries";

const typeDefs = gql`
  type Report {
    id: ID!
    reporting_period: String!
    reporting_period_start_date: DateTime!
    reporting_period_end_date: DateTime!
    report_due_date: DateTime!
    reporting_date: DateTime!

    organisation_report_template_id: String!
    organisation_report_template: OrganisationReportTemplateResult

    catchment_district_id: String!
    catchment_district: CatchmentDistrictResult

    indicator_disaggregate_reports: [IndicatorDisaggregateReport!]
    # report_approvals: [ReportApproval!]

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    reports: [Report!]
    report(id: ID!): ReportResult!
  }

  extend type Mutation {
    createReport(input: CreateReportInput!): ReportResult!
    updateReport(input: UpdateReportInput!): ReportResult!
    deleteReport(input: DeleteReportInput!): ReportResult!
  }

  input CreateReportInput {
    reporting_period: String!
    reporting_period_start_date: DateTime!
    reporting_period_end_date: DateTime!
    report_due_date: DateTime!
    reporting_date: DateTime!
    organisation_report_template_id: String!
    catchment_district_id: String!
  }

  input UpdateReportInput {
    id: ID!
    update: ReportUpdateInput!
  }

  input ReportUpdateInput {
    reporting_period_start_date: DateTime!
    reporting_period_end_date: DateTime!
    report_due_date: DateTime!
  }

  input DeleteReportInput {
    id: ID!
  }

  union ReportResult =
      Report
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  Query: {
    report: (_, args, context) => getReport(args, context),
    reports: (_, _args, context) => getReports(context),
  },
  Mutation: {
    createReport: (_, args, context) => createReport(args, context),
    updateReport: (_, args, context) => updateReport(args, context),
    deleteReport: (_, args, context) => deleteReport(args, context),
  },
  Report: {
    organisation_report_template: (parent, _args, context) =>
      getOrganisationReportTemplate(
        { id: parent.organisation_report_template_id },
        context
      ),
    catchment_district: (parent, _args, context) =>
      getCatchmentDistrict(parent.catchment_district_id, context),
    indicator_disaggregate_reports: (parent, _args, context) =>
      getIndicatorDisaggregateReports({ report_id: parent.id }, context),
  },
};

export { typeDefs as ReportTypeDefs, resolvers as ReportResolvers };
