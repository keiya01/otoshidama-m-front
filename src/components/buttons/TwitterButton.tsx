import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 90%;
  max-width: 240px;
  padding: 8px 0;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: #1da1f2;
  border-radius: 50px;
  border: none;
  color: #fff;
  line-height: 1.4;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(29, 161, 242, 0.6);
  }
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;

export interface TwitterButtonProps {
  onClick?: () => void;
}

const TwitterButton: React.FC<TwitterButtonProps> = ({ onClick }) => (
  <Button type="button" onClick={onClick}>
    Twitter認証をして
    <br />
    抽選結果を確認する
  </Button>
);

export default TwitterButton;
