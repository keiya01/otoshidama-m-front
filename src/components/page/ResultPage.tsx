import React, {
  ReactElement, useCallback, useState, useEffect,
} from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import CheckBoard from '../backgrounds/CheckBoard';
import OtoshidamaCard from '../cards/OtoshidamaCard';
import ResultCard from '../cards/ResultCard';
import LoadingLotteryModal from '../modals/LoadingLotteryModal';
import getCampaignResult from '../../services/campaignResultService';

const Container = styled(CheckBoard)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const slide = keyframes`
  0% {
    transform: translateY(0) rotate(0deg) translateX(0);
  }
  20% {
    transform: translateY(25%) rotate(7deg) translateX(-35px);
  }
  40% {
    transform: translateY(20%) rotate(6deg) translateX(-30px);
  }
  100% {
    transform: translateY(150%) rotate(35deg) translateX(-250px);
  }
`;

const slideAnim = css`
  animation: ${slide} 3s ease-out forwards;
`;

const setCardAnimation = ({ startAnimation }: { startAnimation: boolean }) => (
  startAnimation && slideAnim
);

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 1;
  ${setCardAnimation}
`;

const ResultPage = (): ReactElement => {
  const [fetching, setFetching] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const { campaign_id: campaignID } = useParams(); // eslint-disable-line
  const history = useHistory();
  const handleOnClick = useCallback(() => {
    setStartAnimation(true);
  }, [setStartAnimation]);

  useEffect(() => {
    const fetchWinner = async () => {
      if (!campaignID) {
        history.push('/error/404');
        return;
      }
      const resIsWinner = await getCampaignResult(campaignID);
      setIsWinner(resIsWinner);
      setFetching(false);
    };
    setFetching(true);
    fetchWinner();
  }, [history, campaignID]);

  return (
    <Container>
      <CardWrapper startAnimation={startAnimation}>
        <OtoshidamaCard />
      </CardWrapper>
      <ResultCard isWinner={isWinner} />
      <LoadingLotteryModal fetching={fetching} onClick={handleOnClick} />
    </Container>
  );
};

export default ResultPage;
