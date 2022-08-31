import { gql } from 'apollo-server-express';
import { Resolvers } from '../../libs/resolvers-types';
import {
  // createOrganisationIndicator,
  // createOrganisationIndicators,
  // deleteOrganisationIndicator,
  // getOrganisationIndicator,
  // getOrganisationIndicators,
  getIndicator,
  getOrganisation,
} from '../queries';

const typeDefs = gql`
  type OrganisationIndicator {
    id: ID!

    indicator_id: String!
    indicator: Indicator

    organisation_report_template_id: ID!
    organisation_report_template: OrganisationReportTemplate

    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  type OrganisationIndicatorView {
    id: ID!
    indicator_number: String!
    description: String!
    category: String!
    type: IndicatorType!
    contributing_organisation: String!

    report_template_id: String!
    report_template: ReportTemplate

    indicator_unit_id: String!
    indicator_unit: IndicatorUnit

    organisation_id: ID!
    organisation: Organisation

    indicator_organisations: [Organisation!]

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
    // organisation_indicators: (_, args, context) =>
    //   getOrganisationIndicators(args, context),
    // organisation_indicator: (_, args, context) =>
    //   getOrganisationIndicator(args, context),
  },
  Mutation: {
    // createOrganisationIndicator: (_, args, context) =>
    //   createOrganisationIndicator(args, context),
    // createOrganisationIndicators: (_, args, context) =>
    //   createOrganisationIndicators(args, context),
    // deleteOrganisationIndicator: (_, args, context) =>
    //   deleteOrganisationIndicator(args, context),
  },
  OrganisationIndicator: {
    indicator: (parent, _args, context) =>
      getIndicator({ id: parent.indicator_id }, context),
  },
};

export {
  typeDefs as OrganisationIndicatorTypeDefs,
  resolvers as OrganisationIndicatorResolvers,
};
