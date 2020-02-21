import React, { useState, ReactElement, useMemo } from 'react';
import styled from 'styled-components';
import TabContainer from '../settings/TabContainer';
import ContentContainer from '../settings/ContentContainer';
import TweetContainer from './TweetContainer';

const SettingsStyled = styled.div`
  padding-top: 80px;
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
    <SettingsStyled>
      <TabContainer tab={tab} setTab={setTab} />
      {Container}
    </SettingsStyled>
  );
};

export default Settings;
