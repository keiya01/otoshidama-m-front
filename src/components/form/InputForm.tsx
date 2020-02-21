import React, {
  ReactElement, useRef, useState, useCallback, FocusEvent,
} from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div<{marginTop: string}>`
  position: relative;
  margin-top: ${({ marginTop }) => `${marginTop}`};
`;

const InputStyled = styled.input<{
  fontSize: string;
  width: string;
  marginTop: string;
  className: string;
}>`
  font-size: ${({ fontSize }) => `${fontSize}`};
  width: ${({ width }) => `${width}`};
  border: solid thin lightgray;
  outline: none;
  box-shadow: 0 0 1px gray;
  border-radius: 5px;
  &:focus {
    box-shadow: 0 0 4px gray;
  }
  & ~ label {
    top: ${({ className }) => (className !== '' ? '-85%' : '')};
    left: ${({ className }) => (className !== '' ? '30%' : '')};
    font-size: ${({ className, fontSize }) => (className !== '' ? `calc(${fontSize} - 1rem)` : '')};
    color: ${({ className }) => (className !== '' ? 'red' : '')};
  }
  &:focus ~ label {
    top: -85%;
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
  onChange?: () => void;
}

const InputForm = (props: Props): ReactElement => {
  const {
    label, fontSize, width, marginTop, onChange,
  } = props;
  const [inputClassName, setInputClassName] = useState('');
  const handleFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      if (e.currentTarget.value.length !== 0) {
        setInputClassName('focused');
      } else {
        setInputClassName('');
      }
    },
    [],
  );

  return (
    <ContainerStyled
      marginTop={marginTop}
    >
      <InputStyled
        className={inputClassName}
        autoComplete="off"
        marginTop={marginTop}
        fontSize={fontSize}
        width={width}
        onChange={onChange}
        onBlur={handleFocus}
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
