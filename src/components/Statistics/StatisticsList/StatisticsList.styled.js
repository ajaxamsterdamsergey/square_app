import styled from 'styled-components';

export const List = styled.ul`
  margin-top: ${p => p.theme.space[5]}px;
  width: 350px;
  display: flex;
  list-style: none;
  margin: 0;
  padding: ${p => p.theme.space[0]}px;
  margin: 0 auto;
`;
export const Item = styled.li`
  padding: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[0]}px;
  list-style: none;
  width: 75px;
  display: flex;
  gap: ${p => p.theme.space[2]}px;
  flex-direction: column;
  font-size: ${p => p.theme.fontSizes.m};
  text-align: center;
`;
export const Percentage = styled.span`
  font-size: 24px;
  color: ${p => p.theme.colors.white};
`;
export const Label = styled.span`
  color: ${p => p.theme.colors.white};
`;
