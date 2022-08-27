import React from 'react';
import { Grid } from '@mui/material';
import DisaggregateList from 'components/indicator_disaggregates/disaggregates/disaggregate-list';
import { gridSpacing } from 'theme/constants';

function Disaggregates() {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <DisaggregateList />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={8} xs={12}>
            {/* DisaggregateList Chart Here */}
          </Grid>
          <Grid item lg={4} xs={12}>
            {/* Another DisaggregateList Chart Here */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Disaggregates;
