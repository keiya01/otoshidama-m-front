import React, { ReactElement } from 'react';
import styled from 'styled-components';
import InputForm from '../form/InputForm';

const ContainerStyled = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin-top: 4%;
  margin-left: 30%;
  padding: 8px 30px;
  font-size: 2rem;
  cursor: pointer;
  border: none;
  color: #fff;
  background-color: #E6BF43;
  outline: none;
  border-radius: 5px;
  &:hover {
    opacity: 0.6;
  }
`;

const TweetConnection = (): ReactElement => (
  <ContainerStyled>
    <InputForm
      label="企画のTweetURL"
      fontSize="3rem"
      width="40%"
      marginTop="10%"
    />
    <br />
    <InputForm
      label="企画者のTwitterID"
      fontSize="3rem"
      width="40%"
      marginTop="10%"
    />
    <br />
    <Button>送信</Button>
  </ContainerStyled>
);

export default TweetConnection;
