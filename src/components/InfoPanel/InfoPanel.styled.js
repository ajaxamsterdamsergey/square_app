import styled from 'styled-components';

export const List = styled.ul`
  margin-top: ${p => p.theme.space[5]}px;
  display: flex;
  height: 100vh;
  width: 560px;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin-left: 30px;
  //flex-direction: column;
`;
export const Item = styled.li`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: 16px;
  background-color: ${p => p.theme.colors.white};
  display: flex;
  align-items: center;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: inset 0 -2em 2em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);

  //width: 152px;
  // flex-grow: 1;
  width: 30%;
  margin-top: ${p => p.theme.space[4]}px;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
`;
