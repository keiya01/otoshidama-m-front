import React from 'react';
import { Bar } from 'react-chartjs-2';
import { getOptions } from './func';

const barBaseDatasets = (
  data: number[],
  label: string,
  color: string,
) => ({
  label,
  backgroundColor: '#fff',
  borderColor: color,
  borderWidth: 1,
  data,
});

const options = getOptions();

interface Props {
  labels: string[];
  datas: number[][];
}

const BarChart: React.FC<Props> = (props) => {
  const { labels, datas } = props;
  const height = window.screen.width > 500
    ? (window.screen.height / window.screen.width) * 250
    : 330;

  const datasets = [
    barBaseDatasets(datas[0], 'Favorite', 'red'),
    barBaseDatasets(datas[1], 'Retweet', 'yellowgreen'),
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
