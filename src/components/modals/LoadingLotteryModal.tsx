import React, { ReactElement, useCallback, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadeout = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const fadeoutAnim = css`
  animation: ${fadeout} 500ms ease-in forwards;
`;

interface ModalProps {
  startAnimation: boolean;
  fetching: boolean;
}

const setModalAnimation = ({ startAnimation }: ModalProps) => (
  startAnimation && fadeoutAnim
);

const Modal = styled.div<ModalProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 100;
  padding: 0 15px;
  cursor: ${({ fetching }) => (fetching ? 'default' : 'pointer')};
  ${setModalAnimation}
`;

const flash = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
`;

const Message = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #E6BF43;
  animation: ${flash} 1s ease-in-out infinite;
`;

const LoadingContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 200px;
  padding-bottom: 25px;
  text-align: center;
`;

const LoadingMessage = styled.span`
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  animation: ${flash} 1.5s ease infinite;
`;

const loading = keyframes`
  0% {
    transform: translateX(0) rotate(0deg);
  }
  50% {
    transform: translateX(180px) rotate(360deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
`;

const LoadingBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #E6BF43;
  animation: ${loading} 3s ease-in-out infinite;
`;

export interface LoadingLotteryModalProps {
  fetching: boolean;
  onClick: () => void;
}

const LoadingLotteryModal = ({
  fetching,
  onClick,
}: LoadingLotteryModalProps): ReactElement | null => {
  const [isVisible, setIsVisible] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);
  const Content = useCallback(() => (fetching
    ? (
      <LoadingContainer>
        <LoadingMessage>抽選中...</LoadingMessage>
        <LoadingBorder />
      </LoadingContainer>
    )
    : <Message>タッチすると抽選結果が表示されます</Message>), [fetching]);
  const handleOnClick = useCallback(() => {
    if (fetching) return;
    setStartAnimation(true);
    setTimeout(() => {
      setIsVisible(false);
      onClick();
    }, 600);
  }, [fetching, onClick]);

  if (!isVisible) {
    return null;
  }

  return (
    <Modal fetching={fetching} onClick={handleOnClick} startAnimation={startAnimation}>
      <Content />
    </Modal>
  );
};

export default LoadingLotteryModal;
