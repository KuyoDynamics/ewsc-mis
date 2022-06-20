import {
  MutationCreateOptionArgs,
  MutationDeleteOptionArgs,
  MutationUpdateOptionArgs,
  Option,
  OptionResult,
  QueryOptionArgs,
} from "../../libs/resolvers-types";
import {
  getApiCreateError,
  getApiNotFoundError,
  getApiDeleteError,
  getApiUpdateError,
  GraphQLContext,
} from "../../utils";

async function getOptions(context: GraphQLContext): Promise<Option[]> {
  return context.prisma.option.findMany({});
}

async function getOption(
  args: QueryOptionArgs,
  context: GraphQLContext
): Promise<OptionResult> {
  try {
    const option = await context.prisma.option.findUnique({
      where: { id: args.id },
    });

    if (!option) {
      return getApiNotFoundError("Option", args.id);
    }
    return {
      __typename: "Option",
      ...option,
    };
  } catch (error) {
    return getApiNotFoundError("Option", args.id, error);
  }
}

async function createOption(
  args: MutationCreateOptionArgs,
  context: GraphQLContext
): Promise<OptionResult> {
  try {
    const disaggregate_option = await context.prisma.option.create({
      data: {
        option_name: args.input.option_name,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });

    return {
      __typename: "Option",
      ...disaggregate_option,
    };
  } catch (error) {
    return getApiCreateError("Option", error);
  }
}

async function updateOption(
  args: MutationUpdateOptionArgs,
  context: GraphQLContext
): Promise<OptionResult> {
  try {
    const disaggregate_option = await context.prisma.option.update({
      where: {
        id: args.input.id,
      },
      data: {
        option_name: args.input.update.option_name || undefined,
        last_modified_by: args.input.update ? context.user.email : undefined,
      },
    });
    return {
      __typename: "Option",
      ...disaggregate_option,
    };
  } catch (error) {
    return getApiUpdateError("Option", args.input.id);
  }
}

async function deleteOption(
  args: MutationDeleteOptionArgs,
  context: GraphQLContext
): Promise<OptionResult> {
  try {
    const disaggregate_option = await context.prisma.option.delete({
      where: {
        id: args.input.id,
      },
    });
    return {
      __typename: "Option",
      ...disaggregate_option,
    };
  } catch (error) {
    return getApiDeleteError("Option", args.input.id);
  }
}

export { getOption, getOptions, createOption, updateOption, deleteOption };
