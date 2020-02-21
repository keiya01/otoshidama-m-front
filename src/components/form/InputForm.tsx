import React, { ReactElement } from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  position: relative;
`;

const InputStyled = styled.input<{
  fontSize: string; width: string; marginTop: string;
}>`
  font-size: ${({ fontSize }) => `${fontSize}`};
  width: ${({ width }) => `${width}`};
  margin-top: ${({ marginTop }) => `${marginTop}`};
  border: solid thin lightgray;
  outline: none;
  box-shadow: 0 0 1px gray;
  border-radius: 5px;
  &:focus {
    box-shadow: 0 0 4px gray;
  }
  &:focus ~ label {
    top: -17%;
    left: 30%;
    font-size: ${({ fontSize }) => `calc(${fontSize} - 1rem)`};
    color: red;
  }
`;

const LabelStyled = styled.label<{
  marginTop: string; fontSize: string;
}>`
  color: gray;
  position: absolute;
  top: 0;
  left: 31%;
  font-size: ${({ fontSize }) => `calc(${fontSize} - 0.5rem)`};
  margin-top: ${({ marginTop }) => `${marginTop}`};
  transition:
    left .3s ease-in-out,
    top .3s ease-in-out,
    font-size .3s ease-in-out,
    color .3s ease-in-out
`;

interface Props {
  label: string;
  fontSize: string;
  width: string;
  marginTop: string;
}

const InputForm = (props: Props): ReactElement => {
  const {
    label, fontSize, width, marginTop,
  } = props;
  return (
    <ContainerStyled>
      <InputStyled
        marginTop={marginTop}
        fontSize={fontSize}
        width={width}
      />
      <LabelStyled
        fontSize={fontSize}
        marginTop={marginTop}
      >
        {label}
      </LabelStyled>
    </ContainerStyled>
  );
};

export default InputForm;
