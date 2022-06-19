import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createIndicator,
  deleteIndicator,
  getDisaggregate,
  getIndicator,
  // getDisaggregateOptionSetReports,
  getIndicators,
  getIndicatorUnit,
  // getReportsForIndicator,
  getReportType,
  updateIndicator,
} from "../queries";

const typeDefs = gql`
  type Indicator {
    id: ID!
    indicator_number: String!
    description: String!
    category: String!
    report_type_id: String!
    report_type: ReportTypeResult
    indicator_unit_id: String!
    indicator_unit: IndicatorUnitResult
    disaggregate_id: String!
    disaggregate: DisaggregateResult
    disaggregate_option_set_reports: [DisaggregateOptionSetReport!]
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
    report_type_id: String!
    indicator_unit_id: String!
    disaggregate_id: String!
  }

  input UpdateIndicatorInput {
    id: ID!
    update: IndicatorUpdateInput!
  }

  input IndicatorUpdateInput {
    indicator_number: String
    description: String
    category: String
    report_type_id: String
    indicator_unit_id: String
    disaggregate_id: String
  }

  input DeleteIndicatorInput {
    id: ID!
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
    report_type: (parent, _args, context) =>
      getReportType({ id: parent.report_type_id }, context),
    disaggregate: (parent, _args, context) =>
      getDisaggregate({ id: parent.disaggregate_id }, context),
    indicator_unit: (parent, _args, context) =>
      getIndicatorUnit({ id: parent.indicator_unit_id }, context),
    // disaggregate_option_set_reports: (parent, _args, context) =>
    //   getReportsForIndicator(parent.id, context),
  },
};

export { typeDefs as IndicatorTypeDefs, resolvers as IndicatorResolvers };
