import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Container from './components/Container';
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
          {this.state.contacts.length > 0 && <h2>Contacts</h2>}
          {/* <Filter /> */}
          <ContactList contactList={contacts} onDeleteContact={deleteContact} />
        </Section>
      </Container>
    );
  }
}

export default App;
