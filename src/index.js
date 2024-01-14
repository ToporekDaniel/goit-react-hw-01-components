import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './profile.css';
import prof from './user.json';
import data from './data.json';
import { Profile } from 'components/Profile';
import { Stats } from 'components/Statistics';

const { username, tag, location, avatar, stats } = prof;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
    />
    <Stats title="Upload Statistics" stats={data} />
  </React.StrictMode>
);
