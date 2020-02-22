import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  margin-top: ${rem('8px')};
`;

export const StyledInput = styled.input`
  width: 70%;
`;
