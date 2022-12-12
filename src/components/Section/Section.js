import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

export default Section;
