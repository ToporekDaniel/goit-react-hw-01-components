import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './profile.css';
import data from './user.json';
import { Profile } from 'components/App';

const { username, tag, location, avatar, stats } = data;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
    />
  </React.StrictMode>
);
