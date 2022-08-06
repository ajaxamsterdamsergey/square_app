import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { List, Avatar, Marker, Item, NameUser } from './FrendList.styled';

export const FrendList = ({ friends }) => {
  const Friends = (
    <Box width={250} mx={'auto'} my={0} mt={30} borderRadius={5}>
      <List>
        {friends.map(elData => (
          <Item key={elData.id}>
            <Marker selected={elData.isOnline}></Marker>
            <Avatar alt="999" src={elData.avatar} />
            <NameUser>{elData.name}</NameUser>
          </Item>
        ))}
      </List>
    </Box>
  );
  return Friends;
};
FrendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
