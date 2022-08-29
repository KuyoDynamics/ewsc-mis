import { gql } from 'apollo-server-express';
import { Resolvers } from '../../libs/resolvers-types';
import {
  createIndicatorUnit,
  deleteIndicatorUnit,
  getIndicatorUnit,
  getIndicatorUnits,
  resolveIndicatorsForUnit,
  updateIndicatorUnit,
} from '../queries';

const typeDefs = gql`
  type IndicatorUnit {
    id: ID!
    unit: String!
    display_name: String!
    indicators: [Indicator!]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    indicator_units: [IndicatorUnit!]
    indicator_unit(id: ID!): IndicatorUnitResult!
  }

  extend type Mutation {
    createIndicatorUnit(input: CreateIndicatorUnitInput!): IndicatorUnitResult!
    updateIndicatorUnit(input: UpdateIndicatorUnitInput!): IndicatorUnitResult!
    deleteIndicatorUnit(input: DeleteIndicatorUnitInput!): IndicatorUnitResult!
  }

  input CreateIndicatorUnitInput {
    unit: String!
    display_name: String!
  }

  input UpdateIndicatorUnitInput {
    id: ID!
    update: IndicatorUnitUpdateInput!
  }

  input IndicatorUnitUpdateInput {
    unit: String
    display_name: String
  }

  input DeleteIndicatorUnitInput {
    id: ID!
  }

  union IndicatorUnitResult =
      IndicatorUnit
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  Query: {
    indicator_unit: (_, args, context) => getIndicatorUnit(args, context),
    indicator_units: (_, _args, context) => getIndicatorUnits(context),
  },
  Mutation: {
    createIndicatorUnit: (_, args, context) =>
      createIndicatorUnit(args, context),
    updateIndicatorUnit: (_, args, context) =>
      updateIndicatorUnit(args, context),
    deleteIndicatorUnit: (_, args, context) =>
      deleteIndicatorUnit(args, context),
  },
  IndicatorUnit: {
    indicators: (parent, _args, context) =>
      resolveIndicatorsForUnit(parent.id, context),
  },
};

export {
  typeDefs as IndicatorUnitTypeDefs,
  resolvers as IndicatorUnitResolvers,
};
