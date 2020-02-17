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

const ChartContainer = styled.div`
  width: 70%;
  margin: 150px auto 0 auto;
`;

const Setting: React.FC = () => {
  const [tab, setTab] = useState(1);

  const selectContainer = (tabNum: number) => (tabNum === 1 ? <LineChart /> : <BarChart />);

  return (
    <div>
      <TabContainer>
        <TabList>
          <TabItem onClick={() => setTab(1)}>抽選状況</TabItem>
          <TabItem onClick={() => setTab(2)}>Tweet関連</TabItem>
        </TabList>
      </TabContainer>
      <ChartContainer>
        {selectContainer(tab)}
      </ChartContainer>
    </div>
  );
};

export default Setting;
