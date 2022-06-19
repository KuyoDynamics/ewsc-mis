import {
  ApiBatchPayloadResult,
  IndicatorDisaggregate,
  IndicatorDisaggregateResult,
  MutationCreateIndicatorDisaggregateArgs,
  MutationCreateIndicatorDisaggregatesArgs,
  MutationDeleteIndicatorDisaggregateArgs,
  QueryIndicator_DisaggregateArgs,
  QueryIndicator_DisaggregatesArgs,
} from "../../libs/resolvers-types";
import {
  getApiCreateError,
  getApiNotFoundError,
  getApiDeleteError,
  GraphQLContext,
  getApiBatchPayloadCreateError,
} from "../../utils";

async function getIndicatorDisaggregates(
  args: QueryIndicator_DisaggregatesArgs,
  context: GraphQLContext
): Promise<IndicatorDisaggregate[]> {
  return context.prisma.indicatorDisaggregate.findMany({
    where: {
      organisation_indicator_id: args.organisation_indicator_id,
    },
  });
}

async function getIndicatorDisaggregate(
  args: QueryIndicator_DisaggregateArgs,
  context: GraphQLContext
): Promise<IndicatorDisaggregateResult> {
  try {
    const indicator_disaggregate =
      await context.prisma.indicatorDisaggregate.findUnique({
        where: { id: args.id },
      });

    if (!indicator_disaggregate) {
      return getApiNotFoundError("IndicatorDisaggregate", args.id);
    }
    return {
      __typename: "IndicatorDisaggregate",
      ...indicator_disaggregate,
    };
  } catch (error) {
    return getApiNotFoundError("IndicatorDisaggregate", args.id, error);
  }
}

async function createIndicatorDisaggregate(
  args: MutationCreateIndicatorDisaggregateArgs,
  context: GraphQLContext
): Promise<IndicatorDisaggregateResult> {
  try {
    const indicator_disaggregate =
      await context.prisma.indicatorDisaggregate.create({
        data: {
          organisation_indicator_id: args.input.organisation_indicator_id,
          disaggregate_option_id: args.input.disaggregate_option_id,
          created_by: context.user.email,
          last_modified_by: context.user.email,
        },
      });

    return {
      __typename: "IndicatorDisaggregate",
      ...indicator_disaggregate,
    };
  } catch (error) {
    return getApiCreateError("IndicatorDisaggregate", error);
  }
}

async function createIndicatorDisaggregates(
  args: MutationCreateIndicatorDisaggregatesArgs,
  context: GraphQLContext
): Promise<ApiBatchPayloadResult> {
  try {
    const data = args.input.disaggregate_option_ids.map(
      (disaggregate_option_id) => ({
        disaggregate_option_id,
        organisation_indicator_id: args.input.organisation_indicator_id,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      })
    );

    const result = await context.prisma.indicatorDisaggregate.createMany({
      data,
      skipDuplicates: true,
    });

    return {
      __typename: "ApiBatchPayload",
      ...result,
    };
  } catch (error) {
    return getApiBatchPayloadCreateError("IndicatorDisaggregate", error);
  }
}

async function deleteIndicatorDisaggregate(
  args: MutationDeleteIndicatorDisaggregateArgs,
  context: GraphQLContext
): Promise<IndicatorDisaggregateResult> {
  try {
    const indicator_disaggregate =
      await context.prisma.indicatorDisaggregate.delete({
        where: {
          id: args.input.id,
        },
      });
    return {
      __typename: "IndicatorDisaggregate",
      ...indicator_disaggregate,
    };
  } catch (error) {
    return getApiDeleteError("IndicatorDisaggregate", args.input.id);
  }
}

export {
  deleteIndicatorDisaggregate,
  createIndicatorDisaggregate,
  getIndicatorDisaggregate,
  getIndicatorDisaggregates,
  createIndicatorDisaggregates,
};
