import { StatisticsList } from '../StatisticsList/StatisticsList';
import { Box } from 'components/Box';
import { Title } from './Statistics.styled';
export const Statistics = ({ data }) => (
  <Box width={350} mx={'auto'} my={0} mt={30} borderRadius={5}>
    <Title>Upload stats</Title>
    <StatisticsList data={data} />
  </Box>
);
