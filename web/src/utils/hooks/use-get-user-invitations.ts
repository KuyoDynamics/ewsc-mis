import { useReactiveVar, FetchPolicy } from '@apollo/client';
import { currentUserVar } from 'cache';
import { getUserInvitations } from 'utils';
import { useGetUserInvitationsQuery } from '../../../graphql/generated';

const useGetUserInvitations = (fetchPolicy: FetchPolicy) => {
  const currentUser = useReactiveVar(currentUserVar);

  const organisationName = currentUser.user_default_organisation?.name ?? '';

  const { data } = useGetUserInvitationsQuery({
    fetchPolicy,
    variables: {
      args: {
        organisation_id: currentUser?.user_default_organisation?.id! || '',
      },
    },
    // pollInterval: 500,
  });

  const rows =
    getUserInvitations(data?.user_invitations ?? [], organisationName) ?? [];

  return {
    count: rows.length,
    rows,
  };
};

export default useGetUserInvitations;
