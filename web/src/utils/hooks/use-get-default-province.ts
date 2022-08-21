import { CatchmentProvinceView } from '.../../../graphql/generated';
import useGetDefaultOrganisation from './use-get-default-organisation';

const useGetDefaultProvince = () => {
  const defaultUserOrganisation = useGetDefaultOrganisation();

  const catchmentProvinces = defaultUserOrganisation.catchment_provinces;

  const defaultProvinceId =
    defaultUserOrganisation.user_default_district?.province_id;

  const defaultUserProvince =
    catchmentProvinces?.find((p) => p.id === defaultProvinceId) ??
    catchmentProvinces?.[0];

  return defaultUserProvince as CatchmentProvinceView;
};

export default useGetDefaultProvince;
