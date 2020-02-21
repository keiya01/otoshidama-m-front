import React, {
  useRef, useEffect, ReactElement, useCallback,
} from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 1px 2px 4px #aaa;
  width: 80%;
  max-width: 350px;
  border-radius: 50%;
`;

const Title = styled.h1<{color: string}>`
  color: ${({ color }) => color};
  font-size: 6rem;
  font-weight: 900;
  text-shadow: 2px 2px 4px #aaa;
  writing-mode: vertical-rl;
  @media(max-width: 320px) {
    font-size: 5rem;
  }
`;

export interface ResultCardProps {
  isWinner?: boolean;
}

const ResultCard = ({ isWinner }: ResultCardProps): ReactElement => {
  const ref = useRef<HTMLDivElement | null>(null);
  const Result = useCallback(() => (isWinner ? (
    <>
      <Title color="#E6BF43">
        当選
        <span role="img" aria-label="party popper">&#x1f389;</span>
      </Title>
    </>
  ) : (
    <>
      <Title color="#4397e6">
        落選
        <span role="img" aria-label="loudly crying face">&#x1f62d;</span>
      </Title>
    </>
  )),
  [isWinner]);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = `${ref.current.clientWidth}px`;
    }
  }, [ref]);

  return (
    <TitleContainer ref={ref}>
      <Result />
    </TitleContainer>
  );
};

export default ResultCard;
