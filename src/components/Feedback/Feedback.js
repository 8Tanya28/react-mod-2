import React from 'react';
import s from './Feedback.module.css';
import propTypes from 'prop-types';

const Feedback = ({ options, increment }) => {
  const Button = Object.keys(options);

  return Button.map(button => (
    <button
      key={button}
      className={s.btnFeedback}
      onClick={() => increment(button)}
    >
      {button}
    </button>
  ));
};
export default Feedback;

Feedback.propTypes = {
  options: propTypes.objectOf(propTypes.number),
  increment: propTypes.func.isRequired,
};
