import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createOrganisationReportTemplate,
  createOrganisationReportTemplates,
  deleteOrganisationReportTemplate,
  getOrganisation,
  getOrganisationReportTemplate,
  getOrganisationReportTemplates,
  getReportsByOrganisationReportTemplate,
  getReportTemplate,
} from "../queries";

const typeDefs = gql`
  type OrganisationReportTemplate {
    id: ID!

    report_template_id: String!
    report_template: ReportTemplateResult

    organisation_id: ID!
    organisation: OrganisationResult

    reports: [Report!]

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  type OrganisationReportTemplateView{
    id: ID!
    name: String!
    type: IndicatorType!
    frequency: ReportingFrequency!
    window: Int!
    icon: Byte

    indicators: [Indicator!]
   
    organisation_id: ID!
    organisation: Organisation

    reports: [Report!]

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    organisation_report_templates(
      organisation_id: ID!
    ): [OrganisationReportTemplate!]
    organisation_report_template(id: ID!): OrganisationReportTemplateResult!
  }

  extend type Mutation {
    createOrganisationReportTemplate(
      input: CreateOrganisationReportTemplateInput!
    ): OrganisationReportTemplateResult!
    createOrganisationReportTemplates(
      input: CreateOrganisationReportTemplatesInput!
    ): ApiBatchPayloadResult!
    deleteOrganisationReportTemplate(
      input: DeleteOrganisationReportTemplateInput!
    ): OrganisationReportTemplateResult!
  }

  input CreateOrganisationReportTemplatesInput {
    organisation_id: ID!
    report_template_ids: [ID!]!
  }

  input CreateOrganisationReportTemplateInput {
    report_template_id: String!
    organisation_id: ID!
  }

  input DeleteOrganisationReportTemplateInput {
    id: ID!
  }

  union OrganisationReportTemplateResult =
      OrganisationReportTemplate
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  Query: {
    organisation_report_templates: (_, args, context) =>
      getOrganisationReportTemplates(args, context),
    organisation_report_template: (_, args, context) =>
      getOrganisationReportTemplate(args, context),
  },
  Mutation: {
    createOrganisationReportTemplate: (_, args, context) =>
      createOrganisationReportTemplate(args, context),
    createOrganisationReportTemplates: (_, args, context) =>
      createOrganisationReportTemplates(args, context),
    deleteOrganisationReportTemplate: (_, args, context) =>
      deleteOrganisationReportTemplate(args, context),
  },
  OrganisationReportTemplate: {
    report_template: (parent, _args, context) =>
      getReportTemplate({ id: parent.report_template_id }, context),
    organisation: (parent, _args, context) =>
      getOrganisation(parent.organisation_id, context),
    reports: (parent, _args, context) =>
      getReportsByOrganisationReportTemplate(parent.id, context),
  },
};

export {
  typeDefs as OrganisationReportTemplateTypeDefs,
  resolvers as OrganisationReportTemplateResolvers,
};
