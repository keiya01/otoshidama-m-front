import React, { useRef, useEffect, ReactElement } from 'react';
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

const Title = styled.h1`
  color: #E6BF43;
  font-size: 6rem;
  font-weight: 900;
  text-shadow: 2px 2px 4px #aaa;
  margin: 0 20px;
  @media(max-width: 320px) {
    font-size: 5rem;
  }
`;

const ResultCard = (): ReactElement => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = `${ref.current.clientWidth}px`;
    }
  }, [ref]);

  return (
    <TitleContainer ref={ref}>
      <Title>当</Title>
      <Title>選</Title>
      <Title role="img" aria-label="party popper">&#x1f389;</Title>
    </TitleContainer>
  );
};

export default ResultCard;
