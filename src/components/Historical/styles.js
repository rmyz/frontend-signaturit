import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  font-size: ${rem('18px')};
  max-height: ${rem('300px')};
  overflow-y: auto;

  @media (max-width: 1000px) {
    max-height: ${rem('100px')};
  }
`;

export const StyledSpan = styled.span`
  margin: ${rem('8px')};
`;
