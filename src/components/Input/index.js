import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, InputWrapper, StyledInput } from './styles';

const Input = ({ labelText, inputValue, onClearClick }) => {
  return (
    <Wrapper data-testid="inputWrapper">
      <label data-testid="labelInput">{labelText}</label>
      <InputWrapper>
        <StyledInput type="text" readOnly value={inputValue} />
        <button data-testid="clearButton" onClick={onClearClick}>
          CLEAR
        </button>
      </InputWrapper>
    </Wrapper>
  );
};

Input.propTypes = {
  labelText: PropTypes.string,
  inputValue: PropTypes.string,
  onClearClick: PropTypes.func,
};

export default Input;
