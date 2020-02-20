import React, { ReactElement, useCallback } from 'react';
import styled from 'styled-components';
import { Line, Bar } from 'react-chartjs-2';
import Chart from '../charts/Chart';

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

const ChartContainer = (props: Props): ReactElement => {
  const {
    tab, chartType, startDate, endDate,
  } = props;
  const selectContainer = useCallback(
    (tabNum: number, chart: number) => {
      const charts = [
        <Chart
          IChartComponent={Line}
          labelsArgs={{ startDate, endDate, margin: 7 }}
        />,
        <Chart
          IChartComponent={Bar}
          labelsArgs={{ startDate, endDate, margin: 7 }}
        />,
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
