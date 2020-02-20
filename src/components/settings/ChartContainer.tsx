import React, { ReactElement, useCallback } from 'react';
import styled from 'styled-components';
import LineChart from '../charts/LineChart';
import BarChart from '../charts/BarChart';
import { getLabels } from '../charts/chartUtility';

const ChartContainerStyled = styled.div`
  width: 100%;
  padding: 0 15%;
  margin: 1% auto 0 auto;
  z-index: -1;
  @media (max-width: 500px) {
    width: 100%;
    padding: 0;
  }
`;

interface Props {
  tab: number;
  chartType: number;
  startDate: Date;
  endDate: Date;
}

const dummyData1 = [30, 20, 92, 94, 33, 68, 48];
const dummyData2 = [65, 59, 80, 81, 56, 55, 40];
const data = [dummyData1, dummyData2];

const ChartContainer = (props: Props): ReactElement => {
  const {
    tab, chartType, startDate, endDate,
  } = props;
  const selectContainer = useCallback(
    (tabNum: number, chart: number) => {
      const labels = getLabels(startDate, endDate, 7);
      const charts = [
        <LineChart labels={labels} data={data} />,
        <BarChart labels={labels} data={data} />,
      ];
      return tabNum === 0 ? charts[chart] : <div>Tweet関連画面</div>;
    },
    [endDate, startDate],
  );

  return (
    <ChartContainerStyled>
      {selectContainer(tab, chartType)}
    </ChartContainerStyled>
  );
};

export default ChartContainer;
