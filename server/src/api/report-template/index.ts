import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
// import {
//   createReportTemplate,
//   deleteReportTemplate,
//   getReportTemplate,
//   getReportTemplates,
//   updateReportTemplate,
// } from "../queries";

const typeDefs = gql`
  type ReportTemplate {
    id: ID!
    name: String!
    type: IndicatorType!
    frequency: ReportingFrequency!
    window: Int!

    indicators: [Indicator!]
    organisation_report_templates: [OrganisationReportTemplate!]

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    report_templates: [ReportTemplate!]
    report_template(id: ID!): ReportTemplateResult!
  }

  extend type Mutation {
    createReportTemplate(
      input: CreateReportTemplateInput!
    ): ReportTemplateResult!
    updateReportTemplate(
      input: UpdateReportTemplateInput!
    ): ReportTemplateResult!
    deleteReportTemplate(
      input: DeleteReportTemplateInput!
    ): ReportTemplateResult!
  }

  input CreateReportTemplateInput {
    name: String!
    type: IndicatorType!
    frequency: ReportingFrequency!
    window: Int!
  }

  input UpdateReportTemplateInput {
    id: ID!
    update: ReportTemplateUpdateInput!
  }

  input ReportTemplateUpdateInput {
    name: String!
    type: IndicatorType!
    frequency: ReportingFrequency!
    window: Int!
  }

  input DeleteReportTemplateInput {
    id: ID!
  }

  union ReportTemplateResult =
      ReportTemplate
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError

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
    // report_template: (_, args, context) => getReportTemplate(args, context),
    // report_templates: (_, _args, context) => getReportTemplates(context),
  },
  Mutation: {
    // createReportTemplate: (_, args, context) =>
    //   createReportTemplate(args, context),
    // updateReportTemplate: (_, args, context) =>
    //   updateReportTemplate(args, context),
    // deleteReportTemplate: (_, args, context) =>
    //   deleteReportTemplate(args, context),
  },
};

export {
  typeDefs as ReportTemplateTypeDefs,
  resolvers as ReportTemplateResolvers,
};
