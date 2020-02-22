import React, { ReactElement, useMemo } from 'react';
import ChartComponent, { ChartComponentProps, Line } from 'react-chartjs-2';
import {
  getOptions, GetLabelsArguments, getChartData, lineBaseDatasets, barBaseDatasets,
} from './chartUtility';
import { DataType } from './DataType';

interface Props {
  data: DataType;
  labelsArgs: GetLabelsArguments;
  IChartComponent: new(props: ChartComponentProps) => ChartComponent<ChartComponentProps>;
}

const dummyData1 = [30, 20, 92, 94, 33, 68, 48];
const dummyData2 = [65, 59, 80, 81, 56, 55, 40];

const dummyData = [dummyData1, dummyData2];
const options = getOptions();

const Chart = (props: Props): ReactElement => {
  const { labelsArgs, IChartComponent, data } = props;
  const height = useMemo(() => (
    window.screen.width > 500
      ? (window.screen.height / window.screen.width) * 250
      : 330), []);
  const chartData = useMemo(() => {
    if (IChartComponent === Line) return getChartData(data, labelsArgs, lineBaseDatasets);
    return getChartData(data, labelsArgs, barBaseDatasets);
  }, [IChartComponent, data, labelsArgs]);

  return (
    <IChartComponent
      data={chartData}
      height={height}
      options={options}
    />
  );
};

export default Chart;
