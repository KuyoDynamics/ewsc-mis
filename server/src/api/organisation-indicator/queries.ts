import { Prisma } from ".prisma/client";
import {
  ApiBatchPayloadResult,
  CreateOrganisationIndicatorsResult,
  MutationCreateOrganisationIndicatorArgs,
  MutationCreateOrganisationIndicatorsArgs,
  MutationDeleteOrganisationIndicatorArgs,
  OrganisationIndicator,
  OrganisationIndicatorResult,
  QueryDisaggregate_OptionArgs,
  QueryOrganisation_IndicatorsArgs,
} from "../../libs/resolvers-types";
import {
  getApiCreateError,
  getApiNotFoundError,
  getApiDeleteError,
  GraphQLContext,
  getApiBatchPayloadCreateError,
} from "../../utils";

async function getOrganisationIndicators(
  args: QueryOrganisation_IndicatorsArgs,
  context: GraphQLContext
): Promise<OrganisationIndicator[]> {
  return context.prisma.organisationIndicator.findMany({
    where: {
      organisation_id: args.organisation_id,
    },
  });
}

async function getIndicatorOrganisations(
  indicator_id: string,
  context: GraphQLContext
): Promise<OrganisationIndicator[]> {
  return context.prisma.organisationIndicator.findMany({
    where: {
      indicator_id,
    },
  });
}

async function getOrganisationIndicator(
  args: QueryDisaggregate_OptionArgs,
  context: GraphQLContext
): Promise<OrganisationIndicatorResult> {
  try {
    const disaggregate_option =
      await context.prisma.organisationIndicator.findUnique({
        where: { id: args.id },
      });

    if (!disaggregate_option) {
      return getApiNotFoundError("OrganisationIndicator", args.id);
    }
    return {
      __typename: "OrganisationIndicator",
      ...disaggregate_option,
    };
  } catch (error) {
    return getApiNotFoundError("OrganisationIndicator", args.id, error);
  }
}

async function createOrganisationIndicator(
  args: MutationCreateOrganisationIndicatorArgs,
  context: GraphQLContext
): Promise<OrganisationIndicatorResult> {
  try {
    const organisation_indicator =
      await context.prisma.organisationIndicator.create({
        data: {
          indicator_id: args.input.indicator_id,
          organisation_id: args.input.organisation_id,
          created_by: context.user.email,
          last_modified_by: context.user.email,
        },
      });

    return {
      __typename: "OrganisationIndicator",
      ...organisation_indicator,
    };
  } catch (error) {
    return getApiCreateError("OrganisationIndicator", error);
  }
}

async function createOrganisationIndicators(
  args: MutationCreateOrganisationIndicatorsArgs,
  context: GraphQLContext
): Promise<CreateOrganisationIndicatorsResult> {
  try {
    const organisation_indicators: Prisma.OrganisationIndicatorCreateInput[] =
      args.input.map((input) => {
        return {
          created_by: context.user.email,
          last_modified_by: context.user.email,
          organisation: {
            connect: {
              id: input.organisation_id,
            },
          },
          indicator: {
            connect: {
              id: input.indicator_id,
            },
          },
          indicator_disaggregates: {
            createMany: {
              data: input.disaggregate_option_ids.map(
                (disaggregate_option_id) => ({
                  disaggregate_option_id,
                  created_by: context.user.email,
                  last_modified_by: context.user.email,
                })
              ),
              skipDuplicates: true,
            },
          },
        };
      });

    const result = await context.prisma.$transaction(
      organisation_indicators.map((organisation_indicator) =>
        context.prisma.organisationIndicator.create({
          data: organisation_indicator,
        })
      )
    );

    return {
      __typename: "CreateOrganisationIndicatorsSuccess",
      ...{ organisation_indicators: result },
    };
  } catch (error) {
    return getApiCreateError("OrganisationIndicator", error);
  }
}

async function deleteOrganisationIndicator(
  args: MutationDeleteOrganisationIndicatorArgs,
  context: GraphQLContext
): Promise<OrganisationIndicatorResult> {
  try {
    const organisation_indicator =
      await context.prisma.organisationIndicator.delete({
        where: {
          id: args.input.id,
        },
      });
    return {
      __typename: "OrganisationIndicator",
      ...organisation_indicator,
    };
  } catch (error) {
    return getApiDeleteError("OrganisationIndicator", args.input.id);
  }
}

export {
  getOrganisationIndicator,
  getOrganisationIndicators,
  createOrganisationIndicator,
  deleteOrganisationIndicator,
  createOrganisationIndicators,
  getIndicatorOrganisations,
};
