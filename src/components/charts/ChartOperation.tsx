import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';

const optionDown = keyframes`
  0% { transform: translateY(-650%); }
  100% { transform: translateY(0); }
`;

const ChartOperationList = styled.ul`
  position: absolute;
  width: 60%;
  margin: 0 20%;
  top: 12%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 7px;
  z-index: -1;
  animation: 1s ease 0s 1 ${optionDown};
  @media (max-width: 1024px) {
    width: 70%;
    margin: 0 15%;
  }
  @media (max-width: 500px) {
    top: 15%;
    width: 100%;
    margin: 0;
  }
`;

const ChartOperationItem = styled.li`
  color: #E6BF43;
  font-weight: 500;
  text-shadow: 1px 2px 0 lightgray;
  margin: 0 50px;
  padding: 10px;
  font-size: 2.2rem;
  transition: opacity .3s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  @media (max-width: 500px) {
    margin: 0 20px;
    padding: 0;
  }
`;

interface Props {
  setChartType: React.Dispatch<React.SetStateAction<number>>;
}

const ChartOperation = (props: Props): ReactElement => (
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
