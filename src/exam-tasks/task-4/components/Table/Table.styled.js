import styled from 'styled-components';

export const StyledTable = styled.table`
  margin: 0 auto;
  border-collapse: collapse;

  border: 1px solid black;

  tr {
    th {
      border: 1px solid black;

      background-color: #fce600;
    }
    td {
      border: 1px solid black;
      padding: 5px;
    }
  }
`;
