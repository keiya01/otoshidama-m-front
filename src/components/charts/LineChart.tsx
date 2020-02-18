import React from 'react';
import { Line } from 'react-chartjs-2';
import { getLabels, LabelType, getOptions } from './func';

const lineBaseDatasets = (
  data: number[],
  label: string,
  color: string,
) => ({
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
  pointRadius: 2,
  pointHoverRadius: 5,
  pointHitRadius: 12,
  data,
});

const options = getOptions();
const datasets = [
  lineBaseDatasets([30, 20, 92, 94, 33, 68, 48], 'Favorite', 'red'),
  lineBaseDatasets([65, 59, 80, 81, 56, 55, 40], 'Retweet', 'yellowgreen'),
];

interface Props {
  labelsType: LabelType;
}

const LineChart: React.FC<Props> = (props) => {
  const { labelsType } = props;
  const labels = getLabels(labelsType);
  const height = window.screen.width > 500
    ? (window.screen.height / window.screen.width) * 250
    : 330;

  return (
    <Line
      data={{ labels, datasets }}
      height={height}
      options={options}
    />
  );
};

export default LineChart;
