import React from 'react';
import { element } from 'prop-types';
import s from './Container.module.css';

function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

Container.propTypes = {
  children: element.isRequired,
};

export default Container;
