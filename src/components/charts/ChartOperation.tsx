import React, { ReactElement, useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faChartLine } from '@fortawesome/free-solid-svg-icons';

const List = styled.div`
  display: flex;
  justify-content: space-between;
  width: 104px;
  margin: 16px;
`;

type ItemProps = {
  isSelected: boolean;
};
const Item = styled.div<{ isSelected: boolean }>`
  font-size: 32px;
  line-height: 1;
  width: 32px;
  padding: 8px;
  box-sizing: content-box;
  text-align: center;
  flex: 0 0 auto;
  border-radius: 2px;
  background-color: ${({ isSelected }: ItemProps) => (isSelected ? '#f4c95a' : '#ddd')};
  color: #fff;
`;
interface Props {
  setChartType: React.Dispatch<React.SetStateAction<number>>;
  chartType: number;
}

const ChartOperation = (props: Props): ReactElement => {
  const { setChartType, chartType } = props;
  const handleOnClick = useCallback(
    (n: number) => () => {
      setChartType(n);
    },
    [setChartType],
  );

  const isSelected = useCallback((n: number) => n === chartType, [chartType]);

  return (
    <List>
      <Item onClick={handleOnClick(0)} isSelected={isSelected(0)}>
        <FontAwesomeIcon icon={faChartLine} />
      </Item>
      <Item onClick={handleOnClick(1)} isSelected={isSelected(1)}>
        <FontAwesomeIcon icon={faChartBar} />
      </Item>
    </List>
  );
};

export default ChartOperation;
