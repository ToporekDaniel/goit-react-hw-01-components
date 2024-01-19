import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

const FriendsUl = styled.ul`
  list-style-type: none;
  padding: 10px;
`;

export const FriendList = ({ friends }) => {
  return (
    <FriendsUl>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </FriendsUl>
  );
};

FriendList.propTypes = { friends: PropTypes.arrayOf(PropTypes.object) };
