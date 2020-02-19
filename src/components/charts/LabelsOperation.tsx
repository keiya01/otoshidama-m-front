import styled, { keyframes } from 'styled-components';
import React, { ReactElement } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const optionDown = keyframes`
  0% { transform: translateY(-650%); }
  100% { transform: translateY(0); }
`;

const LabelsOperationList = styled.ul`
  background-color: #E6BF43;
  position: absolute;
  width: 60%;
  margin: 0 20%;
  padding: 0.1% 0;
  top: 18%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 1px 2px 2px gray;
  border-radius: 7px;
  z-index: -1;
  animation: 1.3s ease 0s 1 ${optionDown};
  @media (max-width: 1024px){
    width: 70%;
    margin: 0 15%;
  }
  @media (max-width: 500px) {
    top: 22%;
    width: 90%;
    margin: 0 5%;
    padding: 2% 0;
    border-radius: 5px;
  }
`;

const LabelsOperationItem = styled.li`
  color: white;
  font-size: 2.2rem;
  margin: 0 5%;
  padding: 10px;
  transition: opacity .3s ease;
  cursor: pointer;
  & .react-datepicker {
    font-size: 1.3rem !important;
  }
  
  & .react-datepicker__current-month {
    font-size: 1.5rem !important;
  }
  
  & .react-datepicker__header {
    padding-top: 6px !important;
  }
  
  & .react-datepicker__navigation {
    top: 13px !important;
  }
  
  & .react-datepicker__day-name, .react-datepicker__day {
    margin: 0.5rem !important;
  }
  & input {
    font-size: 2.0rem;
    text-align: center;
    width: 150px;
    border-radius: 5px;
    border: solid thin #aeaeae;
    box-shadow: inset 0 2px 2px #e9e9e9;
    transition: opacity .3s ease;
    &:focus {
      outline: 0;
      border: solid thin #aeaeae;
      box-shadow: 0 0 5px gray;
    }
  }
  @media (max-width: 500px) {
    margin: 0 10px;
    padding: 0;
    & input {
      font-size: 1.5rem;
      width: 100px;
    }
  }
`;

interface Props {
  startDate: Date;
  endDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
}

const LabelsOperation = (props: Props): ReactElement => {
  const {
    startDate, endDate, setStartDate, setEndDate,
  } = props;
  const today = new Date();
  const filterDates = (date: Date) => date <= today;

  return (
    <LabelsOperationList>
      <LabelsOperationItem>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date === null ? new Date() : date);
          }}
          filterDate={filterDates}
        />
      </LabelsOperationItem>
      <LabelsOperationItem>to</LabelsOperationItem>
      <LabelsOperationItem>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date === null ? new Date() : date)}
          filterDate={filterDates}
        />
      </LabelsOperationItem>
    </LabelsOperationList>
  );
};

export default LabelsOperation;
