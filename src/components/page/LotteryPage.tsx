import React, { ReactElement } from 'react';
import styled from 'styled-components';
import CheckBoard from '../backgrounds/CheckBoard';
import OtoshidamaCard from '../cards/OtoshidamaCard';

const Container = styled(CheckBoard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export interface LotteryPageProps {
  loginForApplicant: () => void;
  loginForPlanner: () => void;
}

const LotteryPage = ({
  loginForApplicant, loginForPlanner,
}: LotteryPageProps): ReactElement => (
  <Container>
    <OtoshidamaCard
      loginForApplicant={loginForApplicant}
      loginForPlanner={loginForPlanner}
    />
  </Container>
);

export default LotteryPage;
