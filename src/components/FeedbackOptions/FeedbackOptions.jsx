import PropTypes from 'prop-types';

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
  return (
    <div>
      {Object.keys(options).map(option => {
        return (
          <button
            key={option}
            onClick={onLeaveFeedback}
            type="button"
            name={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
