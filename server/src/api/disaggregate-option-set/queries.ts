import {
  ApiBatchPayloadResult,
  DisaggregateOptionSet,
  DisaggregateOptionSetResult,
  MutationCreateDisaggregateOptionSetArgs,
  MutationDeleteDisaggregateOptionSetArgs,
  QueryDisaggregate_Option_SetArgs,
} from "../../libs/resolvers-types";
import {
  getApiBatchPayloadCreateError,
  getApiCreateError,
  getApiNotFoundError,
  getApiDeleteError,
  GraphQLContext,
} from "../../utils";

async function getAllDisaggregateOptionSets(
  context: GraphQLContext
): Promise<DisaggregateOptionSet[]> {
  return context.prisma.disaggregateOptionSet.findMany({});
}

async function getDisaggregateOptionSets(
  disaggregate_id: string,
  context: GraphQLContext
): Promise<DisaggregateOptionSet[]> {
  return context.prisma.disaggregateOptionSet.findMany({
    where: {
      disaggregate_id,
    },
  });
}

async function getDisaggregateOptionSetsByOption(
  option_id: string,
  context: GraphQLContext
): Promise<DisaggregateOptionSet[]> {
  return context.prisma.disaggregateOptionSet.findMany({
    where: {
      disaggregate_option_id: option_id,
    },
  });
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
): Promise<ApiBatchPayloadResult> {
  try {
    const disaggregate_options = args.input.disaggregate_options.map(
      (option) => ({
        disaggregate_id: args.input.disaggregate_id,
        disaggregate_option_id: option,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      })
    );
    const disaggregate_option_set =
      await context.prisma.disaggregateOptionSet.createMany({
        data: disaggregate_options,
        skipDuplicates: true,
      });

    return {
      __typename: "ApiBatchPayload",
      ...disaggregate_option_set,
    };
  } catch (error) {
    return getApiBatchPayloadCreateError("DisaggregateOptionSet", error);
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
    console.log(
      "Chaiwa, what is in disaggregate_option_set?",
      disaggregate_option_set
    );
    return {
      __typename: "DisaggregateOptionSet",
      ...disaggregate_option_set,
    };
  } catch (error) {
    return getApiDeleteError("DisaggregateOptionSet", args.input.id);
  }
}

export {
  getDisaggregateOptionSet,
  getAllDisaggregateOptionSets,
  createDisaggregateOptionSet,
  deleteDisaggregateOptionSet,
  getDisaggregateOptionSets,
  getDisaggregateOptionSetsByOption,
};
