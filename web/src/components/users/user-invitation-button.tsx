import React, { useState } from 'react';
import { Pending } from '@mui/icons-material';
import { Alert, Fab, IconButton, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useReactiveVar } from '@apollo/client';
import { currentUserVar } from 'cache';
import UserPendingInvitationList from 'components/users/user-pending-invitation-list';
import { getUserInvitations } from 'utils';
import { useGetUserInvitationsQuery } from '../../../graphql/generated';
import { useNavigate } from 'react-router-dom';

interface IUserInvitationButtonProps {
  onClick: (event: any) => void;
}
function UserInvitationButton({ onClick }: IUserInvitationButtonProps) {
  const navigate = useNavigate();

  const currentUser = useReactiveVar(currentUserVar);

  const { loading, data, error } = useGetUserInvitationsQuery({
    fetchPolicy: 'network-only',
    variables: {
      args: {
        organisation_id: currentUser?.user_default_organisation?.id! || '',
      },
    },
  });

  const userInvitations = data?.user_invitations ?? null;

  const rows = userInvitations ? getUserInvitations(userInvitations) : [];

  console.log('rows', rows);

  const handleNavigate = () => navigate('/invitations', { state: rows });
  return (
    <>
      {rows.length > 0 && (
        <Alert
          variant="standard"
          severity="info"
          action={
            <IconButton
              aria-label="view invitations"
              color="inherit"
              onClick={handleNavigate}
            >
              <Pending />
            </IconButton>
          }
        >
          {`${rows.length} invitation(s) pending user action`}
        </Alert>
      )}
      <Tooltip title="Add user">
        <Fab
          size="small"
          color="primary"
          aria-label="invite user"
          sx={{ mr: '20px', ml: '20px' }}
          onClick={onClick}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
}

export default UserInvitationButton;
