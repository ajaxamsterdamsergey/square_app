import styled from 'styled-components';

export const TextTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  font-family: ${p => p.theme.fonts.heading};
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.background};
  color: gray;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 83px;
  background-color: ${p => p.theme.colors.background_list};
  font-size: ${p => p.theme.fontSizes.s};
  font-family: ${p => p.theme.fonts.heading};
  padding: ${p => p.theme.space[2]}px;
  gap: ${p => p.theme.space[2]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;
export const ItemName = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  color: grey;
`;
export const TotalCount = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: grey;
`;
