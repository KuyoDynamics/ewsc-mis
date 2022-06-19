import {
  ApiBatchPayloadResult,
  MutationCreateOrganisationReportTemplateArgs,
  MutationCreateOrganisationReportTemplatesArgs,
  MutationDeleteOrganisationReportTemplateArgs,
  OrganisationReportTemplate,
  OrganisationReportTemplateResult,
  QueryOrganisation_Report_TemplateArgs,
  QueryOrganisation_Report_TemplatesArgs,
} from "../../libs/resolvers-types";
import {
  getApiCreateError,
  getApiDeleteError,
  GraphQLContext,
  getApiBatchPayloadCreateError,
} from "../../utils";

async function getOrganisationReportTemplate(
  args: QueryOrganisation_Report_TemplateArgs,
  context: GraphQLContext
): Promise<OrganisationReportTemplate> {
  return (await context.prisma.organisationReportTemplate.findUnique({
    where: {
      id: args.id,
    },
  })) as OrganisationReportTemplate;
}

async function getOrganisationReportTemplates(
  args: QueryOrganisation_Report_TemplatesArgs,
  context: GraphQLContext
): Promise<OrganisationReportTemplate[]> {
  const organisation_report_templates =
    await context.prisma.organisationReportTemplate.findMany({
      where: { organisation_id: args.organisation_id },
    });
  return organisation_report_templates;
}

async function createOrganisationReportTemplate(
  args: MutationCreateOrganisationReportTemplateArgs,
  context: GraphQLContext
): Promise<OrganisationReportTemplateResult> {
  try {
    const organisation_report_template =
      await context.prisma.organisationReportTemplate.create({
        data: {
          organisation_id: args.input.organisation_id,
          report_template_id: args.input.report_template_id,
          created_by: context.user.email,
          last_modified_by: context.user.email,
        },
      });

    return {
      __typename: "OrganisationReportTemplate",
      ...organisation_report_template,
    };
  } catch (error) {
    return getApiCreateError("OrganisationReportTemplate", error);
  }
}

async function createOrganisationReportTemplates(
  args: MutationCreateOrganisationReportTemplatesArgs,
  context: GraphQLContext
): Promise<ApiBatchPayloadResult> {
  try {
    const data = args.input.report_template_ids.map((report_template_id) => ({
      report_template_id,
      organisation_id: args.input.organisation_id,
      created_by: context.user.email,
      last_modified_by: context.user.email,
    }));

    const result = await context.prisma.organisationReportTemplate.createMany({
      data,
      skipDuplicates: true,
    });

    return {
      __typename: "ApiBatchPayload",
      ...result,
    };
  } catch (error) {
    return getApiBatchPayloadCreateError("OrganisationReportTemplate", error);
  }
}

async function deleteOrganisationReportTemplate(
  args: MutationDeleteOrganisationReportTemplateArgs,
  context: GraphQLContext
): Promise<OrganisationReportTemplateResult> {
  try {
    const organisation_report_template =
      await context.prisma.organisationReportTemplate.delete({
        where: {
          id: args.input.id,
        },
      });
    return {
      __typename: "OrganisationReportTemplate",
      ...organisation_report_template,
    };
  } catch (error) {
    return getApiDeleteError("OrganisationReportTemplate", args.input.id);
  }
}

export {
  deleteOrganisationReportTemplate,
  createOrganisationReportTemplate,
  getOrganisationReportTemplate,
  getOrganisationReportTemplates,
  createOrganisationReportTemplates,
};
