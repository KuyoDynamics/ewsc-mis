import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createIndicatorDisaggregate,
  createIndicatorDisaggregates,
  deleteIndicatorDisaggregate,
  getDisaggregateOption,
  getIndicatorDisaggregate,
  getIndicatorDisaggregateReportsByIndicatorDisaggregateId,
  getIndicatorDisaggregates,
  getOrganisationIndicator,
} from "../queries";

const typeDefs = gql`
  type IndicatorDisaggregate {
    id: ID!

    organisation_indicator_id: String!
    organisation_indicator: OrganisationIndicatorResult

    disaggregate_option_id: ID!
    disaggregate_option: DisaggregateOptionResult

    indicator_disaggregate_reports: [IndicatorDisaggregateReport!]

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    indicator_disaggregates(
      organisation_indicator_id: ID!
    ): [IndicatorDisaggregate!]
    indicator_disaggregate(id: ID!): IndicatorDisaggregateResult!
  }

  extend type Mutation {
    createIndicatorDisaggregate(
      input: CreateIndicatorDisaggregateInput!
    ): IndicatorDisaggregateResult!
    createIndicatorDisaggregates(
      input: CreateIndicatorDisaggregatesInput!
    ): ApiBatchPayloadResult!
    deleteIndicatorDisaggregate(
      input: DeleteIndicatorDisaggregateInput!
    ): IndicatorDisaggregateResult!
  }

  input CreateIndicatorDisaggregatesInput {
    organisation_indicator_id: ID!
    disaggregate_option_ids: [ID!]!
  }

  input CreateIndicatorDisaggregateInput {
    organisation_indicator_id: ID!
    disaggregate_option_id: ID!
  }

  input DeleteIndicatorDisaggregateInput {
    id: ID!
  }

  union IndicatorDisaggregateResult =
      IndicatorDisaggregate
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  Query: {
    indicator_disaggregate: (_, args, context) =>
      getIndicatorDisaggregate(args, context),
    indicator_disaggregates: (_, args, context) =>
      getIndicatorDisaggregates(args, context),
  },
  Mutation: {
    createIndicatorDisaggregate: (_, args, context) =>
      createIndicatorDisaggregate(args, context),
    createIndicatorDisaggregates: (_, args, context) =>
      createIndicatorDisaggregates(args, context),
    deleteIndicatorDisaggregate: (_, args, context) =>
      deleteIndicatorDisaggregate(args, context),
  },
  IndicatorDisaggregate: {
    disaggregate_option: (parent, _args, context) =>
      getDisaggregateOption({ id: parent.disaggregate_option_id }, context),
    organisation_indicator: (parent, _args, context) =>
      getOrganisationIndicator(
        { id: parent.organisation_indicator_id },
        context
      ),
    indicator_disaggregate_reports: (parent, _args, context) =>
      getIndicatorDisaggregateReportsByIndicatorDisaggregateId(
        parent.id,
        context
      ),
  },
};

export {
  typeDefs as IndicatorDisaggregateTypeDefs,
  resolvers as IndicatorDisaggregateResolvers,
};
