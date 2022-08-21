import { Title } from './Section.styled';
import { Box } from 'components/Box';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <Box display="flex" flexDirection="column" gridGap={16}>
      <Title>{title}</Title>
      {children}
    </Box>
  );
};
Section.propTypes = {
  title: PropTypes.string,
};
