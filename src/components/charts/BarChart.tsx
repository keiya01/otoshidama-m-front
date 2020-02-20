import React, { ReactElement, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { getOptions } from './chartUtility';

interface BaseDatasetsArguments {
  data: number[];
  label: string;
  color: string;
}

const barBaseDatasets = (args: BaseDatasetsArguments) => {
  const { data, label, color } = args;
  return {
    label,
    backgroundColor: '#fff',
    borderColor: color,
    borderWidth: 1,
    data,
  };
};

interface Props {
  labels: string[];
  data: number[][];
}

const options = getOptions();

const BarChart = (props: Props): ReactElement => {
  const { labels, data } = props;
  const height = useMemo(() => (
    window.screen.width > 500
      ? (window.screen.height / window.screen.width) * 250
      : 330), []);
  const datasets = [
    barBaseDatasets({
      data: data[0],
      label: 'お気に入り',
      color: 'red',
    }),
    barBaseDatasets({
      data: data[1],
      label: 'リツイート',
      color: 'yellowgreen',
    }),
  ];

  return (
    <Bar
      data={{ labels, datasets }}
      height={height}
      options={options}
    />
  );
};

export default BarChart;
