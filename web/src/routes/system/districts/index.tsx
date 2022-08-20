import React from 'react';
import { Grid } from '@mui/material';
import DistrictList from 'components/districts/district-list';
import { gridSpacing } from 'theme/constants';

function Districts() {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <DistrictList />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={8} xs={12}>
            {/* District Chart Here */}
          </Grid>
          <Grid item lg={4} xs={12}>
            {/* Another District Chart Here */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Districts;
