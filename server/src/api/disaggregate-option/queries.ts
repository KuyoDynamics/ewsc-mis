import {
  DisaggregateOption,
  DisaggregateOptionResult,
  MutationCreateDisaggregateOptionArgs,
  MutationDeleteDisaggregateOptionArgs,
  MutationUpdateDisaggregateOptionArgs,
  QueryDisaggregate_OptionArgs,
} from "../../libs/resolvers-types";
import {
  getApiCreateError,
  getApiNotFoundError,
  getApitDeleteError,
  getApitUpdateError,
  GraphQLContext,
} from "../../utils";

async function getDisaggregateOptions(
  context: GraphQLContext
): Promise<DisaggregateOption[]> {
  return context.prisma.disaggregateOption.findMany({});
}

async function getDisaggregateOption(
  args: QueryDisaggregate_OptionArgs,
  context: GraphQLContext
): Promise<DisaggregateOptionResult> {
  try {
    const disaggregate_option =
      await context.prisma.disaggregateOption.findUnique({
        where: { id: args.id },
      });

    if (!disaggregate_option) {
      return getApiNotFoundError("DisaggregateOption", args.id);
    }
    return {
      __typename: "DisaggregateOption",
      ...disaggregate_option,
    };
  } catch (error) {
    return getApiNotFoundError("DisaggregateOption", args.id, error);
  }
}

async function createDisaggregateOption(
  args: MutationCreateDisaggregateOptionArgs,
  context: GraphQLContext
): Promise<DisaggregateOptionResult> {
  try {
    const disaggregate_option = await context.prisma.disaggregateOption.create({
      data: {
        option_name: args.input.option_name,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });

    return {
      __typename: "DisaggregateOption",
      ...disaggregate_option,
    };
  } catch (error) {
    return getApiCreateError("DisaggregateOption", error);
  }
}

async function updateDisaggregateOption(
  args: MutationUpdateDisaggregateOptionArgs,
  context: GraphQLContext
): Promise<DisaggregateOptionResult> {
  try {
    const disaggregate_option = await context.prisma.disaggregateOption.update({
      where: {
        id: args.input.id,
      },
      data: {
        option_name: args.input.update.option_name || undefined,
        last_modified_by: args.input.update ? context.user.email : undefined,
      },
    });
    return {
      __typename: "DisaggregateOption",
      ...disaggregate_option,
    };
  } catch (error) {
    return getApitUpdateError("DisaggregateOption", args.input.id);
  }
}

async function deleteDisaggregateOption(
  args: MutationDeleteDisaggregateOptionArgs,
  context: GraphQLContext
): Promise<DisaggregateOptionResult> {
  try {
    const disaggregate_option = await context.prisma.disaggregateOption.delete({
      where: {
        id: args.input.id,
      },
    });
    return {
      __typename: "DisaggregateOption",
      ...disaggregate_option,
    };
  } catch (error) {
    return getApitDeleteError("DisaggregateOption", args.input.id);
  }
}

export {
  getDisaggregateOption,
  getDisaggregateOptions,
  createDisaggregateOption,
  updateDisaggregateOption,
  deleteDisaggregateOption,
};
