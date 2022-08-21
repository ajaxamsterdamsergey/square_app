import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${p => p.theme.space[3]}px;
`;

export const Text = styled.span`
  font-size: ${p => p.theme.fontSizes.ml};
  font-family: ${p => p.theme.fonts.dynaPuff};
  &:first-letter {
    text-transform: uppercase;
  }
`;
