import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createDisaggregateOptionSet,
  deleteDisaggregateOptionSet,
  getDisaggregateOption,
  getDisaggregateOptionSet,
  getAllDisaggregateOptionSets,
} from "../queries";

const typeDefs = gql`
  type DisaggregateOptionSet {
    id: ID!
    disaggregate_id: ID!
    # disaggregate: DisaggregateResult
    disaggregate_option_id: ID!
    disaggregate_option: DisaggregateOptionResult
    # indictor_reports: [IndicatorReport!]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    disaggregate_option_sets: [DisaggregateOptionSet!]
    disaggregate_option_set(id: ID!): DisaggregateOptionSetResult!
  }

  extend type Mutation {
    createDisaggregateOptionSet(
      input: CreateDisaggregateOptionSetInput!
    ): DisaggregateOptionSetResult!
    deleteDisaggregateOptionSet(
      input: DeleteDisaggregateOptionSetInput!
    ): DisaggregateOptionSetResult!
  }

  input CreateDisaggregateOptionSetInput {
    disaggregate_id: ID!
    disaggregate_option_id: ID!
  }

  input DeleteDisaggregateOptionSetInput {
    id: ID!
  }

  union DisaggregateOptionSetResult =
      DisaggregateOptionSet
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  Query: {
    disaggregate_option_set: (_, args, context) =>
      getDisaggregateOptionSet(args, context),
    disaggregate_option_sets: (_, _args, context) =>
      getAllDisaggregateOptionSets(context),
  },
  Mutation: {
    createDisaggregateOptionSet: (_, args, context) =>
      createDisaggregateOptionSet(args, context),
    deleteDisaggregateOptionSet: (_, args, context) =>
      deleteDisaggregateOptionSet(args, context),
  },
  DisaggregateOptionSet: {
    disaggregate_option: (parent, _args, context) =>
      getDisaggregateOption({ id: parent.disaggregate_option_id }, context),
  },
};

export {
  typeDefs as DisaggregateOptionSetTypeDefs,
  resolvers as DisaggregateOptionSetResolvers,
};
