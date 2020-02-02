import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ name }) => {
  return <div style={{ width: '100px', textAlign: 'center' }}>{name}</div>;
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Player;
