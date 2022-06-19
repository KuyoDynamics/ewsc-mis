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
    disaggregate_option_sets: [IndicatorDisaggregate!]
    disaggregate_option_set(id: ID!): IndicatorDisaggregateResult!
  }

  extend type Mutation {
    createIndicatorDisaggregate(
      input: CreateIndicatorDisaggregateInput!
    ): ApiBatchPayloadResult!
    deleteIndicatorDisaggregate(
      input: DeleteIndicatorDisaggregateInput!
    ): IndicatorDisaggregateResult!
  }

  input CreateIndicatorDisaggregateInput {
    organisation_indicator_id: String!
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
    // disaggregate_option_set: (_, args, context) =>
    //   getIndicatorDisaggregate(args, context),
    // disaggregate_option_sets: (_, _args, context) =>
    //   getAllIndicatorDisaggregates(context),
  },
  Mutation: {
    // createIndicatorDisaggregate: (_, args, context) =>
    //   createIndicatorDisaggregate(args, context),
    // deleteIndicatorDisaggregate: (_, args, context) =>
    //   deleteIndicatorDisaggregate(args, context),
  },
  IndicatorDisaggregate: {
    // disaggregate_option: (parent, _args, context) =>
    //   getDisaggregateOption({ id: parent.disaggregate_option_id }, context),
    // disaggregate: (parent, _args, context) =>
    //   getDisaggregate({ id: parent.disaggregate_id }, context),
    // disaggregate_option_set_reports: (parent, _args, context) =>
    //   getReportsByIndicatorDisaggregate(parent.id, context),
  },
};

export {
  typeDefs as IndicatorDisaggregateTypeDefs,
  resolvers as IndicatorDisaggregateResolvers,
};
