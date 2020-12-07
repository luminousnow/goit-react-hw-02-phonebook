import React, { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // динамічно рендерить зміну полів інпутів
  handleImputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  // виконується при Сабміті форми
  onSubmitPress = e => {
    e.preventDefault();

    // результати полів прокидає в Арр
    this.props.getContactsData(this.state);
    this.resetFormField();
  };

  // очищає поля форми
  resetFormField = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { onSubmitPress, handleImputChange } = this;

    return (
      <form onSubmit={onSubmitPress} className={s.form}>
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
