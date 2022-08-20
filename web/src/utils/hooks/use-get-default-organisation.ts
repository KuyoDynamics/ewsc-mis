import { useReactiveVar } from '@apollo/client';
import { currentUserVar } from 'cache';
import { UserOrganisation } from '../../../graphql/generated';

const useGetDefaultOrganisation = () => {
  const currentUser = useReactiveVar(currentUserVar);

  return currentUser.user_default_organisation as UserOrganisation;
};

export default useGetDefaultOrganisation;
