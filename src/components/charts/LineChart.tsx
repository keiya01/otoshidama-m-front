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

interface Props {
  labelsType: LabelType;
  datas: number[][];
}

const LineChart: React.FC<Props> = (props) => {
  const { labelsType, datas } = props;
  const labels = getLabels(labelsType, datas[0].length);
  const height = window.screen.width > 500
    ? (window.screen.height / window.screen.width) * 250
    : 330;

  const datasets = [
    lineBaseDatasets(datas[0], 'Favorite', 'red'),
    lineBaseDatasets(datas[1], 'Retweet', 'yellowgreen'),
  ];

  return (
    <Line
      data={{ labels, datasets }}
      height={height}
      options={options}
    />
  );
};

export default LineChart;
