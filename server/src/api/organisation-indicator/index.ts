import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createOrganisationIndicator,
  createOrganisationIndicators,
  deleteOrganisationIndicator,
  getOrganisationIndicator,
  getOrganisationIndicators,
  getIndicator,
  getIndicatorDisaggregates,
  getOrganisation,
} from "../queries";

const typeDefs = gql`
  type OrganisationIndicator {
    id: ID!

    indicator_id: String!
    indicator: IndicatorResult

    organisation_id: ID!
    organisation: OrganisationResult

    indicator_disaggregates: [IndicatorDisaggregate!]

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    organisation_indicators(organisation_id: ID!): [OrganisationIndicator!]
    organisation_indicator(id: ID!): OrganisationIndicatorResult!
  }

  extend type Mutation {
    createOrganisationIndicator(
      input: CreateOrganisationIndicatorInput!
    ): OrganisationIndicatorResult!
    createOrganisationIndicators(
      input: [CreateOrganisationIndicatorsInput!]!
    ): CreateOrganisationIndicatorsResult!
    deleteOrganisationIndicator(
      input: DeleteOrganisationIndicatorInput!
    ): OrganisationIndicatorResult!
  }

  input CreateOrganisationIndicatorsInput {
    indicator_id: String!
    organisation_id: ID!
    disaggregate_option_ids: [ID!]!
  }

  input CreateOrganisationIndicatorInput {
    indicator_id: String!
    organisation_id: ID!
  }

  input DeleteOrganisationIndicatorInput {
    id: ID!
  }

  type CreateOrganisationIndicatorsSuccess {
    organisation_indicators: [OrganisationIndicator!]!
  }

  union CreateOrganisationIndicatorsResult =
      CreateOrganisationIndicatorsSuccess
    | ApiCreateError

  union OrganisationIndicatorResult =
      OrganisationIndicator
    | ApiNotFoundError
    | ApiCreateError
    | ApiUpdateError
    | ApiDeleteError
`;

const resolvers: Resolvers = {
  Query: {
    organisation_indicators: (_, args, context) =>
      getOrganisationIndicators(args, context),
    organisation_indicator: (_, args, context) =>
      getOrganisationIndicator(args, context),
  },
  Mutation: {
    createOrganisationIndicator: (_, args, context) =>
      createOrganisationIndicator(args, context),
    createOrganisationIndicators: (_, args, context) =>
      createOrganisationIndicators(args, context),
    deleteOrganisationIndicator: (_, args, context) =>
      deleteOrganisationIndicator(args, context),
  },
  OrganisationIndicator: {
    indicator: (parent, _args, context) =>
      getIndicator({ id: parent.indicator_id }, context),
    organisation: (parent, _args, context) =>
      getOrganisation(parent.organisation_id, context),
    indicator_disaggregates: (parent, _args, context) =>
      getIndicatorDisaggregates(
        { organisation_indicator_id: parent.id },
        context
      ),
  },
};

export {
  typeDefs as OrganisationIndicatorTypeDefs,
  resolvers as OrganisationIndicatorResolvers,
};
