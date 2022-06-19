import {
  ApiBatchPayloadResult,
  DisaggregateOption,
  DisaggregateOptionResult,
  MutationCreateDisaggregateOptionArgs,
  MutationCreateDisaggregateOptionsArgs,
  MutationDeleteDisaggregateOptionArgs,
  QueryDisaggregate_OptionArgs,
} from "../../libs/resolvers-types";
import {
  getApiCreateError,
  getApiNotFoundError,
  getApiDeleteError,
  GraphQLContext,
  getApiBatchPayloadCreateError,
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
        option_id: args.input.option_id,
        disaggregate_id: args.input.disaggregate_id,
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

async function createDisaggregateOptions(
  args: MutationCreateDisaggregateOptionsArgs,
  context: GraphQLContext
): Promise<ApiBatchPayloadResult> {
  try {
    const data = args.input.option_ids.map((option_id) => ({
      option_id,
      disaggregate_id: args.input.disaggregate_id,
      created_by: context.user.email,
      last_modified_by: context.user.email,
    }));

    const result = await context.prisma.disaggregateOption.createMany({
      data,
      skipDuplicates: true,
    });

    return {
      __typename: "ApiBatchPayload",
      ...result,
    };
  } catch (error) {
    return getApiBatchPayloadCreateError("DisaggregateOption", error);
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
    return getApiDeleteError("DisaggregateOption", args.input.id);
  }
}

export {
  getDisaggregateOption,
  getDisaggregateOptions,
  createDisaggregateOption,
  deleteDisaggregateOption,
  createDisaggregateOptions,
};
