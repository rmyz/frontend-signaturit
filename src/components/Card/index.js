import React from 'react';
import PropTypes from 'prop-types';

import { CardWrapper, TitleWrapper, ButtonsWrapper, ContractWrapper, ScoreWrapper } from './styles';

import Button from '../Button';
import Input from '../Input';

const Card = ({ title, score, contract, onClearClick, onClickKing, onClickNotary, onClickValidator }) => {
  return (
    <CardWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <ButtonsWrapper>
        <Button title="Add K" onClick={onClickKing} />
        <Button title="Add N" onClick={onClickNotary} />
        <Button title="Add V" onClick={onClickValidator} />
      </ButtonsWrapper>
      <ContractWrapper>
        <Input labelText="Contract" inputValue={contract} onClearClick={onClearClick}></Input>
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
  onClearClick: PropTypes.func,
  onClickKing: PropTypes.func,
  onClickNotary: PropTypes.func,
  onClickValidator: PropTypes.func,
};

export default Card;
