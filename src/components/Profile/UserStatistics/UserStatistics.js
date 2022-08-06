import { Item, ItemName, TotalCount } from './UserStatistics.styled';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export const UserStatistics = ({
  users: {
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Box
      background="#becbcc"
      width={250}
      display="flex"
      gridGap={1}
      mx={'auto'}
      my={0}
      p={0}
      textAlign="center"
      as="ul"
    >
      <Item>
        <ItemName>Followers</ItemName>
        <TotalCount>{followers}</TotalCount>
      </Item>
      <Item>
        <ItemName>Views</ItemName>
        <TotalCount>{views}</TotalCount>
      </Item>
      <Item>
        <ItemName>Likes</ItemName>
        <TotalCount>{likes}</TotalCount>
      </Item>
    </Box>
  );
};
UserStatistics.protoType = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
