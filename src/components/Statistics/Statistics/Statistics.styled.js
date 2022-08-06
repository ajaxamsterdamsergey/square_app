import styled from 'styled-components';

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  text-align: center;
  height: 72px;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.text};
`;
