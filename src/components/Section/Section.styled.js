import styled from 'styled-components';

export const Title = styled.h2`
  margin: 0, auto;
  text-align: center;
  margin-top: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.ml};
  font-family: ${p => p.theme.fonts.monospace};
`;
