import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import UserSettings from 'components/admin/user-settings';

function AdminDashboard() {
  return (
    <Box
      component="main"
      sx={{
        // flexGrow: 1,
        py: 8,
      }}
    >
      <Typography sx={{ mb: 3 }} variant="h4">
        Admin Dashboard
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs>
            <UserSettings />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AdminDashboard;
