import React, { ReactElement, useCallback } from 'react';
import styled from 'styled-components';
import CheckBoard from '../backgrounds/CheckBoard';
import OtoshidamaCard from '../cards/OtoshidamaCard';
import ErrorAlert from '../alerts/ErrorAlert';

const Container = styled(CheckBoard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const AlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export interface LotteryPageProps {
  login: () => Promise<void>;
  fetching: boolean;
  isError: boolean;
}

const LotteryPage = ({ login, fetching, isError }: LotteryPageProps): ReactElement => {
  const Alert = useCallback((): ReactElement | null => (isError
    ? (
      <AlertWrapper>
        <ErrorAlert isError={isError}>Twitter認証に失敗しました</ErrorAlert>
      </AlertWrapper>
    )
    : null
  ), [isError]);

  return (
    <Container>
      <Alert />
      <OtoshidamaCard login={login} fetching={fetching} />
    </Container>
  );
};

export default LotteryPage;
