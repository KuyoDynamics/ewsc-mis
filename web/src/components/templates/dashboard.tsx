import React from 'react';
import { Grid } from '@mui/material';
import IndicatorUnitList from 'components/templates/indicator_units/indicator_unit-list';
import { gridSpacing } from 'theme/constants';
import { Outlet } from 'react-router-dom';

function IndicatorUnits() {
  return (
    <Outlet />
    // <Grid container spacing={gridSpacing}>
    //   <Grid item xs={12}>
    //     <IndicatorUnitList />
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Grid container spacing={gridSpacing}>
    //       <Grid item lg={8} xs={12}>
    //         {/* IndicatorUnit Chart Here */}
    //       </Grid>
    //       <Grid item lg={4} xs={12}>
    //         {/* Another IndicatorUnit Chart Here */}
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>
  );
}

export default IndicatorUnits;
