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

  const onClickClear = setContract => () => {
    setContract('');
  };

  const onClickKing = (setContract, contract) => () => {
    setContract(`K${contract}`);
  };

  const onClickNotary = (setContract, contract) => () => {
    setContract(`${contract}N`);
  };

  const onClickValidator = (setContract, contract) => () => {
    setContract(`${contract}V`);
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
          onClearClick={onClickClear(setContractParty1)}
          onClickKing={onClickKing(setContractParty1, contractParty1)}
          onClickNotary={onClickNotary(setContractParty1, contractParty1)}
          onClickValidator={onClickValidator(setContractParty1, contractParty1)}
        />
        <ButtonWrapper>
          <Button title="Trial Time!" bigMode onClick={onClickTrialTime} />
        </ButtonWrapper>
        <Card
          title="Party 2"
          score={globalScore.party2}
          contract={contractParty2}
          onClearClick={onClickClear(setContractParty2)}
          onClickKing={onClickKing(setContractParty2, contractParty2)}
          onClickNotary={onClickNotary(setContractParty2, contractParty2)}
          onClickValidator={onClickValidator(setContractParty2, contractParty2)}
        />
      </CardsWrapper>
      <HistoricalWrapper>
        <Historical history={history} />
      </HistoricalWrapper>
    </Wrapper>
  );
};

export default App;
