import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import UserAccount from 'components/users/user-account';
import MainCard from 'components/cards/main-card';

function Account() {
  return (
    <MainCard>
      <UserAccount />
    </MainCard>
  );
}

export default Account;
