import React from 'react';
import propTypes from 'prop-types';

const Statistics = ({ options, procentFeedback }) => {
  const nameFeedback = Object.keys(options);
  return (
    <div>
      <h2>Statistic</h2>
      <ul>
        {nameFeedback.map(feedback => (
          <li key={feedback}>
            {feedback} : {options[feedback]}
          </li>
        ))}
      </ul>
      {<span>Positive feedback: {procentFeedback()}</span>}
    </div>
  );
};
export default Statistics;

Statistics.propTypes = {
  options: propTypes.objectOf(propTypes.number),
  procentFeedback: propTypes.func.isRequired,
};
