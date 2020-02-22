import React from 'react';
import { Wrapper, CardsWrapper } from './styles';

import Card from '../../components/Card';
import Button from '../../components/Button';

const App = () => {
  return (
    <Wrapper>
      <CardsWrapper>
        <Card title="Party 1"></Card>
        <Button title="Trial Time!" bigMode />
        <Card title="Party 2"></Card>
      </CardsWrapper>
    </Wrapper>
  );
};

export default App;
