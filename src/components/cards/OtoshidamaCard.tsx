import React, { ReactElement, useCallback } from 'react';
import styled from 'styled-components';
import AbsoluteBorder from '../borders/AbsoluteBorder';
import TwitterButton from '../buttons/TwitterButton';
import SimpleSpinner from '../spinners/SimpleSpinner';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 0 8px #888;
  padding: 0 20px;
  height: 90%;
  max-height: 670px;
  width: 90%;
  max-width: 400px;
  position: relative;
`;

const VerticalContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  writing-mode: vertical-rl;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #555;
  font-weight: 900;
`;

const Icon = styled.span`
  padding-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 70px;
  @media (max-width: 350px) {
    margin-bottom: 50px;
  }
`;

const PlannerButton = styled.button`
  color: #1da1f2;
  font-size: 1.6rem;
  border: none;
  border-bottom: 1px solid #1da1f2;
  padding: 0 10px;
  margin-top: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Loading = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export interface OtoshidamaCardProps {
  loginForApplicant?: () => Promise<void>;
  loginForPlanner?: () => Promise<void>;
  fetching?: boolean;
}

const OtoshidamaCard = ({
  loginForApplicant, loginForPlanner, fetching,
}: OtoshidamaCardProps): ReactElement => {
  const AuthButton = useCallback((): ReactElement | null => (
    loginForApplicant && loginForPlanner ? (
      <ButtonContainer>
        <TwitterButton onClick={loginForApplicant} />
        <PlannerButton onClick={loginForPlanner}>企画者として登録する</PlannerButton>
      </ButtonContainer>
    ) : null), [loginForApplicant, loginForPlanner]);

  return (
    <>
      {
      fetching
    && (
    <Loading>
      <SimpleSpinner color="#fff" borderWidth={6} size={50} />
    </Loading>
    )
    }
      <Card>
        <AbsoluteBorder borderColor="#e6bf43" top={35} right={5} left={5} isVertical />
        <AbsoluteBorder borderColor="#ed514e" right={20} top={5} bottom={5} />
        <VerticalContent>
          <Title>
            お年玉-M
            <Icon role="img" aria-label="party popper">&#x1f389;</Icon>
          </Title>
        </VerticalContent>
        <AuthButton />
      </Card>
    </>
  );
};

export default OtoshidamaCard;
