import styled from 'styled-components';
import { COLORS } from '../../theme';

export const MyButton = styled.button`
  background-color: ${COLORS.primary};
  color: white;
  font-size: 16px;
  height: 45px;
  width:15%;
  border-radius: 6px;
  border-color: transparent;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: transparent;
    border-color: ${COLORS.primary};
    color: ${COLORS.primary};
  }
`;