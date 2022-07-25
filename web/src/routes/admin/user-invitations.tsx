import React from 'react';
import UserPendingInvitationList from 'components/users/user-pending-invitation-list';
import { useLocation } from 'react-router-dom';
import { IPendingUserInvitation } from 'components/users/user-pending-invitation-item';
import { Box, Typography } from '@mui/material';

function UserInvitations() {
  const location = useLocation();
  const userInvitations = location.state as IPendingUserInvitation[];
  return (
    <Box
      component="main"
      //   sx={{
      //     // flexGrow: 1,
      //     pt: 8,
      //     // pb: 5,
      //   }}
    >
      <Typography sx={{ mt: 3 }} variant="h4">
        User Invitations
      </Typography>
      <UserPendingInvitationList userInvitations={userInvitations} />;
    </Box>
  );
}

export default UserInvitations;
