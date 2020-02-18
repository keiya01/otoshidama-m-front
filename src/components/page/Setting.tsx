import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import LineChart from '../charts/LineChart';
import BarChart from '../charts/BarChart';
import ChartOperation from '../charts/ChartOperation';
import { LabelType } from '../charts/func';
import LabelsOperation from '../charts/LabelsOperation';

const headerDown = keyframes`
0% { transform: translateY(-100%); }
100% { transform: translateY(0); }
`;

const TabContainer = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  background-color: #E6BF43;
  box-shadow: 2px 2px 3px gray;
  animation: .7s ease 0s 1 ${headerDown}
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
  transition: opacity .3s ease;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

const ChartContainer = styled.div`
  width: 70%;
  margin: 230px auto 0 auto;
`;

const Setting: React.FC = () => {
  const [tab, setTab] = useState(0);
  const [chartType, setChartType] = useState(0);
  const [labelsype, setLabelsType] = useState(LabelType.WEEK);
  const charts = [<LineChart labelsType={labelsype} />, <BarChart labelsType={labelsype} />];

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
      <ChartOperation setChartType={setChartType} />
      <LabelsOperation setLabelsType={setLabelsType} />
      <ChartContainer>
        {selectContainer(tab, chartType)}
      </ChartContainer>
    </div>
  );
};

export default Setting;
