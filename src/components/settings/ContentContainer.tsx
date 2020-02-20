import React, { ReactElement, useState } from 'react';
import ChartContainer from './ChartContainer';
import ChartOperation from '../charts/ChartOperation';
import LabelsOperation from '../charts/LabelsOperation';

interface Props {
  tab: number;
  startDate: Date;
  endDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
}

const ContentContainer = (props: Props): ReactElement => {
  const {
    tab,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  } = props;
  const [chartType, setChartType] = useState(0);

  return (
    <>
      <ChartOperation setChartType={setChartType} />
      <LabelsOperation
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <ChartContainer
        tab={tab}
        chartType={chartType}
        startDate={startDate}
        endDate={endDate}
      />
    </>
  );
};

export default ContentContainer;
