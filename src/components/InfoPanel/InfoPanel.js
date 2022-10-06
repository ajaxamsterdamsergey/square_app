import PropTypes from 'prop-types';
import { List, Item } from './InfoPanel.styled';

export const InfoPanel = ({ rowColumn }) => {
  function sName(a, b) {
    // По имени (возрастание)
    if (a.row > b.row) return 1;
    if (a.row < b.row) return -1;
    if (a.column > b.column) return 1;
    if (a.column < b.column) return -1;
    else return 0;
  }
  rowColumn.sort(sName);
  const Info = (
    <List>
      {rowColumn.map((data, idx) => (
        <Item key={idx}>
          row {data.row} column {data.column}
        </Item>
      ))}
    </List>
  );
  InfoPanel.propTypes = {
    rowColumn: PropTypes.arrayOf(
      PropTypes.shape({
        column: PropTypes.number.isRequired,
        row: PropTypes.number.isRequired,
        customId: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
  return Info;
};
