import React, {
  ReactElement, useCallback, useRef, MouseEvent,
} from 'react';
import styled, { keyframes } from 'styled-components';
import GeerImage from '../../assets/geer.svg';

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
  top: -5px; 
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

const TabItem = styled.li`
color: #fff;
margin: 10px 50px;
padding: 10px;
font-size: 28px;
transition: opacity .3s ease;
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
  setTab: React.Dispatch<React.SetStateAction<number>>;
}

const TabContainer = (props: Props): ReactElement => {
  const { setTab } = props;
  const lotteryStatusRef = useRef(null);
  const tweetRef = useRef(null);
  const handleOnClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (e.currentTarget === lotteryStatusRef.current) setTab(0);
      if (e.currentTarget === tweetRef.current) setTab(1);
    },
    [setTab],
  );

  return (
    <TabContainerStyled>
      <TabList>
        <TabImage src={GeerImage} />
        <TabItem
          onClick={handleOnClick}
          ref={lotteryStatusRef}
        >
          抽選状況
        </TabItem>
        <TabItem
          onClick={handleOnClick}
          ref={tweetRef}
        >
          Tweet関連
        </TabItem>
      </TabList>
    </TabContainerStyled>
  );
};

export default TabContainer;
