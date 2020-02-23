import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: ${rem('32px')};
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ButtonWrapper = styled.div`
  margin-top: ${rem('220px')};
`;

export const HistoricalWrapper = styled.div`
  height: 60%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
