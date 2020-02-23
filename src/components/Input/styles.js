import styled from 'styled-components';
import { rem } from 'polished';

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
  background: #234b55;
  color: white;
  border: ${rem('2px')} solid #234b55;
  border-radius: ${rem('3px')};
  cursor: pointer;

  :hover {
    background: white;
    color: #234b55;
  }
`;
