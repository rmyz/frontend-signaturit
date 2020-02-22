import styled from 'styled-components';
import { rem } from 'polished';

export const CardWrapper = styled.div`
  width: 25vw;
  height: 30vh;
  border: ${rem('2px')} solid black;
  border-radius: ${rem('5px')};
`;

export const TitleWrapper = styled.div`
  padding: ${rem('4px')} 0 0 ${rem('4px')};

  font-size: ${rem('18px')};
  text-transform: uppercase;
  font-style: italic;
  background: #234b55;
  color: white;
`;

export const ButtonsWrapper = styled.div`
  padding: ${rem('32px')};
  display: flex;
  justify-content: space-evenly;
`;

export const ContractWrapper = styled.div`
  margin-top: ${rem('12px')};
  margin-left: ${rem('32px')};
`;

export const ScoreWrapper = styled.div`
  margin-top: ${rem('32px')};
  margin-left: ${rem('32px')};
`;
