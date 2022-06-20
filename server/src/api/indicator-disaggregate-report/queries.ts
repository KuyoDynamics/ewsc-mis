import {
  IndicatorDisaggregateReport,
  IndicatorDisaggregateReportResult,
  MutationCreateIndicatorDisaggregateReportArgs,
  MutationDeleteIndicatorDisaggregateReportArgs,
  MutationUpdateIndicatorDisaggregateReportArgs,
  QueryIndicator_Disaggregate_ReportArgs,
  QueryIndicator_Disaggregate_ReportsArgs,
} from "../../libs/resolvers-types";
import {
  getApiCreateError,
  getApiNotFoundError,
  getApiDeleteError,
  getApiUpdateError,
  GraphQLContext,
} from "../../utils";

async function getIndicatorDisaggregateReports(
  args: QueryIndicator_Disaggregate_ReportsArgs,
  context: GraphQLContext
): Promise<IndicatorDisaggregateReport[]> {
  return context.prisma.indicatorDisaggregateReport.findMany({
    where: {
      report_id: args.report_id,
    },
  });
}

async function getIndicatorDisaggregateReportsByIndicatorDisaggregateId(
  indicator_disaggregate_id: string,
  context: GraphQLContext
): Promise<IndicatorDisaggregateReport[]> {
  return context.prisma.indicatorDisaggregateReport.findMany({
    where: {
      indicator_disaggregate_id,
    },
  });
}

async function getIndicatorDisaggregateReport(
  args: QueryIndicator_Disaggregate_ReportArgs,
  context: GraphQLContext
): Promise<IndicatorDisaggregateReportResult> {
  try {
    const indicator_disaggregate_report =
      await context.prisma.indicatorDisaggregateReport.findUnique({
        where: { id: args.id },
      });

    if (!indicator_disaggregate_report) {
      return getApiNotFoundError("IndicatorDisaggregateReport", args.id);
    }
    return {
      __typename: "IndicatorDisaggregateReport",
      ...indicator_disaggregate_report,
    };
  } catch (error) {
    return getApiNotFoundError("IndicatorDisaggregateReport", args.id, error);
  }
}

async function createIndicatorDisaggregateReport(
  args: MutationCreateIndicatorDisaggregateReportArgs,
  context: GraphQLContext
): Promise<IndicatorDisaggregateReportResult> {
  try {
    const indicator_disaggregate_report =
      await context.prisma.indicatorDisaggregateReport.create({
        data: {
          report_id: args.input.report_id,
          indicator_disaggregate_id: args.input.indicator_disaggregate_id,
          target: args.input.target,
          achieved: args.input.achieved,
          comment: args.input.comment,
          created_by: context.user.email,
          last_modified_by: context.user.email,
        },
      });

    return {
      __typename: "IndicatorDisaggregateReport",
      ...indicator_disaggregate_report,
    };
  } catch (error) {
    return getApiCreateError("IndicatorDisaggregateReport", error);
  }
}

async function updateIndicatorDisaggregateReport(
  args: MutationUpdateIndicatorDisaggregateReportArgs,
  context: GraphQLContext
): Promise<IndicatorDisaggregateReportResult> {
  try {
    const indicator_disaggregate_report =
      await context.prisma.indicatorDisaggregateReport.update({
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
      __typename: "IndicatorDisaggregateReport",
      ...indicator_disaggregate_report,
    };
  } catch (error) {
    return getApiUpdateError("IndicatorDisaggregateReport", args.input.id);
  }
}

async function deleteIndicatorDisaggregateReport(
  args: MutationDeleteIndicatorDisaggregateReportArgs,
  context: GraphQLContext
): Promise<IndicatorDisaggregateReportResult> {
  try {
    const indicator_disaggregate_report =
      await context.prisma.indicatorDisaggregateReport.delete({
        where: {
          id: args.input.id,
        },
      });
    return {
      __typename: "IndicatorDisaggregateReport",
      ...indicator_disaggregate_report,
    };
  } catch (error) {
    return getApiDeleteError("IndicatorDisaggregateReport", args.input.id);
  }
}

export {
  getIndicatorDisaggregateReport,
  getIndicatorDisaggregateReports,
  getIndicatorDisaggregateReportsByIndicatorDisaggregateId,
  createIndicatorDisaggregateReport,
  deleteIndicatorDisaggregateReport,
  updateIndicatorDisaggregateReport,
};
