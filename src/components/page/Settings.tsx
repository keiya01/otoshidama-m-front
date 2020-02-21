import React, { useState, ReactElement } from 'react';
import styled from 'styled-components';
import TabContainer from '../settings/TabContainer';
import ContentContainer from '../settings/ContentContainer';
import Header from '../header/Header';

const Contents = styled.div`
  display: flex;
  min-height: calc(100vh - 60px);
`;

const today = new Date();
const pastDay = new Date(new Date().setDate(today.getDate() - 6));

const Settings = (): ReactElement => {
  const [tab, setTab] = useState(0);
  const [endDate, setEndDate] = useState(today);
  const [startDate, setStartDate] = useState(pastDay);

  return (
    <>
      <Header pageTitle="管理コンソール" />
      <Contents>
        <TabContainer tab={tab} setTab={setTab} />
        <ContentContainer
          tab={tab}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </Contents>

    </>
  );
};

export default Settings;
