import React from 'react';
import { Bar } from 'react-chartjs-2';
import { getOptions, getLabels, LabelType } from './func';

const barBaseDatasets = (data: number[], label: string, color: string) => ({
  label,
  backgroundColor: '#fff',
  borderColor: color,
  borderWidth: 1,
  data,
});

const labels = getLabels(LabelType.WEEK);

const datasets = [
  barBaseDatasets([30, 20, 92, 94, 33, 68, 48], 'Favorite', 'red'),
  barBaseDatasets([65, 59, 80, 81, 56, 55, 40], 'Retweet', 'yellowgreen'),
];

const options = getOptions();

const BarChart = () => (
  <Bar
    data={{ labels, datasets }}
    options={options}
  />
);

export default BarChart;
