import styled from 'styled-components';
import { rem } from 'polished';

export const CardWrapper = styled.div`
  width: ${rem('480px')};
  height: ${rem('280px')};
  border: ${rem('2px')} solid #234b55;
  border-radius: ${rem('5px')};

  @media (max-width: 1000px) {
    max-width: ${rem('340px')};
  }
`;

export const TitleWrapper = styled.div`
  padding: ${rem('8px')};

  font-size: ${rem('20px')};
  font-weight: 600;
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
  margin-top: ${rem('24px')};
  margin-left: ${rem('32px')};
`;
