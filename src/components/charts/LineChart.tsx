import React from 'react';
import { Line } from 'react-chartjs-2';
import { getLabels, LabelType, getOptions } from './func';

const lineBaseDatasets = (data: number[], label: string, color: string) => ({
  label,
  fill: false,
  lineTension: 0.01,
  backgroundColor: '#fff',
  borderColor: color,
  pointBorderColor: color,
  pointHoverBorderColor: '#fff',
  pointBackgroundColor: '#fff',
  pointHoverBackgroundColor: color,
  pointBorderWidth: 7,
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHoverRadius: 5,
  pointHitRadius: 10,
  data,
});

const labels = getLabels(LabelType.MONTH);

const datasets = [
  lineBaseDatasets([30, 20, 92, 94, 33, 68, 48], 'Favorite', 'red'),
  lineBaseDatasets([65, 59, 80, 81, 56, 55, 40], 'Retweet', 'yellowgreen'),
];

const options = getOptions();

const LineChart = () => (
  <Line
    data={{ labels, datasets }}
    options={options}
  />
);

export default LineChart;