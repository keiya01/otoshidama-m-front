import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';

interface SimpleSpinnerProps {
  color: string;
  borderWidth: number;
  size: number;
}

const setSpinnerStyle = ({ color, borderWidth, size }: SimpleSpinnerProps) => `
    border: ${borderWidth}px solid ${color};
    border-top: ${borderWidth}px solid transparent;
    width: ${size}px;
    height: ${size}px;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.span`
  display: inline-block;
  border-radius: 50%;
  animation: ${spin} 700ms linear infinite;
  ${setSpinnerStyle}
`;

export default function SimpleSpinner({
  color, borderWidth, size,
}: SimpleSpinnerProps): ReactElement {
  return <Spinner aria-label="loading spinner" color={color} borderWidth={borderWidth} size={size} />;
}
