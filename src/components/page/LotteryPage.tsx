import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #E6BF43;
`;

const LotteryPage: React.FC = () => (
  <Container>
    <Title>otoshidama-m</Title>
  </Container>
);

export default LotteryPage;
