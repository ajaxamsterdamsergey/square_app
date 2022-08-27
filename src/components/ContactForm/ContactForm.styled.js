import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormWrapper = styled(Form)`
  width: min-content;
`;
export const Input = styled(Field)`
  //margin-bottom: 8px;
  margin-bottom: ${p => p.theme.space[3]}px;
  border-color: tomato;
  border-radius: ${p => p.theme.radii.sm};
  //border-radius: 3px;
  &:focus {
    background-color: floralwhite;
    border-color: tomato;
    border-radius: ${p => p.theme.radii.sm};
  }
`;
export const Button = styled.button`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  min-width: 80px;
  height: 24px;
  border-radius: ${p => p.theme.radii.sm};
  border: ${p => p.theme.borders.none};
  display: block;
  margin: 0 auto;
  background: tomato;
  &:hover {
    background: green;
    cursor: pointer;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px #cbd6ee;
  }
`;
