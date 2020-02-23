import styled from 'styled-components';
import { rem } from 'polished';
import { theme } from '../../styles/theme';

export const CardWrapper = styled.div`
  width: ${rem('480px')};
  height: ${rem('280px')};
  border: 2px solid ${theme.secondaryColor};
  border-radius: 5px;

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
  background: ${theme.secondaryColor};
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
