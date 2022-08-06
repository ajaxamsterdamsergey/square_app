import { RowTable } from './TransactionTableRows.styled';
import PropTypes from 'prop-types';

export const TransactionTableRows = ({ transactions }) => {
  const TransactionLayout = transactions.map((item, idx) => (
    <tr
      key={item.id}
      style={
        idx % 2 === 0
          ? { backgroundColor: 'white' }
          : { backgroundColor: '#d1ebeb' }
      }
    >
      <RowTable>{item.type}</RowTable>
      <RowTable>{item.amount}</RowTable>
      <RowTable>{item.currency}</RowTable>
    </tr>
  ));
  return TransactionLayout;
};
TransactionTableRows.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
