import React from 'react';
import { Pending } from '@mui/icons-material';
import { Alert, Fab, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useReactiveVar } from '@apollo/client';
import { currentUserVar } from 'cache';
import { useGetUserInvitationsQuery } from '../../../graphql/generated';

interface IUserInvitationButtonProps {
  onClick: (event: any) => void;
}
function UserInvitationButton({ onClick }: IUserInvitationButtonProps) {
  const currentUser = useReactiveVar(currentUserVar);

  const { loading, data, error } = useGetUserInvitationsQuery({
    variables: {
      args: {
        organisation_id: currentUser?.user_default_organisation?.id! || '',
      },
    },
  });

  const userInvitations = data?.user_invitations;

  return (
    <>
      {userInvitations && (
        <Alert
          variant="standard"
          severity="info"
          action={
            <IconButton aria-label="view invitations" color="inherit">
              <Pending />
            </IconButton>
          }
        >
          {`${userInvitations.length} invitation(s) pending user action`}
        </Alert>
      )}

      <Fab
        size="small"
        color="primary"
        aria-label="invite user"
        title="Add User"
        sx={{ mr: '20px', ml: '20px' }}
        onClick={onClick}
      >
        <AddIcon />
      </Fab>
    </>
  );
}

export default UserInvitationButton;
