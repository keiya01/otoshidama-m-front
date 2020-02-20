import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

const TitleContainer = styled.div`
  display: flex;
`;

const Title = styled.h1`
  color: #E6BF43;
  font-size: 5rem;
  font-weight: 900;
  text-shadow: 2px 2px 4px #aaa;
  margin: 0 20px;
`;

const ResultPage = (): ReactElement => (
  <Container>
    <TitleContainer>
      <Title>当</Title>
      <Title>選</Title>
    </TitleContainer>
  </Container>
);

export default ResultPage;
