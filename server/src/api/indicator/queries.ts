import {
  Indicator,
  IndicatorResult,
  MutationCreateIndicatorArgs,
  MutationDeleteIndicatorArgs,
  MutationUpdateIndicatorArgs,
  QueryIndicatorArgs,
} from "../../libs/resolvers-types";
import {
  getApiCreateError,
  getApiNotFoundError,
  getApiDeleteError,
  getApiUpdateError,
  GraphQLContext,
} from "../../utils";

async function getIndicators(context: GraphQLContext): Promise<Indicator[]> {
  return (await context.prisma.indicator.findMany({})) as Indicator[];
}

async function getIndicator(
  args: QueryIndicatorArgs,
  context: GraphQLContext
): Promise<IndicatorResult> {
  try {
    const indicator = await context.prisma.indicator.findUnique({
      where: { id: args.id },
    });

    if (!indicator) {
      return getApiNotFoundError("Indicator", args.id);
    }
    return {
      __typename: "Indicator",
      ...indicator,
    } as IndicatorResult;
  } catch (error) {
    return getApiNotFoundError("Indicator", args.id, error);
  }
}

async function createIndicator(
  args: MutationCreateIndicatorArgs,
  context: GraphQLContext
): Promise<IndicatorResult> {
  try {
    const indicator = await context.prisma.indicator.create({
      data: {
        indicator_number: args.input.indicator_number,
        description: args.input.description,
        category: args.input.category,
        report_template_id: args.input.report_template_id,
        indicator_unit_id: args.input.indicator_unit_id,
        type: args.input.type,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });

    return {
      __typename: "Indicator",
      ...indicator,
    } as IndicatorResult;
  } catch (error) {
    return getApiCreateError("Indicator", error);
  }
}

async function updateIndicator(
  args: MutationUpdateIndicatorArgs,
  context: GraphQLContext
): Promise<IndicatorResult> {
  try {
    const indicator = await context.prisma.indicator.update({
      where: {
        id: args.input.id,
      },
      data: {
        indicator_number: args.input.update.indicator_number || undefined,
        description: args.input.update.description || undefined,
        category: args.input.update.category || undefined,
        report_template_id: args.input.update.report_template_id || undefined,
        indicator_unit_id: args.input.update.indicator_unit_id || undefined,
        type: args.input.update.type || undefined,
        last_modified_by: args.input.update ? context.user.email : undefined,
      },
    });
    return {
      __typename: "Indicator",
      ...indicator,
    } as IndicatorResult;
  } catch (error) {
    return getApiUpdateError("Indicator", args.input.id);
  }
}

async function deleteIndicator(
  args: MutationDeleteIndicatorArgs,
  context: GraphQLContext
): Promise<IndicatorResult> {
  try {
    const indicator = await context.prisma.indicator.delete({
      where: {
        id: args.input.id,
      },
    });
    return {
      __typename: "Indicator",
      ...indicator,
    } as IndicatorResult;
  } catch (error) {
    return getApiDeleteError("Indicator", args.input.id);
  }
}

export {
  getIndicator,
  getIndicators,
  createIndicator,
  updateIndicator,
  deleteIndicator,
};
