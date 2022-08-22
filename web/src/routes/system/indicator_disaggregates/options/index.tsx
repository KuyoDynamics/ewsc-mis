import React from 'react';
import { Grid } from '@mui/material';
import OptionsList from 'components/indicator_disaggregates/options/option-list';
import { gridSpacing } from 'theme/constants';

function Options() {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <OptionsList />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={8} xs={12}>
            {/* OptionsList Chart Here */}
          </Grid>
          <Grid item lg={4} xs={12}>
            {/* Another OptionsList Chart Here */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Options;
