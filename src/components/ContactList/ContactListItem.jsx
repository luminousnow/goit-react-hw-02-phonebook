import React from 'react';
import { string, number, func } from 'prop-types';
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

ContactListItem.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  number: number.isRequired,
  onDeleteContact: func.isRequired,
};

export default ContactListItem;
