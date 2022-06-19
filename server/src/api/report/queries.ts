import {
  Report,
  ReportResult,
  MutationCreateReportArgs,
  MutationDeleteReportArgs,
  MutationUpdateReportArgs,
  QueryDisaggregate_OptionArgs,
} from "../../libs/resolvers-types";
import {
  getApiCreateError,
  getApiNotFoundError,
  getApiDeleteError,
  getApiUpdateError,
  GraphQLContext,
} from "../../utils";

async function getReports(context: GraphQLContext): Promise<Report[]> {
  const reports = await context.prisma.report.findMany({});
  return reports as Report[];
}

async function getReport(
  args: QueryDisaggregate_OptionArgs,
  context: GraphQLContext
): Promise<ReportResult> {
  try {
    const report = await context.prisma.report.findUnique({
      where: { id: args.id },
    });

    if (!report) {
      return getApiNotFoundError("Report", args.id);
    }
    return {
      __typename: "Report",
      ...report,
    } as ReportResult;
  } catch (error) {
    return getApiNotFoundError("Report", args.id, error);
  }
}

async function createReport(
  args: MutationCreateReportArgs,
  context: GraphQLContext
): Promise<ReportResult> {
  try {
    const report = await context.prisma.report.create({
      data: {
        reporting_period: args.input.reporting_period,
        reporting_period_start_date: args.input.reporting_period_start_date,
        reporting_period_end_date: args.input.reporting_period_end_date,
        report_due_date: args.input.report_due_date,
        reporting_date: args.input.reporting_date,
        report_type_id: args.input.report_type_id,
        catchment_district_id: args.input.catchment_district_id,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });

    return {
      __typename: "Report",
      ...report,
    } as ReportResult;
  } catch (error) {
    return getApiCreateError("Report", error);
  }
}

async function updateReport(
  args: MutationUpdateReportArgs,
  context: GraphQLContext
): Promise<ReportResult> {
  try {
    const report = await context.prisma.report.update({
      where: {
        id: args.input.id,
      },
      data: {
        reporting_period_start_date:
          args.input.update.reporting_period_start_date || undefined,
        reporting_period_end_date:
          args.input.update.reporting_period_end_date || undefined,
        report_due_date: args.input.update.report_due_date || undefined,
        last_modified_by: args.input.update ? context.user.email : undefined,
      },
    });
    return {
      __typename: "Report",
      ...report,
    } as ReportResult;
  } catch (error) {
    return getApiUpdateError("Report", args.input.id);
  }
}

async function deleteReport(
  args: MutationDeleteReportArgs,
  context: GraphQLContext
): Promise<ReportResult> {
  try {
    const report = await context.prisma.report.delete({
      where: {
        id: args.input.id,
      },
    });
    return {
      __typename: "Report",
      ...report,
    } as ReportResult;
  } catch (error) {
    return getApiDeleteError("Report", args.input.id);
  }
}

export { getReport, getReports, createReport, updateReport, deleteReport };
