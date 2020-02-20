import React, { ReactElement } from 'react';
import styled from 'styled-components';
import OtoshidamaCard from '../cards/OtoshidamaCard';
import CheckBoard from '../backgrounds/CheckBoard';

const Container = styled(CheckBoard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const LotteryPage = (): ReactElement => (
  <Container>
    <OtoshidamaCard isAuth />
  </Container>
);

export default LotteryPage;
