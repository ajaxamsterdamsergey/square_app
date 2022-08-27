import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Box } from 'components/Box';
import { GlobalStyle } from './GlobalStyle';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  deleteTodo = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  isAlreadyAdded = (newContact, contacts) =>
    contacts.find(item =>
      item.name.toLowerCase().includes(newContact.name.toLowerCase())
    );
  handleSubmit = (values, actions) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), ...values };
    !this.isAlreadyAdded(newContact, contacts)
      ? this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }))
      : alert(`${newContact.name} is already in contacts`);
    actions.resetForm();
  };
  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };
  filterContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);
    return (
      <Box
        width={360}
        padding={32}
        m="auto"
        mt={30}
        mb={30}
        boxShadow="0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2)"
        borderRadius="2px"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gridGap="24px"
        >
          <h1>PhoneBook</h1>
          <ContactForm onSubmit={this.handleSubmit} />
          <div>
            <h2 style={{ width: 'min-content', margin: '0 auto' }}>Contacts</h2>
            <Filter onChange={this.handleChangeFilter}></Filter>
            <Contacts
              contacts={filteredContacts}
              deleteTodo={this.deleteTodo}
            ></Contacts>
          </div>
        </Box>
        <GlobalStyle />
      </Box>
    );
  }
}
