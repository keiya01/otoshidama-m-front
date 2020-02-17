import React, { useState } from 'react';
import styled from 'styled-components';
import LineChart from '../charts/LineChart';
import BarChart from '../charts/BarChart';

const TabContainer = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  background-color: #E6BF43;
  box-shadow: 2px 2px 3px gray;
`;

const TabList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TabItem = styled.li`
  color: #fff;
  margin: 10px 50px;
  padding 10px;
  font-size: 28px;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

const ChartOperationList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ChartOperationItem = styled.li`
  color: #E6BF43;
  margin: 10px 50px;
  padding: 10px;
  font-size: 28px;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

const ChartContainer = styled.div`
  width: 70%;
  margin: 150px auto 0 auto;
`;

const Setting: React.FC = () => {
  const [tab, setTab] = useState(0);
  const [chartType, setChartType] = useState(0);
  const charts = [<LineChart />, <BarChart />];

  const selectContainer = (tabNum: number, chart: number) => (
    tabNum === 0 ? charts[chart] : <div>Tweet関連画面</div>
  );

  return (
    <div>
      <TabContainer>
        <TabList>
          <TabItem onClick={() => setTab(0)}>抽選状況</TabItem>
          <TabItem onClick={() => setTab(1)}>Tweet関連</TabItem>
        </TabList>
      </TabContainer>
      <ChartContainer>
        <ChartOperationList>
          <ChartOperationItem onClick={() => setChartType(0)}>線グラフ</ChartOperationItem>
          <ChartOperationItem onClick={() => setChartType(1)}>棒グラフ</ChartOperationItem>
        </ChartOperationList>
        {selectContainer(tab, chartType)}
      </ChartContainer>
    </div>
  );
};

export default Setting;
