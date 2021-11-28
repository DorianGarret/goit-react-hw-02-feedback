import styled from '@emotion/styled/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

export const Button = styled.button`
  padding: 10px 30px;

  text-transform: capitalize;

  &:not(:last-of-type) {
    margin-right: 20px;
  }
`;
