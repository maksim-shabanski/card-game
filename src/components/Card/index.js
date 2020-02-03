import React from 'react';
import PropTypes from 'prop-types';

import './card.scss';

const Card = ({ card }) => {
  const prefix = 'card';
  const { text, suit, sign } = card;

  return (
    <div className={`${prefix} ${prefix}--${suit}`} data-value={text}>
      <div className={`${prefix}__sign`}>{sign}</div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    text: PropTypes.string,
    suit: PropTypes.string,
    sign: PropTypes.string,
  }).isRequired,
};

export default Card;
