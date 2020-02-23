import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, StyledSpan } from './styles';

const Historical = ({ history }) => {
  const renderHistory = () => {
    return history.map((item, key) => {
      return <StyledSpan key={key}>{item}</StyledSpan>;
    });
  };

  return <Wrapper>{renderHistory()}</Wrapper>;
};

Historical.propTypes = {
  history: PropTypes.array,
};

export default Historical;
