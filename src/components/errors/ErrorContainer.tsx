import React, { ReactElement, useMemo } from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  text-align: center;
  color: #fff;
  text-shadow: 2px 2px 0 gray;
`;

const StatusCode = styled.h1`
  font-size: 20rem;
  padding-top: 12%;
`;

const StatusMessage = styled.h2<{fontSize: number; marginTop: number}>`
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  margin-top: ${({ marginTop }) => `${marginTop}%`};
`;

type ErrorMessageType = { enStatusMsg: string; jaStatusMsg: string };

const ErrorMessage = (
  enStatusMsg: string,
  jaStatusMsg: string,
): ErrorMessageType => ({ enStatusMsg, jaStatusMsg });

const errors = {
  ERROR_400: ErrorMessage('Bad Request', '要求の形式が正しくありません。'),
  ERROR_401: ErrorMessage('Unauthorized', '指定されたページまたはファイルへのアクセスが禁止されています。'),
  ERROR_403: ErrorMessage('Forbidden', '指定されたページまたはファイルへのアクセスが禁止されています。'),
  ERROR_404: ErrorMessage('Not Found', '指定されたページまたはファイルが存在しません。'),
  ERROR_500: ErrorMessage('Internal Server Error', 'Webサイトはページを表示できません。'),
  ERROR_503: ErrorMessage('Service Unavailable', 'Webサイトはページを表示できません。'),
};

const getErrorMessage = (statusCode: number): ErrorMessageType => {
  let result = errors.ERROR_404;
  Object.entries(errors).forEach(([key, value]) => {
    if (`ERROR_${statusCode.toString()}` === key) result = value;
  });
  return result;
};

const validateStatusCode = (statusCode: number): number => {
  if (Number.isNaN(statusCode)) return 404;
  return statusCode;
};

interface Props {
  code: number;
}

const ErrorContainer = (props: Props): ReactElement => {
  const { code } = props;
  const statusCode = useMemo(() => validateStatusCode(code), [code]);
  const { enStatusMsg, jaStatusMsg } = getErrorMessage(statusCode);
  return (
    <ContainerStyled>
      <StatusCode>{statusCode}</StatusCode>
      <StatusMessage
        fontSize={5}
        marginTop={0}
      >
        {enStatusMsg}
      </StatusMessage>
      <StatusMessage
        fontSize={3}
        marginTop={1}
      >
        {jaStatusMsg}
      </StatusMessage>
    </ContainerStyled>
  );
};

export default ErrorContainer;
