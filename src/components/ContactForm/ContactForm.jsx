import React, { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // зміна полів інпута
  handleImputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  // клік на кнопку "add contact"
  onAddContactButtonPressed = e => {
    e.preventDefault();

    // пролкидаємо в Арр
    this.props.getContactsData(this.state);
  };

  render() {
    const { name, number } = this.state;
    const { onAddContactButtonPressed, handleImputChange } = this;

    return (
      <form onSubmit={onAddContactButtonPressed} className={s.form}>
        <fieldset className={s.fieldset}>
          <label className={s.label}>
            name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleImputChange}
              className={s.input}
            />
          </label>
          <label className={s.label}>
            number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={handleImputChange}
              className={s.input}
            />
          </label>
          <button type="submit" className={s.button}>
            <span className={s.btnText}>add</span> contacts
          </button>
        </fieldset>
      </form>
    );
  }
}

export default ContactForm;
