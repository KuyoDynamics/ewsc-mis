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
  type DisaggregateOption {
    id: ID!

    option_id: String!
    option: OptionResult

    disaggregate_id: ID!
    disaggregate: DisaggregateResult

    indicator_disaggregates: [IndicatorDisaggregate!]

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    disaggregate_options: [DisaggregateOption!]
    disaggregate_option(id: ID!): DisaggregateOptionResult!
  }

  extend type Mutation {
    createDisaggregateOption(
      input: CreateDisaggregateOptionInput!
    ): ApiBatchPayloadResult!
    deleteDisaggregateOption(
      input: DeleteDisaggregateOptionInput!
    ): DisaggregateOptionResult!
  }

  input CreateDisaggregateOptionInput {
    option_id: String!
    disaggregate_id: ID!
  }

  input DeleteDisaggregateOptionInput {
    id: ID!
  }

  union DisaggregateOptionResult =
      DisaggregateOption
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  Query: {
    // disaggregate_option_set: (_, args, context) =>
    //   getDisaggregateOption(args, context),
    // disaggregate_option_sets: (_, _args, context) =>
    //   getAllDisaggregateOptions(context),
  },
  Mutation: {
    // createDisaggregateOption: (_, args, context) =>
    //   createDisaggregateOption(args, context),
    // deleteDisaggregateOption: (_, args, context) =>
    //   deleteDisaggregateOption(args, context),
  },
  DisaggregateOption: {
    // disaggregate_option: (parent, _args, context) =>
    //   getDisaggregateOption({ id: parent.disaggregate_option_id }, context),
    // disaggregate: (parent, _args, context) =>
    //   getDisaggregate({ id: parent.disaggregate_id }, context),
    // disaggregate_option_set_reports: (parent, _args, context) =>
    //   getReportsByDisaggregateOption(parent.id, context),
  },
};

export {
  typeDefs as DisaggregateOptionTypeDefs,
  resolvers as DisaggregateOptionResolvers,
};
