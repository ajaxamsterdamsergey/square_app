import { Profile } from './Profile/Profile/Profile';
import { Statistics } from './Statistics/Statistics/Statistics';
import { FrendList } from './FrendList/FrendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';
import users from './Profile/users.json';
import data from './Statistics/data.json';
import friends from './FrendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
export const App = () => {
  return (
    <div>
      <Profile users={users} />
      <Statistics data={data} />
      <FrendList friends={friends} />
      <TransactionHistory transactions={transactions} />
      <GlobalStyle />
    </div>
  );
};
