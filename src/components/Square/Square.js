import { Wrapper } from './Square.styled';
import { SmallSquare } from '../SmallSquare/SmallSquare';
import { Box } from 'components/Box';
import PropTypes from 'prop-types';

export const Square = ({ squareCount, change, getColumnRow, startValue }) => {
  const customWidth = squareCount * 30 + 2;
  const squareElements = squareCount => {
    let total = Math.pow(squareCount, 2);
    let arrForSquare = [];
    let i = 0;
    while (i < total) {
      arrForSquare.push('');
      i++;
    }
    return arrForSquare;
  };

  const squareElementsFinish = squareElements(squareCount);
  const SquareEl = (
    <Box>
      <Wrapper style={{ width: customWidth }}>
        {squareElementsFinish.map((data, idx) => (
          <SmallSquare
            getColumnRow={getColumnRow}
            change={change}
            startValue={startValue}
            key={idx}
            idx={idx}
            selected={false}
          ></SmallSquare>
        ))}
      </Wrapper>
    </Box>
  );
  return SquareEl;
};
Square.propTypes = {
  getColumnRow: PropTypes.func,
  change: PropTypes.bool.isRequired,
  squareCount: PropTypes.string.isRequired,
  startValue: PropTypes.bool.isRequired,
};
