import React, { useState } from 'react';
import axios from 'axios';

import { Wrapper, CardsWrapper, ButtonWrapper, HistoricalWrapper } from './styles';

import Card from '../../components/Card';
import Button from '../../components/Button';
import Historical from '../../components/Historical';
import { getScore, getNewHistorical } from '../../utils';

const App = () => {
  const [history, setHistory] = useState([]);
  const [globalScore, setGlobalScore] = useState({ party1: 0, party2: 0 });
  const [contractParty1, setContractParty1] = useState('');
  const [contractParty2, setContractParty2] = useState('');

  const onClickClearParty1 = () => {
    setContractParty1('');
  };

  const onClickKingParty1 = () => {
    setContractParty1(`K${contractParty1}`);
  };

  const onClickNotaryParty1 = () => {
    setContractParty1(`${contractParty1}N`);
  };

  const onClickValidatorParty1 = () => {
    setContractParty1(`${contractParty1}V`);
  };

  const onClickClearParty2 = () => {
    setContractParty2('');
  };

  const onClickKingParty2 = () => {
    setContractParty2(`K${contractParty2}`);
  };

  const onClickNotaryParty2 = () => {
    setContractParty2(`${contractParty2}N`);
  };

  const onClickValidatorParty2 = () => {
    setContractParty2(`${contractParty2}V`);
  };

  const onClickTrialTime = () => {
    axios
      .post('http://localhost:3025/contracts', {
        party1: contractParty1,
        party2: contractParty2,
      })
      .then(({ data }) => {
        const newScore = getScore({ globalScore, data });
        const newHistorical = getNewHistorical({ history, globalScore, data });

        setHistory(newHistorical);
        setGlobalScore(newScore);
      });
  };

  return (
    <Wrapper>
      <CardsWrapper>
        <Card
          title="Party 1"
          score={globalScore.party1}
          contract={contractParty1}
          onClearClick={onClickClearParty1}
          onClickKing={onClickKingParty1}
          onClickNotary={onClickNotaryParty1}
          onClickValidator={onClickValidatorParty1}
        />
        <ButtonWrapper>
          <Button title="Trial Time!" bigMode onClick={onClickTrialTime} />
        </ButtonWrapper>
        <Card
          title="Party 2"
          score={globalScore.party2}
          contract={contractParty2}
          onClearClick={onClickClearParty2}
          onClickKing={onClickKingParty2}
          onClickNotary={onClickNotaryParty2}
          onClickValidator={onClickValidatorParty2}
        />
      </CardsWrapper>
      <HistoricalWrapper>
        <Historical history={history} />
      </HistoricalWrapper>
    </Wrapper>
  );
};

export default App;
