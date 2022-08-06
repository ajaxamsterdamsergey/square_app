import styled from 'styled-components';

export const TableContainer = styled.table`
  margin: 0 auto;
  width: 500px;
  text-align: center;
  border: 1px solid rgb(212, 223, 233);
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
`;
export const Head = styled.thead`
  text-transform: uppercase;
  background-color: rgb(123, 218, 247);
`;
export const Row = styled.tr`
  height: 50px;
  padding: ${p => p.theme.space[3]}px;
  color:${p => p.theme.colors.white}
  font-size: ${p => p.theme.fontSizes.m};
`;
