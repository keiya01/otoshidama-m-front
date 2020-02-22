import React, { ReactElement, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

const TabList = styled.ul`
  display: block;
  position: relative;
  background-color: #fafafa;
  border-left: 1px #ddd solid;
  width: 300px;
  padding: 12px 0;
  flex: 0 0 auto;
`;

const TabItem = styled.li<{ isSelected: boolean }>`
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.6)};
  cursor: pointer;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 1.5;
  color: #666;

  &:hover {
    opacity: 0.6;
  }
`;

interface Props {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}

const TabContainer = (props: Props): ReactElement => {
  const { tab, setTab } = props;

  const handleOnClick = useCallback(
    (tabNum: number) => () => {
      setTab(tabNum);
    },
    [setTab],
  );

  const isSelected = useCallback((tabNum: number) => tab === tabNum, [tab]);

  return (
    <TabList>
      <TabItem onClick={handleOnClick(0)} isSelected={isSelected(0)}>
        抽選状況
      </TabItem>
      <TabItem onClick={handleOnClick(1)} isSelected={isSelected(1)}>
        Tweet関連
      </TabItem>
    </TabList>
  );
};

export default TabContainer;
