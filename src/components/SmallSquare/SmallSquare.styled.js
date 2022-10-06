import styled from 'styled-components';
export const Square = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid grey;
  background-color: ${({ theme, selected }) => {
    return selected ? theme.colors.tomato : theme.colors.white;
  }};
  pointer-events: ${({ theme, disabled }) => {
    return disabled ? theme.display.none : theme.display.block;
  }};
`;
