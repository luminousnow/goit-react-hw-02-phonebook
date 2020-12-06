import React from 'react';
import { string } from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contactList }) {
  return (
    <ul className={s.contactList}>
      {contactList.map(({ id, name, number }) => (
        <li key={id} className={s.listItem}>
          <p className={s.text}>
            {name}: {number}
          </p>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  number: string.isRequired,
};

export default ContactList;
