import { MainInfo } from '../MainInfo/MainInfo';
import { UserStatistics } from '../UserStatistics/UserStatistics';
import { Box } from 'components/Box';
export const Profile = ({ users }) => {
  return (
    <Box
      borderRadius={6}
      border="solid"
      borderColor="#becbcc"
      borderWidth={2}
      width={254}
      m="auto"
      mt={30}
    >
      <MainInfo users={users} />
      <UserStatistics users={users} />
    </Box>
  );
};
