import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import UserAccount from 'components/users/user-account';

function Account() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ mb: 3 }} variant="h4">
          Account
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs>
            <UserAccount />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Account;
