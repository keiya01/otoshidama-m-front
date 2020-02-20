import React, { ReactElement } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import ErrorContainer from '../errors/ErrorContainer';

const ContainerStyled = styled.div`
  background-color: lightcyan;
  width: 100%;
  height: 100vh;
`;

type RouteProps = RouteComponentProps<{statusCode: string}>;
type Props = RouteProps;

const ErrorPage = (props: Props): ReactElement => {
  const { match } = props;
  const statusCode = +match.params.statusCode;
  return (
    <ContainerStyled>
      <ErrorContainer statusCode={statusCode} />
    </ContainerStyled>
  );
};

export default ErrorPage;
