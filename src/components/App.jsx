import { Profile } from './Profile/Profile/Profile';
import { Statistics } from './Statistics/Statistics/Statistics';
import { FrendList } from './FrendList/FrendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';
import users from '../users.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
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
