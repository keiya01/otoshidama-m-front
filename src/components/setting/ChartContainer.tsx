import React, { ReactElement } from 'react';
import styled from 'styled-components';
import LineChart from '../charts/LineChart';
import BarChart from '../charts/BarChart';
import { getLabels } from '../charts/func';

const ChartContainerStyled = styled.div`
  position: absolute;
  bottom: 7%;
  width: 100%;
  padding: 0 15%;
  margin: 0 auto;
  z-index: -1;
  @media (max-width: 500px) {
    width: 100%;
    padding: 0;
  }
  @media (max-height: 850px) {
    bottom: 18%;
  }
  @media (max-height: 750px) {
    bottom: 7%;
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
const datas = [dummyData1, dummyData2];

const ChartContainer = (props: Props): ReactElement => {
  const {
    tab, chartType, startDate, endDate,
  } = props;
  const labels = getLabels(startDate, endDate, 7);
  const charts = [
    <LineChart labels={labels} datas={datas} />,
    <BarChart labels={labels} datas={datas} />,
  ];
  const selectContainer = (tabNum: number, chart: number) => (
    tabNum === 0 ? charts[chart] : <div>Tweet関連画面</div>
  );

  return (
    <ChartContainerStyled>
      {selectContainer(tab, chartType)}
    </ChartContainerStyled>
  );
};

export default ChartContainer;
