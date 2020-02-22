import React, { ReactElement, useState, useCallback } from 'react';
import styled from 'styled-components';

import ChartContainer from './ChartContainer';
import ChartOperation from '../charts/ChartOperation';
import LabelsOperation from '../charts/LabelsOperation';
import { requestToAppServer } from '../../auth/request';
import { DataType } from '../charts/DataType';

interface Props {
  tab: number;
  startDate: Date;
  endDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
}

const Container = styled.div`
  flex: 1 0 0;
`;

type RequestType = {
  startDate: Date;
  endDate: Date;
};

const defaultData: DataType = {
  likeCount: [],
  retweetCount: [],
  applicantCount: [],
};

const ContentContainer = (props: Props): ReactElement => {
  const {
    tab,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  } = props;
  const [chartType, setChartType] = useState(0);
  const [data, setData] = useState(defaultData);
  const fetchDate = useCallback(
    () => {
      requestToAppServer<RequestType>(
        (res) => { setData(res); },
        () => { setData(defaultData); },
        { startDate, endDate },
        '/fetch/data/endoint',
      );
    },
    [endDate, startDate],
  );

  return (
    <Container>
      <ChartOperation setChartType={setChartType} />
      <LabelsOperation
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        onChangeDate={fetchDate}
      />
      <ChartContainer
        tab={tab}
        chartType={chartType}
        startDate={startDate}
        endDate={endDate}
        data={data}
      />
    </Container>
  );
};

export default ContentContainer;
