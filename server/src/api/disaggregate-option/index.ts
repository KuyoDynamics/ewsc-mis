import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createDisaggregateOption,
  createDisaggregateOptions,
  deleteDisaggregateOption,
  getDisaggregate,
  getDisaggregateOption,
  getDisaggregateOptions,
  getOption,
} from "../queries";

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
    ): DisaggregateOptionResult!
    createDisaggregateOptions(
      input: CreateDisaggregateOptionsInput!
    ): ApiBatchPayloadResult!
    deleteDisaggregateOption(
      input: DeleteDisaggregateOptionInput!
    ): DisaggregateOptionResult!
  }

  input CreateDisaggregateOptionInput {
    disaggregate_id: ID!
    option_id: ID!
  }

  input CreateDisaggregateOptionsInput {
    disaggregate_id: ID!
    option_ids: [ID!]!
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
    disaggregate_options: (_, _args, context) =>
      getDisaggregateOptions(context),
    disaggregate_option: (_, args, context) =>
      getDisaggregateOption(args, context),
  },
  Mutation: {
    createDisaggregateOption: (_, args, context) =>
      createDisaggregateOption(args, context),
    createDisaggregateOptions: (_, args, context) =>
      createDisaggregateOptions(args, context),
    deleteDisaggregateOption: (_, args, context) =>
      deleteDisaggregateOption(args, context),
  },
  DisaggregateOption: {
    disaggregate: (parent, _args, context) =>
      getDisaggregate({ id: parent.disaggregate_id }, context),
    option: (parent, _args, context) =>
      getOption({ id: parent.option_id }, context),
    // indicator_disaggregates: (parent, _args, context) =>
    //   getReportsByDisaggregateOption(parent.id, context),
  },
};

export {
  typeDefs as DisaggregateOptionTypeDefs,
  resolvers as DisaggregateOptionResolvers,
};
