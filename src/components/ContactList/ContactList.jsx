import React from 'react';
import { array } from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contactList, onDeleteContact }) {
  return (
    <ul className={s.contactList}>
      {contactList.map(({ id, name, number }) => (
        <li key={id} className={s.listItem}>
          <p className={s.text}>
            {name}: {number}
          </p>
          <button
            type="button"
            className={s.button}
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contactList: array.isRequired,
};

export default ContactList;
