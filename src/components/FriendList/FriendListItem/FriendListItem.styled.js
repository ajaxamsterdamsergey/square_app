import styled from 'styled-components';

export const List = styled.ul`
  margin-top: ${p => p.theme.space[5]}px;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin: 0 auto;
  flex-direction: column;
`;

export const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: ${p => p.theme.radii.sm};
  margin-left: ${p => p.theme.space[1]}px;
`;
export const Marker = styled.span`
  background-color: ${({ theme, selected }) => {
    return selected ? theme.colors.green : theme.colors.tomato;
  }};
  border-radius: ${p => p.theme.radii.round};
  margin-left: ${p => p.theme.space[4]}px;
  width: 20px;
  height: 20px;
`;
export const Item = styled.li`
  background-color: ${p => p.theme.colors.white};
  display: flex;
  align-items: center;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: inset 0 -2em 2em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  width: 250px;
  margin-top: ${p => p.theme.space[4]}px;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[4]}px;
`;
export const NameUser = styled.p`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: 20px;
  padding-left: ${p => p.theme.space[4]}px;
`;
