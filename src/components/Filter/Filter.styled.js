import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormWrapper = styled(Form)`
  width: min-content;
  margin: 0 auto;
`;
export const Input = styled(Field)`
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[3]}px;
  border-color: tomato;
  border-radius: ${p => p.theme.radii.sm};
  &:focus {
    background-color: floralwhite;
    border-color: tomato;
    border-radius: ${p => p.theme.radii.sm};
  }
`;
