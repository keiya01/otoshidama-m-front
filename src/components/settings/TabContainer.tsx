import React, {
  ReactElement, useCallback,
} from 'react';
import styled, { keyframes } from 'styled-components';
import GearImage from '../../assets/gear.svg';

const headerDown = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
`;

const TabContainerStyled = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  background-color: #e6bf43;
  box-shadow: 2px 2px 3px gray;
  animation: 0.7s ease 0s 1 ${headerDown};
  @media (max-width: 500px) {
    height: 50px;
  }
`;

const TabImage = styled.img`
  height: 60px;
  width: 60px;
  position: absolute;
  top: 10px;
  left: 20px;
  @media (max-width: 500px) {
    top: 10px; 
    left: 10px;
    width: 30px;
    height: 30px;
  }
`;

const TabList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TabItem = styled.li<{backgroundColor: string}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #fff;
  margin: 10px 50px;
  padding: 10px;
  font-size: 28px;
  transition: opacity .3s ease;
  border-radius: 10px;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    margin: 0 10px;
    font-size: 20px;
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
      setTab(tabNum);
    },
    [setTab],
  );
  const handleTabItemColor = useCallback(
    (tabNum: number) => {
      if (tabNum === tab) return 'orange';
      return 'none';
    },
    [tab],
  );

  return (
    <TabContainerStyled>
      <TabList>
        <TabImage src={GearImage} />
        <TabItem
          onClick={handleOnClick(0)}
          backgroundColor={handleTabItemColor(0)}
        >
          抽選状況
        </TabItem>
        <TabItem
          onClick={handleOnClick(1)}
          backgroundColor={handleTabItemColor(1)}
        >
          Tweet関連
        </TabItem>
      </TabList>
    </TabContainerStyled>
  );
};

export default TabContainer;
