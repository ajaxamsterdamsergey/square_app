import styled from 'styled-components';

export const Text = styled.div`
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const List = styled.ul`
  margin-top: ${p => p.theme.space[5]}px;
  display: flex;
  list-style: none;
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  margin: 0 auto;
  flex-direction: column;
`;

export const Item = styled.li`
  width: 300px;
  background-color: ${p => p.theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: inset 0 -2em 2em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  margin-top: ${p => p.theme.space[4]}px;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[4]}px;
`;
