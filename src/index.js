import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/transaction-history.css';
// import prof from './json/user.json';
// import data from './json/data.json';
// import friends from './json/friends.json';
// import transac from './json/transactions.json';

// import { Profile } from 'components/Profile';
// import { Stats } from 'components/Statistics';
// import { FriendList } from 'components/FriendList';
// import { TransactionHistory } from 'components/TransactionHistory';
import { App } from 'components/App';

// const { username, tag, location, avatar, stats } = prof;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Profile
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
    />
    <Stats title="Upload Statistics" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transac} /> */}
  </React.StrictMode>
);
