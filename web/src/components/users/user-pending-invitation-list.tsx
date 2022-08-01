/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import DataTable, { HeadCellType } from 'components/data-table';
import UserPendingInvitationItem from 'components/users/user-pending-invitation-item';
import useGetUserInvitations from 'utils/hooks/use-get-user-invitations';
import {
  GetUserInvitationsDocument,
  useDeleteUserInvitationMutation,
  useOnUserInvitationUpdatedSubscription,
  useSendUserInvitationEmailMutation,
} from '../../../graphql/generated';

const headCells: HeadCellType[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Email Address',
  },
  {
    id: 'role',
    numeric: false,
    disablePadding: true,
    label: 'Organisation Role',
  },
  {
    id: 'created_at',
    numeric: false,
    disablePadding: true,
    label: 'Date invited',
  },
  {
    id: 'catchment_districts',
    numeric: false,
    disablePadding: true,
    label: 'User Districts',
  },
  {
    id: 'email_status',
    numeric: false,
    disablePadding: true,
    label: 'Email Status',
  },
];

function UserPendingInvitationList() {
  const { rows } = useGetUserInvitations('network-only');
  useOnUserInvitationUpdatedSubscription();

  const [deleteUserInvitation, { data, loading: deleting, error }] =
    useDeleteUserInvitationMutation();

  const [sendUserInvitationEmail] = useSendUserInvitationEmailMutation();

  const handleDelete = async (selectedItems: readonly string[]) => {
    const operations = await Promise.allSettled(
      selectedItems.map((id) => {
        return deleteUserInvitation({
          variables: {
            input: {
              id,
            },
          },
          refetchQueries: [GetUserInvitationsDocument],
        });
      })
    );
  };

  // TODO: figure out how to send email and org name
  const handleResend = async (selectedItems: readonly string[]) => {
    const operations = await Promise.allSettled(
      selectedItems.map((id) => {
        return sendUserInvitationEmail({
          variables: {
            input: {
              email: '',
              organisation_name: '',
              invitation_id: id,
            },
          },
          // refetchQueries: [GetUserInvitationsDocument],
        });
      })
    );
  };

  return (
    <DataTable
      rows={rows}
      headCells={headCells}
      ItemComponent={UserPendingInvitationItem}
      toolBarTitle="Pending User Invitations"
      handleDelete={handleDelete}
      handleResend={handleResend}
    />
  );
}

export default UserPendingInvitationList;
