import styled from 'styled-components';
import { rem } from 'polished';

const getComputedProps = ({ bigMode }) => `
  width: ${bigMode ? rem('250px') : rem('100px')};
  height: ${bigMode ? rem('100px') : rem('50px')};
  font-size: ${bigMode ? rem('40px') : rem('16px')};
`;

export const StyledButton = styled.button`
  ${props => getComputedProps(props)}
`;
