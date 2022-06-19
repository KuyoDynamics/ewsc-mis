import {
  ReportTemplate,
  QueryReport_TemplateArgs,
  ReportTemplateResult,
  MutationCreateReportTemplateArgs,
  MutationUpdateReportTemplateArgs,
  MutationDeleteReportTemplateArgs,
} from "../../libs/resolvers-types";
import {
  getApiCreateError,
  getApiNotFoundError,
  getApiDeleteError,
  getApiUpdateError,
  GraphQLContext,
} from "../../utils";

async function getReportTemplates(
  context: GraphQLContext
): Promise<ReportTemplate[]> {
  return (await context.prisma.reportTemplate.findMany({})) as ReportTemplate[];
}

async function getReportTemplate(
  args: QueryReport_TemplateArgs,
  context: GraphQLContext
): Promise<ReportTemplateResult> {
  try {
    const report_template = await context.prisma.reportTemplate.findUnique({
      where: { id: args.id },
    });

    if (!report_template) {
      return getApiNotFoundError("ReportTemplate", args.id);
    }
    return {
      __typename: "ReportTemplate",
      ...report_template,
    } as ReportTemplateResult;
  } catch (error) {
    return getApiNotFoundError("ReportTemplate", args.id, error);
  }
}

async function createReportTemplate(
  args: MutationCreateReportTemplateArgs,
  context: GraphQLContext
): Promise<ReportTemplateResult> {
  try {
    const report_template = await context.prisma.reportTemplate.create({
      data: {
        type: args.input.type,
        name: args.input.name,
        frequency: args.input.frequency,
        window: args.input.window,
        created_by: context.user.email,
        last_modified_by: context.user.email,
      },
    });

    return {
      __typename: "ReportTemplate",
      ...report_template,
    } as ReportTemplateResult;
  } catch (error) {
    return getApiCreateError("ReportTemplate", error);
  }
}

async function updateReportTemplate(
  args: MutationUpdateReportTemplateArgs,
  context: GraphQLContext
): Promise<ReportTemplateResult> {
  try {
    const report_template = await context.prisma.reportTemplate.update({
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
      __typename: "ReportTemplate",
      ...report_template,
    } as ReportTemplateResult;
  } catch (error) {
    return getApiUpdateError("ReportTemplate", args.input.id);
  }
}

async function deleteReportTemplate(
  args: MutationDeleteReportTemplateArgs,
  context: GraphQLContext
): Promise<ReportTemplateResult> {
  try {
    const report_template = await context.prisma.reportTemplate.delete({
      where: {
        id: args.input.id,
      },
    });
    return {
      __typename: "ReportTemplate",
      ...report_template,
    } as ReportTemplateResult;
  } catch (error) {
    return getApiDeleteError("ReportTemplate", args.input.id);
  }
}

export {
  getReportTemplate,
  getReportTemplates,
  createReportTemplate,
  updateReportTemplate,
  deleteReportTemplate,
};
