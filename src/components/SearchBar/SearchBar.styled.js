import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Label = styled.label`
  position: relative;
  z-index: 1;
  display: inline-block;
  width: 100%;
  color: aqua;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.ml};
  border: ${p => p.theme.borders.none};
  outline: none;
`;

export const Input = styled.select`
  position: relative;
  z-index: 0;
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.ml};
  border: ${p => p.theme.borders.none};
  outline: none;
  padding-left: ${p => p.theme.space[2]} px;
  padding-right: ${p => p.theme.space[2]} px;
  &::placeholder {
    pointer-events: none;
    position: relative;
    z-index: 0;
    color: red;
    font: inherit;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 300px;
  background-color: #fff;
  border-radius: ${p => p.theme.radii.sm};
  overflow: hidden;
`;
export const ButtonInput = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: ${p => p.theme.borders.none};
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
  pointer-events: ${({ theme, disabled }) => {
    return disabled ? theme.display.none : theme.display.block;
  }};
`;
