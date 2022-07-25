/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import DataTable, { HeadCellType } from 'components/data-table';
import UserPendingInvitationItem, {
  IPendingUserInvitation,
} from 'components/users/user-pending-invitation-item';

interface IUserPendingInvitationProps {
  userInvitations: IPendingUserInvitation[];
}

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
    label: 'Districts',
  },
  {
    id: 'email_status',
    numeric: false,
    disablePadding: true,
    label: 'Email Status',
  },
];

function UserPendingInvitationList({
  userInvitations,
}: IUserPendingInvitationProps) {
  return (
    <DataTable
      rows={userInvitations}
      headCells={headCells}
      ItemComponent={UserPendingInvitationItem}
      toolBarTitle="Pending User Invitations"
      // TableActionButton={UserInvitationButton}
      // tableActionButtonProps={{
      //   onClick: handleShowInvitationModal,
      // }}
    />
  );
}

export default UserPendingInvitationList;
