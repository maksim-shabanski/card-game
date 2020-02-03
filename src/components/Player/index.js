import React from 'react';
import PropTypes from 'prop-types';

import './player.scss';

const Player = ({ remainedCards, name }) => {
  return (
    <div className="player">
      {name} <br /> count cards: {remainedCards}
    </div>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  remainedCards: PropTypes.number.isRequired,
};

export default Player;
