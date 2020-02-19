import React, { useState } from 'react';
import ChartOperation from '../charts/ChartOperation';
import LabelsOperation from '../charts/LabelsOperation';
import TabContainer from '../setting/TabContainer';
import ChartContainer from '../setting/ChartContainer';

const today = new Date();
const pastDay = new Date(new Date().setDate(today.getDate() - 6));

const Setting = () => {
  const [tab, setTab] = useState(0);
  const [chartType, setChartType] = useState(0);
  const [endDate, setEndDate] = useState(today);
  const [startDate, setStartDate] = useState(pastDay);

  return (
    <>
      <TabContainer setTab={setTab} />
      <ChartContainer
        tab={tab}
        chartType={chartType}
        startDate={startDate}
        endDate={endDate}
      />
      <ChartOperation setChartType={setChartType} />
      <LabelsOperation
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    </>
  );
};

export default Setting;
