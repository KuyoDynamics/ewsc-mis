import React from 'react';
import UserPendingInvitationList from 'components/users/user-pending-invitation-list';
import { Box, Typography } from '@mui/material';
import MainCard from 'components/cards/main-card';

function UserInvitations() {
  return (
    <MainCard>
      <UserPendingInvitationList />
    </MainCard>
  );
}

export default UserInvitations;
