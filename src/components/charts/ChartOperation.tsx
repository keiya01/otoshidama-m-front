import styled, { keyframes } from 'styled-components';
import React from 'react';

const optionDown = keyframes`
  0% { transform: translateY(-450%); }
  100% { transform: translateY(0); }
`;

const ChartOperationList = styled.ul`
  position: absolute;
  width: 60%;
  margin: 0 20%;
  top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 7px;
  z-index: -1;
  animation: 1s ease 0s 1 ${optionDown}
`;

const ChartOperationItem = styled.li`
  color: #E6BF43;
  font-weight: 500;
  text-shadow: 1px 2px 0 lightgray;
  margin: 0 50px;
  padding: 10px;
  font-size: 28px;
  transition: opacity .3s ease;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

interface Props {
  setChartType: React.Dispatch<React.SetStateAction<number>>;
}

const ChartOperation: React.FC<Props> = (props) => (
  <ChartOperationList>
    <ChartOperationItem onClick={() => props.setChartType(0)}>
      Line Chart
    </ChartOperationItem>
    <ChartOperationItem onClick={() => props.setChartType(1)}>
      Bar Chart
    </ChartOperationItem>
  </ChartOperationList>
);

export default ChartOperation;
