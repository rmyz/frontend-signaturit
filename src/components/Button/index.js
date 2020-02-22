import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

const Button = ({ title, bigMode, onClick }) => {
  return (
    <StyledButton bigMode={bigMode} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  bigMode: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
