import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import LineChart from '../charts/LineChart';
import BarChart from '../charts/BarChart';
import ChartOperation from '../charts/ChartOperation';
import { LabelType } from '../charts/func';
import LabelsOperation from '../charts/LabelsOperation';
import GeerImage from '../../assets/geer.svg';

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
  animation: .7s ease 0s 1 ${headerDown};
  @media (max-width: 500px) {
    height: 50px;
  }
`;

const TabImage = styled.img`
  height: 60px;
  width: 60px;
  position: absolute;
  top: 10px;
  left: 20px;
  @media (max-width: 500px) {
    top: -5px; 
    left: 10px;
    width: 30px;
    height; 30px;
  }
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
  @media (max-width: 500px) {
    margin: 0 10px;
    font-size: 20px;
  }
`;

const ChartContainer = styled.div`
  position: absolute;
  bottom: 7%;
  width: 100%;
  padding: 0 15%;
  margin: 0 auto;
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

const Setting = () => {
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
          <TabImage src={GeerImage} />
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
