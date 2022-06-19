import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import // deleteDisaggregateOptionSet,
// getDisaggregateOption,
// getDisaggregateOptionSet,
// getAllDisaggregateOptionSets,
// createDisaggregateOptionSet,
// getDisaggregate,
// getReportsByDisaggregateOptionSet,
"../queries";

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

  extend type Query {
    organisation_report_templates: [OrganisationReportTemplate!]
    organisation_report_template(id: ID!): OrganisationReportTemplateResult!
  }

  extend type Mutation {
    createOrganisationReportTemplate(
      input: CreateOrganisationReportTemplateInput!
    ): ApiBatchPayloadResult!
    deleteOrganisationReportTemplate(
      input: DeleteOrganisationReportTemplateInput!
    ): OrganisationReportTemplateResult!
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
    // disaggregate_option_set: (_, args, context) =>
    //   getOrganisationReportTemplate(args, context),
    // disaggregate_option_sets: (_, _args, context) =>
    //   getAllOrganisationReportTemplates(context),
  },
  Mutation: {
    // createOrganisationReportTemplate: (_, args, context) =>
    //   createOrganisationReportTemplate(args, context),
    // deleteOrganisationReportTemplate: (_, args, context) =>
    //   deleteOrganisationReportTemplate(args, context),
  },
  OrganisationReportTemplate: {
    // disaggregate_option: (parent, _args, context) =>
    //   getDisaggregateOption({ id: parent.disaggregate_option_id }, context),
    // disaggregate: (parent, _args, context) =>
    //   getDisaggregate({ id: parent.disaggregate_id }, context),
    // disaggregate_option_set_reports: (parent, _args, context) =>
    //   getReportsByOrganisationReportTemplate(parent.id, context),
  },
};

export {
  typeDefs as OrganisationReportTemplateTypeDefs,
  resolvers as OrganisationReportTemplateResolvers,
};
