import React, { ReactElement } from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  text-align: center;
`;

const StatusCode = styled.h1`
  font-size: 20rem;
  padding-top: 12%;
`;

const StatusMessage = styled.h2`
  font-size: 5rem;
  margin-top: 0%;
`;

enum ErrorType {
  ERROR_400 = 'Bad Request',
  ERROR_401 = 'Unauthorized',
  ERROR_403 = 'Forbidden',
  ERROR_404 = 'Not Found',
  ERROR_500 = 'Internal Server Error',
  ERROR_503 = 'Service Unavailable'
}

const getErrorMessage = (statusCode: number): string => {
  let result = ErrorType.ERROR_503;
  Object.entries(ErrorType).forEach(([key, value]) => {
    if (`ERROR_${statusCode.toString()}` === key) result = value;
  });
  return result;
};

interface Props {
  statusCode: number;
}

const ErrorContainer = (props: Props): ReactElement => {
  const { statusCode } = props;
  return (
    <ContainerStyled>
      <StatusCode>{statusCode}</StatusCode>
      <StatusMessage>
        {getErrorMessage(statusCode)}
      </StatusMessage>
    </ContainerStyled>
  );
};

export default ErrorContainer;
