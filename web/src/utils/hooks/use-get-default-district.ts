import { UserDistrict } from '.../../../graphql/generated';
import useGetDefaultOrganisation from './use-get-default-organisation';

const useGetDefaultDistrict = () => {
  const defaultUserOrganisation = useGetDefaultOrganisation();

  const defaultUserDistrict = defaultUserOrganisation.user_default_district;

  const defaultDistrict =
    defaultUserDistrict ?? defaultUserOrganisation.user_districts?.[0];

  return (defaultDistrict || {}) as UserDistrict;
};

export default useGetDefaultDistrict;
