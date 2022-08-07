import React from 'react';
import { Pending } from '@mui/icons-material';
import { Alert, Fab, IconButton, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import useGetUserInvitations from 'utils/hooks/use-get-user-invitations';

interface IUserInvitationButtonProps {
  onClick: (event: any) => void;
}
function UserInvitationButton({ onClick }: IUserInvitationButtonProps) {
  const navigate = useNavigate();

  const { count } = useGetUserInvitations('network-only');

  const handleNavigate = () => navigate('/admin/invitations');

  return (
    <>
      {count > 0 && (
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
          {`${count} invitation(s) pending user action`}
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
