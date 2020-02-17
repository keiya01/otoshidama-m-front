import React from 'react';
import { Bar } from 'react-chartjs-2';

const barBaseDatasets = (data: number[], label: string, color: string) => ({
  label,
  backgroundColor: '#fff',
  borderColor: color,
  borderWidth: 1,
  data,
});


const datasets = [
  barBaseDatasets([30, 20, 92, 94, 33, 68, 48], 'Favorite', 'red'),
  barBaseDatasets([65, 59, 80, 81, 56, 55, 40], 'Retweet', 'yellowgreen'),
];

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const options = {
  title: {
    display: true,
    text: 'Chart.js Line Chart',
  },
  hover: {
    mode: 'label',
  },
  animation: {
    duration: 1000,
  },
};

const BarChart = () => (
  <Bar
    data={{ labels, datasets }}
    options={options}
  />
);

export default BarChart;
