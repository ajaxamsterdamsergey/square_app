import styled from 'styled-components';

export const ButtonLoad = styled.button`
  display: block;
  margin: ${p => p.theme.space[4]}px auto;
  padding: 8px 16px;
  border-radius: ${p => p.theme.radii.sm};
  background-color: #9bb9de;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #fff;
  border: ${p => p.theme.borders.none};
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 24px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  min-width: 100px;
  box-shadow: 0px 1px 0px 1px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:focus {
    background-color: #74a8e8;
  }
  &:hover {
    background-color: #74a8e8;
  }
`;
