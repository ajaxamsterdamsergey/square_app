import { IconContext } from 'react-icons';
import { FcSearch } from 'react-icons/fc';
import { Formik } from 'formik';
import { Header, SearchForm, Button, Input } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <Header>
      <Formik initialValues={{ query: '' }} onSubmit={onSubmit}>
        <SearchForm>
          <IconContext.Provider
            value={{
              size: '1.6em',
              className: 'global-class-name',
            }}
          >
            <Button type="submit">
              <FcSearch />
            </Button>
          </IconContext.Provider>

          <Input
            type="text"
            name="query"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};
export default SearchBar;
