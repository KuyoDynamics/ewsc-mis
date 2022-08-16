import React from 'react';
import { Box, Container, Grid, Skeleton } from '@mui/material';
import Logo from '../../../public/static/images/ewsc_logo.png';

function Dashboard() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            {/* <Budget /> */}
            <Box sx={{ width: 300, margin: '2rem' }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            {/* <TotalCustomers /> */}
            <Box sx={{ width: 300, margin: '2rem' }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            {/* <TasksProgress /> */}
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            {/* <TotalProfit sx={{ height: "100%" }} /> */}
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            {/* <Sales /> */}
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            {/* <TrafficByDevice sx={{ height: "100%" }} /> */}
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            {/* <LatestProducts sx={{ height: "100%" }} /> */}
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            {/* <LatestOrders /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// Dashboard.getLayout = (page) => (
//   <DashboardLayout>
//     {page}
//   </DashboardLayout>
// );

export default Dashboard;
