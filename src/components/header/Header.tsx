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
  padding: 0 15px;
`;

const Title = styled.div`
  flex: 1 0 0;
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 1;
  padding: 20px 0;
  text-align: center;
`;

const Menu = styled.span`
  color: #fff;
  font-size: 1.6rem;
  padding-left: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export type Props = {
  pageTitle: string;
  onClick: () => void;
};

const Header = ({ pageTitle, onClick }: Props): React.ReactElement => (
  <Container>
    <Menu onClick={onClick}>menu</Menu>
    <Title>
      お年玉M –
      {pageTitle}
    </Title>
  </Container>
);

export default Header;
