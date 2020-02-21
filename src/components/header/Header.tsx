import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  position: relative;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px #F4C95A solid;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  color: #fff;
  z-index: 1000;
`;

const Title = styled.div`
  flex: 1 0 0;
  font-weight: bold;
  font-size: 20px;
  line-height: 1;
  padding: 20px;
`;

export type Props = {
  pageTitle: string;
};

const Header = ({ pageTitle }: Props): React.ReactElement => (
  <Container>
    <Title>
      お年玉M –
      {pageTitle}
    </Title>
  </Container>
);

export default Header;
