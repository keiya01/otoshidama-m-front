import React, {
  ReactElement, useState, useCallback, useMemo,
} from 'react';
import styled from 'styled-components';
import InputForm from '../form/InputForm';
import { requestToAppServer } from '../../auth/request';

const ErrorMsg = styled.h3`
  color: red;
  margin-top: 10%;
  font-size: 2rem;
  height: 2rem;
`;

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

const TweetConnection = (): ReactElement => {
  const [isError, setError] = useState(false);
  const [errMsg, setErrorMsg] = useState('');

  const errorHandling = useCallback(
    (err) => {
      setError(true);
      setErrorMsg(err);
    },
    [],
  );
  const handleOnClick = useCallback(
    () => {
      requestToAppServer(() => {}, errorHandling);
    },
    [errorHandling],
  );
  const handleOnChange = useCallback(
    () => {
      setError(false);
      setErrorMsg('');
    },
    [],
  );
  const message = useMemo(() => (isError ? errMsg : ''), [errMsg, isError]);

  return (
    <ContainerStyled>
      <ErrorMsg>{message}</ErrorMsg>
      <InputForm
        label="企画のTweetURL"
        fontSize="3rem"
        width="40%"
        marginTop="1%"
        onChange={handleOnChange}
      />
      <br />
      <InputForm
        label="企画者のTwitterID"
        fontSize="3rem"
        width="40%"
        marginTop="10%"
        onChange={handleOnChange}
      />
      <br />
      <Button onClick={handleOnClick}>送信</Button>
    </ContainerStyled>
  );
};

export default TweetConnection;
