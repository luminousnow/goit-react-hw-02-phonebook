import React from 'react';
import s from './ContactListItem.module.css';

function ContactListItem({ id, name, number, onDeleteContact }) {
  return (
    <li className={s.listItem}>
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
  );
}

export default ContactListItem;
