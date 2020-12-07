import React, { Component } from 'react';
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

  getContactsData = data => {
    console.log(data);
  };

  render() {
    const { contacts } = this.state;
    const { deleteContact, getContactsData } = this;

    return (
      <Container>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm getContactsData={getContactsData} />
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
