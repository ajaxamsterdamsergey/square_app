import { TransactionTableRows } from '../TransactionTableRows/TransactionTableRows';
import { TableContainer, Head, Row } from './TransactionHistory.styled';
import { Box } from 'components/Box';

export const TransactionHistory = ({ transactions }) => (
  <Box
    mx={'auto'}
    mt={40}
    textAlign="center"
    width={650}
    bg="white"
    height={1150}
  >
    <TableContainer>
      <Head>
        <Row>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Row>
      </Head>
      <tbody>
        <TransactionTableRows transactions={transactions} />
      </tbody>
    </TableContainer>
  </Box>
);
