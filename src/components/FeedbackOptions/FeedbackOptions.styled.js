import styled from 'styled-components';

export const Button = styled.button`
  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.dynaPuff};
  cursor: pointer;
  border: none;
  background-color: tomato;
  border-radius: 2px;
  height: 28px;
  min-width: 68px;
  color: whitesmoke;
`;
