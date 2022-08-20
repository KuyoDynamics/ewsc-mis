import React from 'react';
import { Grid } from '@mui/material';
import ProvinceList from 'components/provinces/province-list';
import { gridSpacing } from 'theme/constants';

function Provinces() {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <ProvinceList />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={8} xs={12}>
            {/* Province Chart Here */}
          </Grid>
          <Grid item lg={4} xs={12}>
            {/* Another Province Chart Here */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Provinces;
