import React from 'react';
import { Bar } from 'react-chartjs-2';
import { getOptions, getLabels, LabelType } from './func';

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
const datasets = [
  barBaseDatasets([30, 20, 92, 94, 33, 68, 48], 'Favorite', 'red'),
  barBaseDatasets([65, 59, 80, 81, 56, 55, 40], 'Retweet', 'yellowgreen'),
];

interface Props {
  labelsType: LabelType;
}

const BarChart: React.FC<Props> = (props) => {
  const { labelsType } = props;
  const labels = getLabels(labelsType);
  const height = window.screen.width > 500
    ? (window.screen.height / window.screen.width) * 250
    : 330;

  return (
    <Bar
      data={{ labels, datasets }}
      height={height}
      options={options}
    />
  );
};

export default BarChart;
