import { Grid } from '@mui/material';
import CountryList from 'components/countries/country-list';
import React from 'react';
import { gridSpacing } from 'theme/constants';

function Countries() {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <CountryList />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={8} xs={12}>
            {/* Country Chart Here */}
          </Grid>
          <Grid item lg={4} xs={12}>
            {/* Another Country Chart Here */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Countries;
