import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  flex: 1 0 0;
  font-weight: bold;
  font-size: 36px;
  line-height: 1;
  padding: 12px;
`;

const Header = (): React.ReactElement => {
  return (
    <Container>
      <Title>お年玉M</Title>
    </Container>
  );
};

export default Header;
