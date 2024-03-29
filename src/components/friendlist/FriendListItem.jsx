import styled from 'styled-components';
import PropTypes from 'prop-types';

const FriendLi = styled.li`
  display: flex;
  flex-direction: row;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  width: 250px;
`;
const Online = styled.span`
  display: inline-block;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
`;

export const FriendListItem = ({ friend }) => {
  return (
    <FriendLi>
      <Online isOnline={friend.isOnline} />
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </FriendLi>
  );
};
FriendListItem.propTypes = { friend: PropTypes.object };
