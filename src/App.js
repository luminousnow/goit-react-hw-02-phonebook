import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Container from './components/Container';
import Filter from './components/Filter/Filter';
import Section from './components/Section/Section';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // видаляє контакт по кліку на кнопку
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== contactId),
    }));
  };

  // отримує параметри з Форми, додає ІД і формує повноцінний контакт
  getContactData = ({ name, number }) => {
    const id = uuidv4();
    const contact = { id, name, number };

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(person =>
      person.name.toLowerCase().includes(normalizeFilter),
    );
  };

  // пише значення в Стейт
  changeFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { filter } = this.state;
    const {
      deleteContact,
      getContactData,
      changeFilter,
      getFilteredContacts,
    } = this;
    const filteredContacts = getFilteredContacts();

    return (
      <Container>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm getContactData={getContactData} />
        </Section>
        <Section>
          <h2>Contacts</h2>
          <Filter filter={filter} changeFilter={changeFilter} />
          <ContactList
            contactList={filteredContacts}
            onDeleteContact={deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
