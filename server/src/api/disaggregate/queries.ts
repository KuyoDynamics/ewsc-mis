import { Prisma } from '.prisma/client';
import {
  Disaggregate,
  DisaggregateOption,
  DisaggregateResult,
  MutationCreateDisaggregateArgs,
  MutationCreateDisaggregateWithOptionsArgs,
  MutationDeleteDisaggregateArgs,
  MutationUpdateDisaggregateArgs,
  QueryDisaggregateArgs,
} from '../../libs/resolvers-types';
import {
  getApiCreateError,
  getApiNotFoundError,
  getApiDeleteError,
  getApiUpdateError,
  GraphQLContext,
} from '../../utils';

async function getDisaggregates(
  context: GraphQLContext
): Promise<Disaggregate[]> {
  const disaggregates = await context.prisma.disaggregate.findMany({});
  return disaggregates as Disaggregate[];
}

async function getOptionsForDisaggregate(
  disaggregate_id: string,
  context: GraphQLContext
): Promise<DisaggregateOption[]> {
  const options = await context.prisma.disaggregateOption.findMany({
    where: {
      disaggregate_id,
    },
  });
  return options;
}

async function resolveDisaggregate(
  id: string,
  context: GraphQLContext
): Promise<Disaggregate | null> {
  const disaggregate = await context.prisma.disaggregate.findUnique({
    where: {
      id,
    },
  });
  return disaggregate as Disaggregate;
}

async function getDisaggregate(
  args: QueryDisaggregateArgs,
  context: GraphQLContext
): Promise<DisaggregateResult> {
  try {
    const disaggregate = await context.prisma.disaggregate.findUnique({
      where: { id: args.id },
    });

    if (!disaggregate) {
      return getApiNotFoundError('Disaggregate', args.id);
    }
    return {
      __typename: 'Disaggregate',
      ...disaggregate,
    } as DisaggregateResult;
  } catch (error) {
    return getApiNotFoundError('Disaggregate', args.id, error);
  }
}

async function createDisaggregate(
  args: MutationCreateDisaggregateArgs,
  context: GraphQLContext
): Promise<DisaggregateResult> {
  try {
    const disaggregate = await context.prisma.disaggregate.create({
      data: {
        name: args.input.name,
        type: args.input.type,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });

    return {
      __typename: 'Disaggregate',
      ...disaggregate,
    } as Disaggregate;
  } catch (error) {
    return getApiCreateError('Disaggregate', error);
  }
}

async function createDisaggregateWithOptions(
  args: MutationCreateDisaggregateWithOptionsArgs,
  context: GraphQLContext
): Promise<DisaggregateResult> {
  try {
    const disaggregate = await context.prisma.disaggregate.create({
      data: {
        name: args.input.name,
        type: args.input.type,
        created_by: context.user.email,
        last_modified_by: context.user.email,
        disaggregate_options: {
          createMany: {
            data: args.input.option_ids.map((option_id) => ({
              option_id,
              created_by: context.user.email,
              last_modified_by: context.user.email,
            })),
          },
        },
      },
    });

    return {
      __typename: 'Disaggregate',
      ...disaggregate,
    } as Disaggregate;
  } catch (error) {
    return getApiCreateError('Disaggregate', error);
  }
}

async function updateDisaggregate(
  args: MutationUpdateDisaggregateArgs,
  context: GraphQLContext
): Promise<DisaggregateResult> {
  try {
    const disaggregate = await context.prisma.disaggregate.update({
      where: {
        id: args.input.id,
      },
      data: {
        name: args.input.update.name || undefined,
        type: args.input.update.type || undefined,
        last_modified_by: args.input.update ? context.user.email : undefined,
      },
    });
    return {
      __typename: 'Disaggregate',
      ...disaggregate,
    } as Disaggregate;
  } catch (error) {
    return getApiUpdateError('DisaggregateOption', args.input.id);
  }
}

async function deleteDisaggregate(
  args: MutationDeleteDisaggregateArgs,
  context: GraphQLContext
): Promise<DisaggregateResult> {
  try {
    const disaggregate = await context.prisma.disaggregate.delete({
      where: {
        id: args.input.id,
      },
    });
    return {
      __typename: 'Disaggregate',
      ...disaggregate,
    } as Disaggregate;
  } catch (error) {
    return getApiDeleteError('Disaggregate', args.input.id);
  }
}

export {
  getDisaggregate,
  getDisaggregates,
  createDisaggregate,
  deleteDisaggregate,
  updateDisaggregate,
  getOptionsForDisaggregate,
  createDisaggregateWithOptions,
  resolveDisaggregate,
};
