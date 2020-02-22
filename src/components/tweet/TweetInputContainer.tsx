import React, {
  ReactElement, useCallback, useState, useRef,
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
  callback: (res: any) => void;
}

const getInputValue = (id: string): string => {
  const elem = document.querySelector(id) as HTMLInputElement;
  return elem.value;
};

type RequestType = {
  tweetId: string;
  twitterId: string;
};

const TweetInputContainer = (props: Props): ReactElement => {
  const { callback, setErrorMsg, setStatus } = props;
  const [tweetId, setTweetId] = useState('');
  const [twitterId, setTwitterId] = useState('');
  const twitterIdInputRef = useRef({} as HTMLInputElement);
  const tweetIdInputRef = useRef({} as HTMLInputElement);
  const errorHandling = useCallback(
    (err) => {
      setStatus(SuccessErrorStatus.ERROR);
      setErrorMsg(err);
    },
    [setErrorMsg, setStatus],
  );
  const handleOnClick = useCallback(
    () => {
      requestToAppServer<RequestType>(callback, errorHandling, {
        tweetId,
        twitterId,
      },
      'endpoint');
    },
    [callback, errorHandling, tweetId, twitterId],
  );
  const handleOnChangeTweeId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTweetId(e.currentTarget.value);
      setStatus(SuccessErrorStatus.NONE);
      setErrorMsg('');
    },
    [setErrorMsg, setStatus],
  );
  const handleOnChangeTwitterId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTwitterId(e.currentTarget.value);
      setStatus(SuccessErrorStatus.NONE);
      setErrorMsg('');
    },
    [setErrorMsg, setStatus],
  );

  return (
    <ContainerStyled>
      <InputForm
        value={tweetId}
        label="企画用ツイート"
        fontSize="3rem"
        width="40%"
        marginTop="5%"
        onChange={handleOnChangeTweeId}
        ref={tweetIdInputRef}
      />
      <br />
      <InputForm
        value={twitterId}
        label="企画者のTwitterID"
        fontSize="3rem"
        width="40%"
        marginTop="5%"
        onChange={handleOnChangeTwitterId}
        ref={twitterIdInputRef}
      />
      <br />
      <Button onClick={handleOnClick}>送信</Button>
    </ContainerStyled>
  );
};

export default TweetInputContainer;
