import React, { ReactElement, useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { getOptions } from './chartUtility';

interface BaseDatasetsArguments {
  data: number[];
  label: string;
  color: string;
}

const lineBaseDatasets = (args: BaseDatasetsArguments) => {
  const { data, label, color } = args;
  return {
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
  };
};

interface Props {
  labels: string[];
  data: number[][];
}

const options = getOptions();

const LineChart = (props: Props): ReactElement => {
  const { labels, data } = props;
  const height = useMemo(() => (
    window.screen.width > 500
      ? (window.screen.height / window.screen.width) * 250
      : 330), []);
  const datasets = [
    lineBaseDatasets({
      data: data[0],
      label: 'お気に入り',
      color: 'red',
    }),
    lineBaseDatasets({
      data: data[1],
      label: 'リツイート',
      color: 'yellowgreen',
    }),
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
