import React from 'react';
import propTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({
  options,
  countPositiveFeedbackPercentage,
  countTotalFeedback,
}) => {
  const nameFeedback = Object.keys(options);
  return (
    <div className={s.container}>
      <h2>Statistic</h2>
      <ul className={s.items}>
        {nameFeedback.map(feedback => (
          <li className={s.stat} key={feedback}>
            {feedback} : {options[feedback]}
          </li>
        ))}
      </ul>
      {<p>Total: {countTotalFeedback()}</p>}
      {<p>Positive feedback: {countPositiveFeedbackPercentage()}</p>}
    </div>
  );
};
export default Statistics;

Statistics.propTypes = {
  options: propTypes.objectOf(propTypes.number),
  countPositiveFeedbackPercentage: propTypes.func.isRequired,
};
