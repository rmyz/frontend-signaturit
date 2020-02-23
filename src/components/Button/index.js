import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

const Button = ({ title, bigMode, onClick, ...rest }) => {
  return (
    <StyledButton data-testid="button" bigMode={bigMode} onClick={onClick} {...rest}>
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
