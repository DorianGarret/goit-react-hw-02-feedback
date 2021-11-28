import PropTypes from 'prop-types';
import { Button, Container } from './FeedbackOptions.styled';

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
  return (
    <Container>
      {Object.keys(options).map(option => {
        return (
          <Button
            key={option}
            onClick={onLeaveFeedback}
            type="button"
            name={option}
          >
            {option}
          </Button>
        );
      })}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
