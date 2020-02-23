import styled from 'styled-components';
import { rem } from 'polished';

const getComputedProps = ({ bigMode }) => `
  width: ${bigMode ? rem('250px') : rem('100px')};
  height: ${bigMode ? rem('100px') : rem('50px')};
  font-size: ${bigMode ? rem('40px') : rem('16px')};
`;

export const StyledButton = styled.button`
  background: #7bb928;
  color: white;
  border: ${rem('2px')} solid #7bb928;
  border-radius: ${rem('3px')};
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  margin: ${rem('2px')};

  :hover {
    background: white;
    color: #7bb928;
  }

  ${props => getComputedProps(props)}
`;
