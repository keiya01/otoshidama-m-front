import styled, { keyframes } from 'styled-components';
import React, {
  ReactElement, useMemo, useCallback,
} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePickerWrapper from '../datepicker/DatePickerWrapper';

const optionDown = keyframes`
  0% { transform: translateY(-650%); }
  100% { transform: translateY(0); }
`;

const LabelsOperationList = styled.ul`
  background-color: #E6BF43;
  width: 60%;
  margin: 1% 20% 0 20%;
  padding: 0.1% 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 1px 2px 2px gray;
  border-radius: 7px;
  z-index: -1;
  animation: 1.3s ease 0s 1 ${optionDown};
  @media (max-width: 1024px){
    width: 70%;
    margin: 3% 15% 0 15%;
  }
  @media (max-width: 500px) {
    width: 90%;
    margin: 5% 5% 0 5%;
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
  onChangeDate: () => void;
}

const LabelsOperation = (props: Props): ReactElement => {
  const {
    startDate, endDate, setStartDate, setEndDate, onChangeDate,
  } = props;
  const today = useMemo(() => new Date(), []);
  const filterDate = useCallback(
    (date: Date) => date <= today,
    [today],
  );
  const handleOnChange = useCallback(
    (whichDate: 'start' | 'end') => (date: Date) => {
      if (whichDate === 'start') setStartDate(date);
      if (whichDate === 'end') setEndDate(date);
      onChangeDate();
    },
    [onChangeDate, setEndDate, setStartDate],
  );

  return (
    <LabelsOperationList>
      <LabelsOperationItem>
        <DatePickerWrapper
          selected={startDate}
          onChange={handleOnChange('start')}
          filterDate={filterDate}
        />
      </LabelsOperationItem>
      <LabelsOperationItem>to</LabelsOperationItem>
      <LabelsOperationItem>
        <DatePickerWrapper
          selected={endDate}
          onChange={handleOnChange('end')}
          filterDate={filterDate}
        />
      </LabelsOperationItem>
    </LabelsOperationList>
  );
};

export default LabelsOperation;
