import { List, Item, Label, Percentage } from './StatisticsList.styled';
import PropTypes from 'prop-types';

const rendomColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let color = 'rgba(' + r + ',' + g + ',' + b + ',0.8)';
  return color;
};

export const StatisticsList = ({ data }) => {
  const StatsList = (
    <List>
      {data.map(elData => (
        <Item key={elData.id} style={{ backgroundColor: rendomColor() }}>
          <Label>{elData.label}</Label>
          <Percentage>{elData.percentage}</Percentage>
        </Item>
      ))}
    </List>
  );
  return StatsList;
};
StatisticsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
