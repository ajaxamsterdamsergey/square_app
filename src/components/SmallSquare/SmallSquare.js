import { Square } from './SmallSquare.styled';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
export const SmallSquare = ({ change, idx, getColumnRow, startValue }) => {
  const [selectedSquare, setSelectedSquare] = useState(false);

  useEffect(() => {
    setSelectedSquare(false);
  }, [change]);

  const hoverSquare = () => {
    getColumnRow(idx, selectedSquare);
    setSelectedSquare(!selectedSquare);
  };
  const SquareEl = (
    <Square
      onMouseEnter={hoverSquare}
      selected={selectedSquare}
      disabled={startValue}
      data-column={'hello'}
    ></Square>
  );
  return SquareEl;
};
SmallSquare.propTypes = {
  getColumnRow: PropTypes.func,
  change: PropTypes.bool.isRequired,
  idx: PropTypes.number.isRequired,
  startValue: PropTypes.bool.isRequired,
};
