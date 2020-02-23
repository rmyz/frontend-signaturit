import styled from 'styled-components';
import { rem } from 'polished';
import { theme } from '../../styles/theme';

const getComputedProps = ({ bigMode }) => `
  width: ${bigMode ? rem('250px') : rem('100px')};
  height: ${bigMode ? rem('100px') : rem('50px')};
  font-size: ${bigMode ? rem('40px') : rem('16px')};
`;

export const StyledButton = styled.button`
  background: ${theme.mainColor};
  color: white;
  border: 2px solid ${theme.mainColor};
  border-radius: '3px';
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  margin: ${rem('2px')};

  :hover {
    background: white;
    color: ${theme.mainColor};
  }

  ${props => getComputedProps(props)}
`;
