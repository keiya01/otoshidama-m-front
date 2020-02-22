import React, { ReactElement, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Line, Bar } from 'react-chartjs-2';
import Chart from '../charts/Chart';
import { requestToAppServer } from '../../auth/request';

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
  data: number[];
}

const ChartContainer = (props: Props): ReactElement => {
  const {
    tab, chartType, startDate, endDate, data,
  } = props;
  const selectContainer = useCallback(
    (tabNum: number, chart: number) => {
      const charts = [
        <Chart
          data={data}
          IChartComponent={Line}
          labelsArgs={{ startDate, endDate, margin: 7 }}
        />,
        <Chart
          data={data}
          IChartComponent={Bar}
          labelsArgs={{ startDate, endDate, margin: 7 }}
        />,
      ];
      return tabNum === 0 ? charts[chart] : <div>Tweet関連画面</div>;
    },
    [data, endDate, startDate],
  );

  return (
    <ChartContainerStyled>
      {selectContainer(tab, chartType)}
    </ChartContainerStyled>
  );
};

export default ChartContainer;
