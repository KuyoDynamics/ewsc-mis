import {
  DisaggregateOptionSet,
  DisaggregateOptionSetResult,
  MutationCreateDisaggregateOptionSetArgs,
  MutationDeleteDisaggregateOptionSetArgs,
  QueryDisaggregate_Option_SetArgs,
} from "../../libs/resolvers-types";
import {
  getApiCreateError,
  getApiNotFoundError,
  getApitDeleteError,
  GraphQLContext,
} from "../../utils";

async function getDisaggregateOptionSets(
  context: GraphQLContext
): Promise<DisaggregateOptionSet[]> {
  return context.prisma.disaggregateOptionSet.findMany({});
}

async function getDisaggregateOptionSet(
  args: QueryDisaggregate_Option_SetArgs,
  context: GraphQLContext
): Promise<DisaggregateOptionSetResult> {
  try {
    const disaggregate_option_set =
      await context.prisma.disaggregateOptionSet.findUnique({
        where: { id: args.id },
      });

    if (!disaggregate_option_set) {
      return getApiNotFoundError("DisaggregateOptionSet", args.id);
    }
    return {
      __typename: "DisaggregateOptionSet",
      ...disaggregate_option_set,
    };
  } catch (error) {
    return getApiNotFoundError("DisaggregateOptionSet", args.id, error);
  }
}

async function createDisaggregateOptionSet(
  args: MutationCreateDisaggregateOptionSetArgs,
  context: GraphQLContext
): Promise<DisaggregateOptionSetResult> {
  try {
    const disaggregate_option_set =
      await context.prisma.disaggregateOptionSet.create({
        data: {
          disaggregate_id: args.input.disaggregate_id,
          disaggregate_option_id: args.input.disaggregate_option_id,
          created_by: context.user.email,
          last_modified_by: context.user.email,
        },
      });

    return {
      __typename: "DisaggregateOptionSet",
      ...disaggregate_option_set,
    };
  } catch (error) {
    return getApiCreateError("DisaggregateOptionSet", error);
  }
}

async function deleteDisaggregateOptionSet(
  args: MutationDeleteDisaggregateOptionSetArgs,
  context: GraphQLContext
): Promise<DisaggregateOptionSetResult> {
  try {
    const disaggregate_option_set =
      await context.prisma.disaggregateOptionSet.delete({
        where: {
          id: args.input.id,
        },
      });
    return {
      __typename: "DisaggregateOptionSet",
      ...disaggregate_option_set,
    };
  } catch (error) {
    return getApitDeleteError("DisaggregateOptionSet", args.input.id);
  }
}

export {
  getDisaggregateOptionSet,
  getDisaggregateOptionSets,
  createDisaggregateOptionSet,
  deleteDisaggregateOptionSet,
};
