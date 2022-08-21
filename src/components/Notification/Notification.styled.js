import styled from 'styled-components';

export const Title = styled.h2`
  margin: 0, auto;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.monospace};
  margin-bottom: ${p => p.theme.space[5]}px;
`;
