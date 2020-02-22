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
