import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';

import { ButtonWrapper } from './ButtonDelete.styled';

export const ButtonDelete = ({ onClick }) => {
  const ContactsItem = (
    <IconContext.Provider
      value={{
        color: 'red',
        size: '2em',
        className: 'global-class-name',
      }}
    >
      <div>
        <ButtonWrapper onClick={onClick} />
      </div>
    </IconContext.Provider>
  );
  ButtonDelete.propTypes = {
    onClick: PropTypes.func.isRequired,
  };
  return ContactsItem;
};
