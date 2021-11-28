import PropTypes from 'prop-types';
import {
  Container,
  Table,
  Title,
  Thead,
  Tbody,
  Paragraph,
} from './Statistics.styled';

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <Container>
      <Title>Statistics</Title>
      <Table>
        <Thead>
          <tr>
            <th>Good</th>
            <th>Neutral</th>
            <th>Bad</th>
            <th>Total</th>
          </tr>
        </Thead>
        <Tbody>
          <tr>
            <th>{good}</th>
            <th>{neutral}</th>
            <th>{bad}</th>
            <th>{total}</th>
          </tr>
        </Tbody>
      </Table>
      <Paragraph>{`Positive feedback: ${positivePercentage}`}</Paragraph>
    </Container>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
