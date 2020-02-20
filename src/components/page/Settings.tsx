import React, { useState, ReactElement } from 'react';
import TabContainer from '../settings/TabContainer';
import ContentContainer from '../settings/ContentContainer';

const today = new Date();
const pastDay = new Date(new Date().setDate(today.getDate() - 6));

const Settings = (): ReactElement => {
  const [tab, setTab] = useState(0);
  const [endDate, setEndDate] = useState(today);
  const [startDate, setStartDate] = useState(pastDay);

  return (
    <>
      <TabContainer setTab={setTab} />
      <ContentContainer
        tab={tab}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    </>
  );
};

export default Settings;
