/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react';
import DataTable, { HeadCellType } from 'components/data-table';
import UserPendingInvitationItem from 'components/users/user-pending-invitation-item';
import useGetUserInvitations from 'utils/hooks/use-get-user-invitations';
import { Box, Slide } from '@mui/material';
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
  const organisationName = rows[0]?.organisation_name ?? '';

  const { data: updatedInvite } = useOnUserInvitationUpdatedSubscription();

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

  const handleResend = async (selectedItems: readonly string[]) => {
    const operations = await Promise.allSettled(
      selectedItems.map((id) => {
        return sendUserInvitationEmail({
          variables: {
            input: {
              email: rows.find((item) => item.id === id)?.email ?? '',
              organisation_name: organisationName,
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
