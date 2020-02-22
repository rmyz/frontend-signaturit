import React from 'react';
import PropTypes from 'prop-types';

import { CardWrapper, TitleWrapper, ButtonsWrapper, ContractWrapper, ScoreWrapper } from './styles';

import Button from '../Button';
import Input from '../Input';

const Card = ({ title, score, contract }) => {
  return (
    <CardWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <ButtonsWrapper>
        <Button title="Add K" onClick={''} />
        <Button title="Add N" onClick={''} />
        <Button title="Add V" onClick={''} />
      </ButtonsWrapper>
      <ContractWrapper>
        <Input labelText="Contract" inputValue={contract}></Input>
      </ContractWrapper>
      <ScoreWrapper>
        {title} has {score || 0} points
      </ScoreWrapper>
    </CardWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  score: PropTypes.number,
  contract: PropTypes.string,
};

export default Card;
