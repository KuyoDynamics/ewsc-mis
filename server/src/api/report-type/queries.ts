import {
  ReportType,
  ReportTypeResult,
  MutationCreateReportTypeArgs,
  MutationDeleteReportTypeArgs,
  MutationUpdateReportTypeArgs,
  QueryDisaggregate_OptionArgs,
} from "../../libs/resolvers-types";
import {
  getApiCreateError,
  getApiNotFoundError,
  getApiDeleteError,
  getApiUpdateError,
  GraphQLContext,
} from "../../utils";

async function getReportTypes(context: GraphQLContext): Promise<ReportType[]> {
  const report_types = await context.prisma.reportType.findMany({});
  return report_types as ReportType[];
}

async function getReportType(
  args: QueryDisaggregate_OptionArgs,
  context: GraphQLContext
): Promise<ReportTypeResult> {
  try {
    const indicator_unit = await context.prisma.reportType.findUnique({
      where: { id: args.id },
    });

    if (!indicator_unit) {
      return getApiNotFoundError("ReportType", args.id);
    }
    return {
      __typename: "ReportType",
      ...indicator_unit,
    } as ReportTypeResult;
  } catch (error) {
    return getApiNotFoundError("ReportType", args.id, error);
  }
}

async function createReportType(
  args: MutationCreateReportTypeArgs,
  context: GraphQLContext
): Promise<ReportTypeResult> {
  try {
    const report_type = await context.prisma.reportType.create({
      data: {
        type: args.input.type,
        frequency: args.input.frequency,
        window: args.input.window,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });

    return {
      __typename: "ReportType",
      ...report_type,
    } as ReportTypeResult;
  } catch (error) {
    return getApiCreateError("ReportType", error);
  }
}

async function updateReportType(
  args: MutationUpdateReportTypeArgs,
  context: GraphQLContext
): Promise<ReportTypeResult> {
  try {
    const report_type = await context.prisma.reportType.update({
      where: {
        id: args.input.id,
      },
      data: {
        type: args.input.update.type || undefined,
        frequency: args.input.update.frequency || undefined,
        window: args.input.update.window || undefined,
        last_modified_by: args.input.update ? context.user.email : undefined,
      },
    });
    return {
      __typename: "ReportType",
      ...report_type,
    } as ReportTypeResult;
  } catch (error) {
    return getApiUpdateError("ReportType", args.input.id);
  }
}

async function deleteReportType(
  args: MutationDeleteReportTypeArgs,
  context: GraphQLContext
): Promise<ReportTypeResult> {
  try {
    const report_type = await context.prisma.reportType.delete({
      where: {
        id: args.input.id,
      },
    });
    return {
      __typename: "ReportType",
      ...report_type,
    } as ReportTypeResult;
  } catch (error) {
    return getApiDeleteError("ReportType", args.input.id);
  }
}

export {
  getReportType,
  getReportTypes,
  createReportType,
  updateReportType,
  deleteReportType,
};
