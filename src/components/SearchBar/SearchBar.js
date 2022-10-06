import { IconContext } from 'react-icons';
import { FcStart } from 'react-icons/fc';
import { Button } from '../Button/Button';
import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  ButtonInput,
  Input,
  Label,
} from './SearchBar.styled';

export const SearchBar = ({
  items,
  onChange,
  onSubmit,
  squareCount,
  startValue,
  onClick,
}) => {
  return (
    <Header>
      <Box display="flex" alignItems="center" width="50%">
        <SearchForm onSubmit={onSubmit}>
          <IconContext.Provider
            value={{
              size: '1.6em',
              className: 'global-class-name',
            }}
          >
            <Label>
              <Input value={squareCount} onChange={onChange}>
                <option value="">-- Pick mode --</option>
                {items.map(elData => (
                  <option key={elData.id} value={elData.field}>
                    {elData.name}
                  </option>
                ))}
              </Input>
            </Label>
            <ButtonInput>
              <FcStart />
            </ButtonInput>
          </IconContext.Provider>
        </SearchForm>
        <Button onClick={onClick}>{startValue ? 'start' : 'pause'}</Button>
      </Box>
    </Header>
  );
};
export default SearchBar;
SearchBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  startValue: PropTypes.bool.isRequired,
  squareCount: PropTypes.string.isRequired,
};
