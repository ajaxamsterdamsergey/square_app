import { Row, Text } from './Statistics.styled';
import { Box } from 'components/Box';
import PropTypes from 'prop-types';
export const Statistics = ({ onLeave, total, positivCountFeedBack }) => {
  return (
    <Box marginBottom="32px">
      {Object.entries(onLeave).map(([key, value], idx) => (
        <Row key={idx}>
          <Text>{key}:</Text>
          <Text>{value}</Text>
        </Row>
      ))}

      <Row>
        <Text>Total:</Text>
        <Text>{total}</Text>
      </Row>
      <Row>
        <Text>Positive FeedBack:</Text>
        <Text>{positivCountFeedBack}%</Text>
      </Row>
    </Box>
  );
};
Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivCountFeedBack: PropTypes.number.isRequired,
  onLeave: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
