import React, {
  ReactElement, useState, useCallback, FocusEvent, FormEvent, MouseEvent,
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
  isFocused: boolean;
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
    top: ${({ isFocused }) => (isFocused ? '-85%' : '')};
    left: ${({ isFocused }) => (isFocused ? '30%' : '')};
    font-size: ${({ isFocused, fontSize }) => (isFocused ? `calc(${fontSize} - 1rem)` : '')};
    color: ${({ isFocused }) => (isFocused ? 'red' : '')};
  }
  &:focus ~ label {
    top: -85%;
    left: 30%;
    font-size: ${({ fontSize }) => `calc(${fontSize} - 1rem)`};
    color: red;
  }
`;

const LabelStyled = styled.label<{
  marginTop: string;
  fontSize: string;
}>`
  cursor: text;
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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref: React.MutableRefObject<HTMLInputElement>;
  value: string;
}

const InputForm = (props: Props): ReactElement => {
  const [isFocused, setFocused] = useState(false);
  const {
    label,
    fontSize,
    width,
    marginTop,
    onChange,
    ref,
    value,
  } = props;
  const handleFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      if (e.currentTarget.value.length !== 0) {
        setFocused(true);
      } else {
        setFocused(false);
      }
    },
    [],
  );
  const handleOnClick = useCallback(
    () => {
      setFocused(true);
    },
    [],
  );

  return (
    <ContainerStyled
      marginTop={marginTop}
    >
      <InputStyled
        value={value}
        isFocused={isFocused}
        autoComplete="off"
        marginTop={marginTop}
        fontSize={fontSize}
        width={width}
        onChange={onChange}
        onBlur={handleFocus}
        ref={ref}
      />
      <LabelStyled
        fontSize={fontSize}
        marginTop={marginTop}
        onClick={handleOnClick}
      >
        {label}
      </LabelStyled>
    </ContainerStyled>
  );
};

export default InputForm;
