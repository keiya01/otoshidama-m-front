import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import LineChart from '../charts/LineChart';
import BarChart from '../charts/BarChart';
import ChartOperation from '../charts/ChartOperation';
import GeerImage from '../../assets/geer.svg';
import LabelsOperation from '../charts/LabelsOperation';
import { getLabels } from '../charts/func';

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
  background-color: #e6bf43;
  box-shadow: 2px 2px 3px gray;
  animation: 0.7s ease 0s 1 ${headerDown};
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

const dummyData1 = [30, 20, 92, 94, 33, 68, 48];
const dummyData2 = [65, 59, 80, 81, 56, 55, 40];

const datas = [dummyData1, dummyData2];
const today = new Date();
const pastDay = new Date(new Date().setDate(today.getDate() - 6));

const Setting = () => {
  const [tab, setTab] = useState(0);
  const [chartType, setChartType] = useState(0);
  const [endDate, setEndDate] = useState(today);
  const [startDate, setStartDate] = useState(pastDay);
  const labels = getLabels(startDate, endDate, 7);
  const charts = [
    <LineChart labels={labels} datas={datas} />,
    <BarChart labels={labels} datas={datas} />,
  ];

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
      <ChartContainer>{selectContainer(tab, chartType)}</ChartContainer>
      <ChartOperation setChartType={setChartType} />
      <LabelsOperation
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    </div>
  );
};

export default Setting;
