import PropTypes from 'prop-types';

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <>
      <h2>Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Good</th>
            <th>Neutral</th>
            <th>Bad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{good}</th>
            <th>{neutral}</th>
            <th>{bad}</th>
            <th>{total}</th>
          </tr>
        </tbody>
      </table>
      <p>{`Positive feedback: ${positivePercentage}`}</p>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
