import {
  TransactionHistoryTable,
  TableHead,
  TableRow,
  TableTh,
  TableBody,
  TableTd,
} from '../TransactionHistory/TransactionHistory.style';

export function TransactionHistory(transactions) {
  return (
    <TransactionHistoryTable>
      <TableHead>
        <TableRow>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </TableRow>
      </TableHead>

      <TableBody>
        {transactions.items.map(transactionRow => (
          <TableRow key={transactionRow.id}>
            <TableTd>{transactionRow.type}</TableTd>
            <TableTd>{transactionRow.amount}</TableTd>
            <TableTd>{transactionRow.currency}</TableTd>
          </TableRow>
        ))}
      </TableBody>
    </TransactionHistoryTable>
  );
}
