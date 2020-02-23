import styled from 'styled-components';
import { rem } from 'polished';
import { theme } from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  font-size: ${rem('18px')};
  margin-top: ${rem('8px')};
`;

export const StyledInput = styled.input`
  width: 70%;
`;

export const StyledButton = styled.button`
  margin-left: ${rem('5px')};
  background: ${theme.secondaryColor};
  color: white;
  border: 2px solid ${theme.secondaryColor};
  border-radius: 3px;
  cursor: pointer;

  :hover {
    background: white;
    color: ${theme.secondaryColor};
  }
`;
