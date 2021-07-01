import styled from '@emotion/styled';
import { colorsVars } from '../../utils/colors';

export const TransactionHistoryTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 875px;
  border-radius: 5px;

  background-color: ${colorsVars.sectionBackgroundColor};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr`
  :nth-child(even) {
    background-color: ${colorsVars.secondryBacgroundColor};
  }
`;

export const TableTh = styled.th`
  background-color: ${colorsVars.tableHead};
  color: ${colorsVars.sectionBackgroundColor};
  text-transform: uppercase;
  width: 295px;
  height: 50px;
`;

export const TableBody = styled.tbody``;

export const TableTd = styled.td`
  width: 295px;
  height: 50px;
  color: ${colorsVars.secondaryTextColor};

  text-transform: capitalize;
`;
