import PropTypes from 'prop-types';
import { List, Avatar, Marker, Item, NameUser } from './FriendListItem.styled';

export const FrendListItem = ({ friends }) => {
  const FriendsItem = (
    <List>
      {friends.map(elData => (
        <Item key={elData.id}>
          <Marker selected={elData.isOnline}></Marker>
          <Avatar alt="999" src={elData.avatar} />
          <NameUser>{elData.name}</NameUser>
        </Item>
      ))}
    </List>
  );
  return FriendsItem;
};
FrendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
