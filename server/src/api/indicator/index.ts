import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createIndicator,
  deleteIndicator,
  getIndicator,
  getIndicators,
  updateIndicator,
  getIndicatorUnit,
  getReportTemplate,
  getIndicatorOrganisations,
} from "../queries";

const typeDefs = gql`
  type Indicator {
    id: ID!
    indicator_number: String!
    description: String!
    category: String!
    type: IndicatorType!
    contributing_organisation: String!

    report_template_id: String!
    report_template: ReportTemplateResult

    indicator_unit_id: String!
    indicator_unit: IndicatorUnitResult

    indicator_organisations: [OrganisationIndicator!]

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    indicators: [Indicator!]
    indicator(id: ID!): IndicatorResult!
  }

  extend type Mutation {
    createIndicator(input: CreateIndicatorInput!): IndicatorResult!
    updateIndicator(input: UpdateIndicatorInput!): IndicatorResult!
    deleteIndicator(input: DeleteIndicatorInput!): IndicatorResult!
  }

  input CreateIndicatorInput {
    indicator_number: String!
    description: String!
    category: String!
    type: IndicatorType!
    indicator_unit_id: String!
    report_template_id: String!
  }

  input UpdateIndicatorInput {
    id: ID!
    update: IndicatorUpdateInput!
  }

  input IndicatorUpdateInput {
    indicator_number: String
    description: String
    category: String
    type: IndicatorType
    indicator_unit_id: String
    report_template_id: String
  }

  input DeleteIndicatorInput {
    id: ID!
  }

  enum IndicatorType {
    CUSTOM
    NIS
  }

  union IndicatorResult =
      Indicator
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  Query: {
    indicator: (_, args, context) => getIndicator(args, context),
    indicators: (_, _args, context) => getIndicators(context),
  },
  Mutation: {
    createIndicator: (_, args, context) => createIndicator(args, context),
    updateIndicator: (_, args, context) => updateIndicator(args, context),
    deleteIndicator: (_, args, context) => deleteIndicator(args, context),
  },
  Indicator: {
    report_template: (parent, _args, context) =>
      getReportTemplate({ id: parent.report_template_id }, context),

    indicator_unit: (parent, _args, context) =>
      getIndicatorUnit({ id: parent.indicator_unit_id }, context),

    indicator_organisations: (parent, _args, context) =>
      getIndicatorOrganisations(parent.id, context),
  },
};

export { typeDefs as IndicatorTypeDefs, resolvers as IndicatorResolvers };
