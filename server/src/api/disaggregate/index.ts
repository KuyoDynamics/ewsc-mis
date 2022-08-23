import { gql } from 'apollo-server-express';
import { Resolvers } from '../../libs/resolvers-types';
import {
  createDisaggregate,
  createDisaggregateWithOptions,
  deleteDisaggregate,
  getDisaggregate,
  getDisaggregates,
  getOptionsForDisaggregate,
  updateDisaggregate,
} from '../queries';

const typeDefs = gql`
  type Disaggregate {
    id: ID!
    name: String!
    type: DisaggregateType!

    disaggregate_options: [DisaggregateOption!]

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    disaggregates: [Disaggregate!]
    disaggregate(id: ID!): DisaggregateResult!
  }

  extend type Mutation {
    createDisaggregate(input: CreateDisaggregateInput!): DisaggregateResult!
    createDisaggregateWithOptions(
      input: CreateDisaggregateWithOptionsInput!
    ): DisaggregateResult!
    updateDisaggregate(input: UpdateDisaggregateInput!): DisaggregateResult!
    deleteDisaggregate(input: DeleteDisaggregateInput!): DisaggregateResult!
  }

  input CreateDisaggregateWithOptionsInput {
    name: String!
    type: DisaggregateType!
    option_ids: [ID!]!
  }

  input CreateDisaggregateInput {
    name: String!
    type: DisaggregateType!
  }

  input UpdateDisaggregateInput {
    id: ID!
    update: DisaggregateUpdateInput!
  }

  input DisaggregateUpdateInput {
    name: String
    type: DisaggregateType
  }

  input DeleteDisaggregateInput {
    id: ID!
  }

  union DisaggregateResult =
      Disaggregate
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError

  enum DisaggregateType {
    NUMBER
    WITH_PARAMETERS
  }
`;

const resolvers: Resolvers = {
  Query: {
    disaggregate: (_, args, context) => getDisaggregate(args, context),
    disaggregates: (_, _args, context) => getDisaggregates(context),
  },
  Mutation: {
    createDisaggregate: (_, args, context) => createDisaggregate(args, context),
    createDisaggregateWithOptions: (_, args, context) =>
      createDisaggregateWithOptions(args, context),
    updateDisaggregate: (_, args, context) => updateDisaggregate(args, context),
    deleteDisaggregate: (_, args, context) => deleteDisaggregate(args, context),
  },
  Disaggregate: {
    disaggregate_options: (parent, _args, context) =>
      getOptionsForDisaggregate(parent.id, context),
  },
};

export { typeDefs as DisaggregateTypeDefs, resolvers as DisaggregateResolvers };
