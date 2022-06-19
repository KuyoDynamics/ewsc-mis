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
  type OrganisationIndicator {
    id: ID!

    indicator_id: String!
    indicator: IndicatorResult

    organisation_id: ID!
    organisation: OrganisationResult

    indicator_disaggregate: [IndicatorDisaggregate!]

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    organisation_indicators: [OrganisationIndicator!]
    organisation_indicator(id: ID!): OrganisationIndicatorResult!
  }

  extend type Mutation {
    createOrganisationIndicator(
      input: CreateOrganisationIndicatorInput!
    ): ApiBatchPayloadResult!
    deleteOrganisationIndicator(
      input: DeleteOrganisationIndicatorInput!
    ): OrganisationIndicatorResult!
  }

  input CreateOrganisationIndicatorInput {
    indicator_id: String!
    organisation_id: ID!
  }

  input DeleteOrganisationIndicatorInput {
    id: ID!
  }

  union OrganisationIndicatorResult =
      OrganisationIndicator
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  Query: {
    // disaggregate_option_set: (_, args, context) =>
    //   getOrganisationIndicator(args, context),
    // disaggregate_option_sets: (_, _args, context) =>
    //   getAllOrganisationIndicators(context),
  },
  Mutation: {
    // createOrganisationIndicator: (_, args, context) =>
    //   createOrganisationIndicator(args, context),
    // deleteOrganisationIndicator: (_, args, context) =>
    //   deleteOrganisationIndicator(args, context),
  },
  OrganisationIndicator: {
    // disaggregate_option: (parent, _args, context) =>
    //   getDisaggregateOption({ id: parent.disaggregate_option_id }, context),
    // disaggregate: (parent, _args, context) =>
    //   getDisaggregate({ id: parent.disaggregate_id }, context),
    // disaggregate_option_set_reports: (parent, _args, context) =>
    //   getReportsByOrganisationIndicator(parent.id, context),
  },
};

export {
  typeDefs as OrganisationIndicatorTypeDefs,
  resolvers as OrganisationIndicatorResolvers,
};
