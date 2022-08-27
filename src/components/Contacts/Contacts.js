// import { IconContext } from 'react-icons';
// import { TiDeleteOutline } from 'react-icons/ti';
import PropTypes from 'prop-types';
import { ButtonDelete } from '../ButtonDelete/ButtonDelete';
import { List, Item, Text } from './Contacts.styled';

export const Contacts = ({ contacts, deleteTodo }) => {
  const ContactsItem = (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>{name}:</Text>
          <Text>{number}</Text>
          <ButtonDelete onClick={() => deleteTodo(id)} />
        </Item>
      ))}
    </List>
  );
  Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };
  return ContactsItem;
};
