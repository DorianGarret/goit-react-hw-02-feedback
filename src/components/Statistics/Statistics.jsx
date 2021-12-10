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
            {statistics.map(([key]) => (
              <th key={nanoid()}>{key}</th>
            ))}
            <th>total</th>
          </tr>
        </Thead>
        <Tbody>
          <tr>
            {statistics.map(([, value]) => (
              <th key={nanoid()}>{value}</th>
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
  statistics: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
