import React, {
  useState, ReactElement, useCallback, useMemo,
} from 'react';
import styled from 'styled-components';
import TabContainer, { TabContainerProps } from '../settings/TabContainer';
import ContentContainer from '../settings/ContentContainer';
import TweetContainer from './TweetContainer';
import Header from '../header/Header';

const Contents = styled.div`
  display: flex;
  min-height: calc(100vh - 60px);
`;

const ContentWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 100;
`;

const today = new Date();
const pastDay = new Date(new Date().setDate(today.getDate() - 6));

const Settings = (): ReactElement => {
  const [tab, setTab] = useState(0);
  const [endDate, setEndDate] = useState(today);
  const [startDate, setStartDate] = useState(pastDay);
  const [showTab, setShowTab] = useState(false);

  const handleOnClick = useCallback(() => {
    setShowTab((prev) => !prev);
  }, []);

  const Tab = useCallback(({
    tab: _tab,
    setTab: _setTab,
  }: TabContainerProps): ReactElement | null => (showTab ? (
    <ContentWrapper onClick={handleOnClick}>
      <TabContainer tab={_tab} setTab={_setTab} />
    </ContentWrapper>
  )
    : null), [handleOnClick, showTab]);
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
      <Header onClick={handleOnClick} pageTitle="管理コンソール" />
      <Tab tab={tab} setTab={setTab} />
      <Contents>
        {Container}
      </Contents>
    </>
  );
};

export default Settings;
