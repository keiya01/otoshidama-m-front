import styled, { keyframes } from 'styled-components';
import React from 'react';
import { LabelType } from './func';

const optionDown = keyframes`
  0% { transform: translateY(-450%); }
  100% { transform: translateY(0); }
`;

const ChartOperationList = styled.ul`
  background-color: #E6BF43;
  position: absolute;
  width: 60%;
  margin: 0 20%;
  top: 170px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 1px 2px 2px gray;
  border-radius: 7px;
  z-index: -1;
  animation: 1.3s ease 0s 1 ${optionDown}
`;

const ChartOperationItem = styled.li`
  color: #fff;
  font-weight: 500;
  text-shadow: none;
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
  setLabelsType: React.Dispatch<React.SetStateAction<LabelType>>;
}

const LabelsOperation: React.FC<Props> = (props) => (
  <ChartOperationList>
    <ChartOperationItem onClick={() => props.setLabelsType(LabelType.HALF_DAY)}>
      Half Day
    </ChartOperationItem>
    <ChartOperationItem onClick={() => props.setLabelsType(LabelType.DAY)}>
      Day
    </ChartOperationItem>
    <ChartOperationItem onClick={() => props.setLabelsType(LabelType.WEEK)}>
      Week
    </ChartOperationItem>
    <ChartOperationItem onClick={() => props.setLabelsType(LabelType.MONTH)}>
      Month
    </ChartOperationItem>
    <ChartOperationItem onClick={() => props.setLabelsType(LabelType.YEAR)}>
      Year
    </ChartOperationItem>
  </ChartOperationList>
);

export default LabelsOperation;
