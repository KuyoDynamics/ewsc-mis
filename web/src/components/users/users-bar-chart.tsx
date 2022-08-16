import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ColorHash from 'color-hash';
import MainCard from 'components/cards/main-card';
import { gridSpacing } from 'theme/constants';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  // Title,
  Tooltip,
  ChartDataLabels
  // Legend
);

const status = [
  {
    value: 'active',
    label: 'Active',
  },
  {
    value: 'disabled',
    label: 'Disabled',
  },
  {
    value: 'all',
    label: 'All',
  },
];

const options = {
  responsive: true,
  plugins: {
    // legend: {
    //   position: 'top' as const,
    // },
    // title: {
    //   display: true,
    //   text: 'User Dashboard',
    // },
    datalabels: {
      // eslint-disable-next-line prettier/prettier
      align: 'end',
      // eslint-disable-next-line prettier/prettier
      anchor: 'end',
    },
  },
};

const labels = ['Chipata', 'Lundazi', 'Chadiza', 'Mambwe'];

const colorHash = new ColorHash();

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => Math.round(Math.random() * 100)).sort(),
      // backgroundColor: 'rgba(255, 99, 132, 0.5)',
      backgroundColor: labels.map((label) => colorHash.hex(label)),
    },
  ],
};

function UsersBarChart() {
  const [value, setValue] = useState('active');
  return (
    <MainCard>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="subtitle2">Total Users</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3">2</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                id="standard-select-currency"
                select
                value={value}
                onChange={(e) => setValue(e.target.value)}
              >
                {status.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Bar
            options={{
              responsive: true,

              plugins: {
                // legend: {
                //   position: 'top' as const,
                // },
                // title: {
                //   display: true,
                //   text: 'User Dashboard',
                // },
                datalabels: {
                  align: 'end',
                  anchor: 'end',
                  clamp: true,
                  clip: false,
                },
              },
            }}
            data={data}
          />
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default UsersBarChart;
