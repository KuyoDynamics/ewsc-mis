import React from 'react';
import UserPendingInvitationList from 'components/users/user-pending-invitation-list';
import { Box, Typography } from '@mui/material';

function UserInvitations() {
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
      <UserPendingInvitationList />;
    </Box>
  );
}

export default UserInvitations;
