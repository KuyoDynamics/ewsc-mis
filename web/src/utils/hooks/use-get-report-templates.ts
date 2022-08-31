import { useGetReportTemplatesQuery } from '../../../graphql/generated';

const useGetReportTemplates = () => {
  const { data } = useGetReportTemplatesQuery();

  return data.report_templates ?? [];
};

export default useGetReportTemplates;
