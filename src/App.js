import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Container from './components/Container';
import Section from './components/Section/Section';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== contactId),
    }));
  };

  getContactData = data => {
    const id = uuidv4();
    const contact = { id, ...data };
    console.log(contact);
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  render() {
    const { contacts } = this.state;
    const { deleteContact, getContactData } = this;

    return (
      <Container>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm getContactData={getContactData} />
        </Section>
        <Section>
          <h2>Contacts</h2>
          {/* <Filter /> */}
          <ContactList contactList={contacts} onDeleteContact={deleteContact} />
        </Section>
      </Container>
    );
  }
}

export default App;
