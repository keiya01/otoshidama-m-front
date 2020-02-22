import React, {
  ReactElement, useState, useMemo, useCallback,
} from 'react';
import styled from 'styled-components';
import CopyImage from '../../assets/copy.svg';
import TweetInputContainer, { SuccessErrorStatus } from '../tweet/TweetInputContainer';

const Container = styled.div`
  text-align: center;
  flex: 1 0 0;
`;

const ErrorMsg = styled.h3`
  color: red;
  margin-top: 5%;
  font-size: 2rem;
  height: 2rem;
`;

const URLBox = styled.div<{ status: SuccessErrorStatus }>`
  margin-top: 5%;
  display: ${({ status }) => (status === SuccessErrorStatus.SUCCESS ? '' : 'none')};
  & h5 {
    color: blue;
    display: inline-block;
    margin: 0 auto;
  }
`;

const UrlInput = styled.input`
  margin: 1% auto 0 auto;
  border: solid thin lightgray;
  border-radius: 4px;
  width: 40%;
  font-size: 2.2rem;
  outline: none;
  padding: 0 1.5em 0 0.3em;
`;

const Image = styled.img`
  position: relative;
  top: 0.2em;
  left: -1.7em;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const CopiedMessage = styled.h6<{isCopied: boolean}>`
  display: inline-block;
  visibility: ${({ isCopied }) => (isCopied ? '' : 'hidden')};
  position: relative;
  top: -2.2em;
  left: -4em;
`;

const c = 'abcdefghijklmnopqrstuvwxyz0123456789';
const createRandomStr = (): string => {
  const len = c.length;
  let res = '?';
  for (let i = 0; i < 50; i += 1) {
    res += c[Math.floor(Math.random() * len)];
  }
  return res;
};

const BASE_URL = 'http://base.origin/';

const TweetContainer = (): ReactElement => {
  const [status, setStatus] = useState(SuccessErrorStatus.NONE);
  const [errMsg, setErrorMsg] = useState('');
  const [isCopied, setCopied] = useState(false);
  const [url, setUrl] = useState(BASE_URL);
  const message = useMemo(() => (
    status === SuccessErrorStatus.ERROR ? errMsg : ''
  ), [errMsg, status]);
  const callback = useCallback(
    () => {
      setUrl(BASE_URL + createRandomStr());
      setStatus(SuccessErrorStatus.SUCCESS);
    },
    [],
  );
  const handleOnClick = useCallback(
    () => {
      const elem = document.querySelector('#url-input') as HTMLInputElement;
      elem.select();
      document.execCommand('copy');
      setCopied(true);
    },
    [],
  );
  return (
    <Container>
      <ErrorMsg>{message}</ErrorMsg>
      <TweetInputContainer
        callback={callback}
        setStatus={setStatus}
        setErrorMsg={setErrorMsg}
      />
      <URLBox status={status}>
        <h5>こちらが抽選画面のURLです。</h5>
        <br />
        <h5>こちらを企画用のツイートに含めてつぶやてください。</h5>
        <br />
        <UrlInput
          id="url-input"
          readOnly
          value={url}
        />
        <Image
          src={CopyImage}
          onClick={handleOnClick}
        />
        <CopiedMessage isCopied={isCopied}>
          Copied!
        </CopiedMessage>
      </URLBox>
    </Container>
  );
};

export default TweetContainer;
