import React from 'react';
import { element } from 'prop-types';
import s from './Section.module.css';

function Section({ children }) {
  return <section className={s.section}>{children}</section>;
}

Section.propTypes = {
  children: element.isRequired,
};

export default Section;
