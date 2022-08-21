import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
import { Box } from 'components/Box';

export const FeedbackOptions = ({ onLeaveFeedback, onLeave }) => {
  return (
    <Box display="flex" justifyContent="space-around">
      {Object.keys(onLeave).map((key, idx) => (
        <Button key={idx} name={key} type="button" onClick={onLeaveFeedback}>
          {key}
        </Button>
      ))}
    </Box>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  onLeave: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
