import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  Container,
  Table,
  Title,
  Thead,
  Tbody,
  Paragraph,
} from './Statistics.styled';

function Statistics({ statistics, total, positivePercentage }) {
  return (
    <Container>
      <Title>Statistics</Title>
      <Table>
        <Thead>
          <tr>
            {Object.keys(statistics).map(statName => (
              <th key={nanoid()}>{statName}</th>
            ))}
            <th>total</th>
          </tr>
        </Thead>
        <Tbody>
          <tr>
            {Object.values(statistics).map(statValue => (
              <th key={nanoid()}>{statValue}</th>
            ))}
            <th>{total}</th>
          </tr>
        </Tbody>
      </Table>
      <Paragraph>{`Positive feedback: ${positivePercentage}%`}</Paragraph>
    </Container>
  );
}

Statistics.propTypes = {
  statistics: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
