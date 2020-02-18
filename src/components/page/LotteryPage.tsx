import React from 'react';
import styled, { css } from 'styled-components';
import OtoshidamaCard from '../cards/OtoshidamaCard';

const BackgroundCheckBoard = css`
  background:
    linear-gradient(45deg, rgba(230, 192, 67, 0.5) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(230, 192, 67, 0.5) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(230, 192, 67, 0.5) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(230, 192, 67, 0.5) 75%);
  background-size: 180px 180px;
  background-position: 0 0, 0 90px, 90px -90px, -90px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  ${BackgroundCheckBoard}
`;

export interface LotteryPageProps {
  login: () => Promise<void>;
  fetching: boolean;
  isError: boolean;
}

const LotteryPage: React.FC<LotteryPageProps> = ({ login }) => (
  <Container>
    <OtoshidamaCard login={login} />
  </Container>
);

export default LotteryPage;
