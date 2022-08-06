import { ImgAvatar, Name, TextTitle } from './MainInfo.styled';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
export const MainInfo = ({ users: { username, tag, location, avatar } }) => {
  return (
    <Box
      mx={'auto'}
      my={0}
      textAlign="center"
      width={250}
      bg="white"
      borderBottom="solid"
      borderBottomColor="#becbcc"
      borderWidth={2}
      display="flex"
      flexDirection="column"
      gridGap={3}
      pb={24}
      height={250}
    >
      <ImgAvatar alt="999" src={avatar} />
      <Name>{username}</Name>
      <TextTitle>{tag}</TextTitle>
      <TextTitle>{location}</TextTitle>
    </Box>
  );
};
MainInfo.protoType = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
