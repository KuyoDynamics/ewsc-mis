import {
  IndicatorUnit,
  IndicatorUnitResult,
  MutationCreateIndicatorUnitArgs,
  MutationDeleteIndicatorUnitArgs,
  MutationUpdateIndicatorUnitArgs,
  QueryDisaggregate_OptionArgs,
} from "../../libs/resolvers-types";
import {
  getApiCreateError,
  getApiNotFoundError,
  getApiDeleteError,
  getApiUpdateError,
  GraphQLContext,
} from "../../utils";

async function getIndicatorUnits(
  context: GraphQLContext
): Promise<IndicatorUnit[]> {
  return context.prisma.indicatorUnit.findMany({});
}

async function getIndicatorUnit(
  args: QueryDisaggregate_OptionArgs,
  context: GraphQLContext
): Promise<IndicatorUnitResult> {
  try {
    const indicator_unit = await context.prisma.indicatorUnit.findUnique({
      where: { id: args.id },
    });

    if (!indicator_unit) {
      return getApiNotFoundError("IndicatorUnit", args.id);
    }
    return {
      __typename: "IndicatorUnit",
      ...indicator_unit,
    };
  } catch (error) {
    return getApiNotFoundError("IndicatorUnit", args.id, error);
  }
}

async function createIndicatorUnit(
  args: MutationCreateIndicatorUnitArgs,
  context: GraphQLContext
): Promise<IndicatorUnitResult> {
  try {
    const indicator_unit = await context.prisma.indicatorUnit.create({
      data: {
        display_name: args.input.display_name,
        unit: args.input.unit,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });

    return {
      __typename: "IndicatorUnit",
      ...indicator_unit,
    };
  } catch (error) {
    return getApiCreateError("IndicatorUnit", error);
  }
}

async function updateIndicatorUnit(
  args: MutationUpdateIndicatorUnitArgs,
  context: GraphQLContext
): Promise<IndicatorUnitResult> {
  try {
    const indicator_unit = await context.prisma.indicatorUnit.update({
      where: {
        id: args.input.id,
      },
      data: {
        unit: args.input.update.unit || undefined,
        display_name: args.input.update.unit || undefined,
        last_modified_by: args.input.update ? context.user.email : undefined,
      },
    });
    return {
      __typename: "IndicatorUnit",
      ...indicator_unit,
    };
  } catch (error) {
    return getApiUpdateError("IndicatorUnit", args.input.id);
  }
}

async function deleteIndicatorUnit(
  args: MutationDeleteIndicatorUnitArgs,
  context: GraphQLContext
): Promise<IndicatorUnitResult> {
  try {
    const indicator_unit = await context.prisma.indicatorUnit.delete({
      where: {
        id: args.input.id,
      },
    });
    return {
      __typename: "IndicatorUnit",
      ...indicator_unit,
    };
  } catch (error) {
    return getApiDeleteError("IndicatorUnit", args.input.id);
  }
}

export {
  getIndicatorUnit,
  getIndicatorUnits,
  createIndicatorUnit,
  updateIndicatorUnit,
  deleteIndicatorUnit,
};
