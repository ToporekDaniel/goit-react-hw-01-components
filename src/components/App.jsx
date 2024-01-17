import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import { TransactionHistory } from 'components/TransactionHistory';

import prof from './../json/user.json';
import data from './../json/data.json';
import friends from './../json/friends.json';
import transac from './../json/transactions.json';

const { username, tag, location, avatar, stats } = prof;

export function App() {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload Statistics" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transac} />
    </>
  );
}
