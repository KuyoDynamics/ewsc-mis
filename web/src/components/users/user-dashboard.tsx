import React from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  // Title,
  Tooltip,
  ChartDataLabels
  // Legend
);

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

function UserDashboard() {
  return (
    <div>
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
    </div>
  );
}

export default UserDashboard;
