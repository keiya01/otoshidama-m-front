import React, { ReactElement } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

const DatePickerStyled = styled.div`
  & .react-datepicker {
    font-size: 2.0rem !important;
  }
  & .react-datepicker__current-month {
    font-size: 2.2rem !important;
  }
  & .react-datepicker__header {
    padding-top: 6px !important;
  }
  & .react-datepicker__navigation {
    top: 13px !important;
  }
  & .react-datepicker__day-name, 
    .react-datepicker__day {
    margin: 1rem !important;
    width: 2.2rem;
  }
  & .react-datepicker__day--selected {
    background-color: #E6BF43 !important;
    outline: none;
  }
  @media (max-width: 500px) {
    & .react-datepicker {
    font-size: 1.3rem !important;
    }
    & .react-datepicker__current-month {
      font-size: 1.5rem !important;
    }
    & .react-datepicker__day-name, 
      .react-datepicker__day {
      margin: 0.5rem !important;
      width: 1.6rem;
    }
    & .react-datepicker-popper {
      left: -50px !important;
    }
    & .react-datepicker__triangle {
      left: 40% !important;
    }
  }
`;

interface Props {
  selected: Date;
  onChange: (date: Date) => void;
  filterDate: (date: Date) => boolean;
}

const DatePickerWrapper = (props: Props): ReactElement => {
  const {
    selected, onChange, filterDate,
  } = props;
  return (
    <DatePickerStyled>
      <DatePicker
        selected={selected}
        onChange={onChange}
        filterDate={filterDate}
        showYearDropdown
        yearDropdownItemNumber={3}
        showMonthDropdown
        useShortMonthInDropdown
        shouldCloseOnSelect={false}
      />
    </DatePickerStyled>
  );
};

export default DatePickerWrapper;
