import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createOption,
  deleteOption,
  getDisaggregateOptionsByOptionId,
  getOption,
  getOptions,
  updateOption,
} from "../queries";

const typeDefs = gql`
  type Option {
    id: ID!
    option_name: String!
    disaggregate_options: [DisaggregateOption!]

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    options: [Option!]
    option(id: ID!): OptionResult!
  }

  extend type Mutation {
    createOption(input: CreateOptionInput!): OptionResult!
    updateOption(input: UpdateOptionInput!): OptionResult!
    deleteOption(input: DeleteOptionInput!): OptionResult!
  }

  input CreateOptionInput {
    option_name: String!
  }

  input UpdateOptionInput {
    id: ID!
    update: OptionUpdateInput!
  }

  input OptionUpdateInput {
    option_name: String!
  }

  input DeleteOptionInput {
    id: ID!
  }

  union OptionResult =
      Option
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  Query: {
    option: (_, args, context) => getOption(args, context),
    options: (_, _args, context) => getOptions(context),
  },
  Mutation: {
    createOption: (_, args, context) => createOption(args, context),
    updateOption: (_, args, context) => updateOption(args, context),
    deleteOption: (_, args, context) => deleteOption(args, context),
  },
  Option: {
    disaggregate_options: (parent, _args, context) =>
      getDisaggregateOptionsByOptionId(parent.id, context),
  },
};

export { typeDefs as OptionTypeDefs, resolvers as OptionResolvers };
