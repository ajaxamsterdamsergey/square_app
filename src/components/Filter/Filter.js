import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { FormWrapper, Input } from './Filter.styled';

export const Filter = ({ onChange }) => {
  const FilterField = (
    <Formik>
      <FormWrapper>
        <Input type="text" name="filter" onChange={onChange} />
      </FormWrapper>
    </Formik>
  );
  return FilterField;
};
Filter.propTypes = {
  onChange: PropTypes.func,
};
