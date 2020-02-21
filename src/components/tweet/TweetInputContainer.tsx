import React, {
  ReactElement, useCallback,
} from 'react';
import styled from 'styled-components';
import InputForm from '../form/InputForm';
import { requestToAppServer } from '../../auth/request';

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

export enum SuccessErrorStatus {
  NONE = 0,
  SUCCESS = 1,
  ERROR = 2
}

interface Props {
  setStatus: React.Dispatch<React.SetStateAction<SuccessErrorStatus>>;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  callback: () => void;
}

const TweetInputContainer = (props: Props): ReactElement => {
  const { setErrorMsg, setStatus } = props;
  const errorHandling = useCallback(
    (err) => {
      setStatus(SuccessErrorStatus.ERROR);
      setErrorMsg(err);
    },
    [setErrorMsg, setStatus],
  );
  const handleOnClick = useCallback(
    () => {
      requestToAppServer(() => {}, errorHandling);
    },
    [errorHandling],
  );
  const handleOnChange = useCallback(
    () => {
      setStatus(SuccessErrorStatus.NONE);
      setErrorMsg('');
    },
    [setErrorMsg, setStatus],
  );

  return (
    <ContainerStyled>
      <InputForm
        label="企画のTweetURL"
        fontSize="3rem"
        width="40%"
        marginTop="5%"
        onChange={handleOnChange}
      />
      <br />
      <InputForm
        label="企画者のTwitterID"
        fontSize="3rem"
        width="40%"
        marginTop="5%"
        onChange={handleOnChange}
      />
      <br />
      <Button onClick={handleOnClick}>送信</Button>
    </ContainerStyled>
  );
};

export default TweetInputContainer;
