import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface AbsoluteBorderProps {
  borderColor: string;
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
  isVertical?: boolean;
}

const setBorderStyle = ({
  borderColor, top, right, bottom, left, isVertical,
}: AbsoluteBorderProps) => (
  `
    background-color: ${borderColor};
    top: ${top && `${top}px`};
    right: ${right && `${right}px`};
    bottom: ${bottom && `${bottom}px`};
    left: ${left && `${left}px`};
    ${isVertical ? 'height' : 'width'}: 10px;
  `
);

const Border = styled.div`
  position: absolute;
  ${setBorderStyle}
`;

const AbsoluteBorder = ({
  borderColor, top, right, bottom, left, isVertical,
}: AbsoluteBorderProps): ReactElement => (
  <Border
    borderColor={borderColor}
    top={top}
    right={right}
    bottom={bottom}
    left={left}
    isVertical={isVertical}
  />
);

export default AbsoluteBorder;
