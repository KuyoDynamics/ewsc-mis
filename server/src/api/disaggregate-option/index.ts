import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createDisaggregateOption,
  deleteDisaggregateOption,
  getDisaggregateOption,
  getDisaggregateOptions,
  getDisaggregateOptionSetsByOption,
  updateDisaggregateOption,
} from "../queries";

const typeDefs = gql`
  type DisaggregateOption {
    id: ID!
    option_name: String!
    disaggregate_option_sets: [DisaggregateOptionSet!]
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
    updateDisaggregateOption(
      input: UpdateDisaggregateOptionInput!
    ): DisaggregateOptionResult!
    deleteDisaggregateOption(
      input: DeleteDisaggregateOptionInput!
    ): DisaggregateOptionResult!
  }

  input CreateDisaggregateOptionInput {
    option_name: String!
  }

  input UpdateDisaggregateOptionInput {
    id: ID!
    update: DisaggregateOptionUpdateInput!
  }

  input DisaggregateOptionUpdateInput {
    option_name: String!
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
    disaggregate_option: (_, args, context) =>
      getDisaggregateOption(args, context),
    disaggregate_options: (_, _args, context) =>
      getDisaggregateOptions(context),
  },
  Mutation: {
    createDisaggregateOption: (_, args, context) =>
      createDisaggregateOption(args, context),
    updateDisaggregateOption: (_, args, context) =>
      updateDisaggregateOption(args, context),
    deleteDisaggregateOption: (_, args, context) =>
      deleteDisaggregateOption(args, context),
  },
  DisaggregateOption: {
    disaggregate_option_sets: (parent, _args, context) =>
      getDisaggregateOptionSetsByOption(parent.id, context),
  },
};

export {
  typeDefs as DisaggregateOptionTypeDefs,
  resolvers as DisaggregateOptionResolvers,
};
