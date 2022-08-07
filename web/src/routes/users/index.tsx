import { Grid } from '@mui/material';
import React from 'react';
import { gridSpacing } from 'theme/constants';

function Users() {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            {/* <EarningCard isLoading={isLoading} /> */}
            <p>Hello 1</p>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            {/* <TotalOrderLineChartCard isLoading={isLoading} /> */}
            <p>Hello 2</p>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                {/* <TotalIncomeDarkCard isLoading={isLoading} /> */}
                <p>Hello 3</p>
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                {/* <TotalIncomeLightCard isLoading={isLoading} /> */}
                <p>Hello 4</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
            <p>Hello 5</p>
          </Grid>
          <Grid item xs={12} md={4}>
            {/* <PopularCard isLoading={isLoading} /> */}
            <p>Hello 6</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Users;
