import React from 'react';
import { Grid } from '@mui/material';
import UserList from 'components/users/user-list';
import { gridSpacing } from 'theme/constants';
import UsersBarChart from 'components/users/users-bar-chart';
import UsersReportSubmissionRate from 'components/users/users-report-submission-rate';

function Users() {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <UserList />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={8} xs={12}>
            <UsersBarChart />
          </Grid>
          <Grid item lg={4} xs={12}>
            <UsersReportSubmissionRate />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Users;
