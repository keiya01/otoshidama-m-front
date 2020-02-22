import React, { useState, ReactElement, useMemo } from 'react';
import styled from 'styled-components';
import TabContainer from '../settings/TabContainer';
import ContentContainer from '../settings/ContentContainer';
import TweetContainer from './TweetContainer';
import Header from '../header/Header';

const Contents = styled.div`
  display: flex;
  min-height: calc(100vh - 60px);
`;

const today = new Date();
const pastDay = new Date(new Date().setDate(today.getDate() - 6));

const Settings = (): ReactElement => {
  const [tab, setTab] = useState(1);
  const [endDate, setEndDate] = useState(today);
  const [startDate, setStartDate] = useState(pastDay);
  const Container = useMemo(() => {
    if (tab === 0) {
      return (
        <ContentContainer
          tab={tab}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      );
    }
    return (
      <TweetContainer />
    );
  }, [endDate, startDate, tab]);

  return (
    <>
      <Header pageTitle="管理コンソール" />
      <Contents>
        <TabContainer tab={tab} setTab={setTab} />
        {Container}
      </Contents>
    </>
  );
};

export default Settings;
