import styled from '@emotion/styled/macro';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
`;

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 30px;
`;

export const Table = styled.table`
  text-align: center;
  border: 1px solid var(--bs-gray-500);
  th {
    padding: 1rem;
    text-transform: uppercase;
  }
`;

export const Thead = styled.thead`
  background-color: var(--bs-gray-500);
  th {
    :not(:last-of-type) {
      border-right: 1px solid var(--bs-white);
    }
  }
`;

export const Tbody = styled.tbody`
  background-color: var(--bs-gray-200);
  th {
    :not(:last-of-type) {
      border-right: 1px solid var(--bs-gray-500);
    }
  }
`;

export const Paragraph = styled.p`
  text-transform: uppercase;
  padding-top: 30px;
`;
