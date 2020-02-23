import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: ${rem('32px')};
  font-family: 'Open Sans';

  @media (max-width: 1000px) {
    padding: 8px;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: ${rem('220px')};

  @media (max-width: 1000px) {
    margin: 32px;
  }
`;

export const HistoricalWrapper = styled.div`
  height: 60%;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 1000px) {
    height: 20%;
  }
`;
