import { useReactiveVar, FetchPolicy } from '@apollo/client';
import { currentUserVar } from 'cache';
import { getUserInvitations } from 'utils';
import { useGetUserInvitationsQuery } from '../../../graphql/generated';

const useGetUserInvitations = (fetchPolicy: FetchPolicy) => {
  const currentUser = useReactiveVar(currentUserVar);

  const { data } = useGetUserInvitationsQuery({
    fetchPolicy,
    variables: {
      args: {
        organisation_id: currentUser?.user_default_organisation?.id! || '',
      },
    },
    // pollInterval: 500,
  });

  const rows = getUserInvitations(data?.user_invitations ?? []) ?? [];

  return {
    count: rows.length,
    rows,
  };
};

export default useGetUserInvitations;
