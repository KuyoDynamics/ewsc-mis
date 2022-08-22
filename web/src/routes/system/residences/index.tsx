import React from 'react';
import { Grid } from '@mui/material';
import ResidenceList from 'components/residential-areas/residence-list';
import { gridSpacing } from 'theme/constants';

function Residences() {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <ResidenceList />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={8} xs={12}>
            {/* Residence Chart Here */}
          </Grid>
          <Grid item lg={4} xs={12}>
            {/* Another Residence Chart Here */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Residences;
