import React, { ReactElement, ReactText, useState } from 'react';
import styled, { keyframes } from 'styled-components';

export interface ErrorAlertProps {
  isError: boolean;
  children: ReactText;
}

const fadein = keyframes`
  from {
    opacity: 0;
    display: block;
  }
  to {
    opacity: 1;
    display: block;
  }
`;

const fadeout = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    display: none;
  }
`;

const setAnimationName = ({
  startHideAnimation,
}: { startHideAnimation: boolean }) => (startHideAnimation ? fadeout : fadein);

const Alert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  background-color: #e82e54;
  animation: ${setAnimationName} ease-in 150ms forwards;
  position: relative;
  cursor: pointer;
`;

const CloseMessage = styled.p`
  position: absolute;
  right: 15px;
  font-size: 1.2rem;
  color: #fff;
`;

const Message = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  color: #fff;
`;

const ErrorAlert = ({ isError, children }: ErrorAlertProps): ReactElement | null => {
  const [isVisible, setIsVisible] = useState(isError);
  const [startHideAnimation, setStartHideAnimation] = useState(false);

  const handleOnHide = () => {
    setStartHideAnimation(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  return isVisible ? (
    <Alert startHideAnimation={startHideAnimation} onClick={handleOnHide}>
      <Message>{children}</Message>
      <CloseMessage>非表示</CloseMessage>
    </Alert>
  ) : null;
};

export default ErrorAlert;
