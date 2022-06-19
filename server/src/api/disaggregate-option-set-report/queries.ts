import {
  DisaggregateOptionSetReport,
  DisaggregateOptionSetReportResult,
  MutationCreateDisaggregateOptionSetReportArgs,
  MutationDeleteDisaggregateOptionSetReportArgs,
  MutationUpdateDisaggregateOptionSetReportArgs,
  QueryDisaggregate_Option_Set_ReportArgs,
  QueryDisaggregate_Option_Set_ReportsArgs,
} from "../../libs/resolvers-types";
import {
  getApiCreateError,
  getApiNotFoundError,
  getApiDeleteError,
  getApiUpdateError,
  GraphQLContext,
} from "../../utils";

async function getDisaggregateOptionSetReports(
  args: QueryDisaggregate_Option_Set_ReportsArgs,
  context: GraphQLContext
): Promise<DisaggregateOptionSetReport[]> {
  return context.prisma.disaggregateOptionSetReport.findMany({
    where: {
      report_id: args.report_id,
    },
  });
}

async function getReportsByDisaggregateOptionSet(
  disaggregate_option_set_id: string,
  context: GraphQLContext
): Promise<DisaggregateOptionSetReport[]> {
  return context.prisma.disaggregateOptionSetReport.findMany({
    where: {
      disaggregate_option_set_id,
    },
  });
}

async function getDisaggregateOptionSetReport(
  args: QueryDisaggregate_Option_Set_ReportArgs,
  context: GraphQLContext
): Promise<DisaggregateOptionSetReportResult> {
  try {
    const disaggregateOptionSetReport =
      await context.prisma.disaggregateOptionSetReport.findUnique({
        where: { id: args.id },
      });

    if (!disaggregateOptionSetReport) {
      return getApiNotFoundError("DisaggregateOptionSetReport", args.id);
    }
    return {
      __typename: "DisaggregateOptionSetReport",
      ...disaggregateOptionSetReport,
    };
  } catch (error) {
    return getApiNotFoundError("DisaggregateOptionSetReport", args.id, error);
  }
}

async function createDisaggregateOptionSetReport(
  args: MutationCreateDisaggregateOptionSetReportArgs,
  context: GraphQLContext
): Promise<DisaggregateOptionSetReportResult> {
  try {
    const disaggregateOptionSetReport =
      await context.prisma.disaggregateOptionSetReport.create({
        data: {
          report_id: args.input.report_id,
          disaggregate_option_set_id: args.input.disaggregate_option_set_id,
          target: args.input.target,
          achieved: args.input.achieved,
          comment: args.input.comment,
          created_by: context.user.email,
          last_modified_by: context.user.email,
        },
      });

    return {
      __typename: "DisaggregateOptionSetReport",
      ...disaggregateOptionSetReport,
    };
  } catch (error) {
    return getApiCreateError("DisaggregateOptionSetReport", error);
  }
}

async function updateDisaggregateOptionSetReport(
  args: MutationUpdateDisaggregateOptionSetReportArgs,
  context: GraphQLContext
): Promise<DisaggregateOptionSetReportResult> {
  try {
    const disaggregateOptionSetReport =
      await context.prisma.disaggregateOptionSetReport.update({
        where: {
          id: args.input.id,
        },
        data: {
          target: args.input.update.target || undefined,
          achieved: args.input.update.achieved || undefined,
          comment: args.input.update.comment || undefined,
          last_modified_by: args.input.update ? context.user.email : undefined,
        },
      });
    return {
      __typename: "DisaggregateOptionSetReport",
      ...disaggregateOptionSetReport,
    };
  } catch (error) {
    return getApiUpdateError("DisaggregateOptionSetReport", args.input.id);
  }
}

async function deleteDisaggregateOptionSetReport(
  args: MutationDeleteDisaggregateOptionSetReportArgs,
  context: GraphQLContext
): Promise<DisaggregateOptionSetReportResult> {
  try {
    const disaggregateOptionSetReport =
      await context.prisma.disaggregateOptionSetReport.delete({
        where: {
          id: args.input.id,
        },
      });
    return {
      __typename: "DisaggregateOptionSetReport",
      ...disaggregateOptionSetReport,
    };
  } catch (error) {
    return getApiDeleteError("DisaggregateOptionSetReport", args.input.id);
  }
}

export {
  getDisaggregateOptionSetReport,
  getDisaggregateOptionSetReports,
  createDisaggregateOptionSetReport,
  updateDisaggregateOptionSetReport,
  deleteDisaggregateOptionSetReport,
  getReportsByDisaggregateOptionSet,
};
