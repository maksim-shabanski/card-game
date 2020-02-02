import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

const Board = ({
  gameStatus,
  currentCardFirstPlayer,
  currentCardSecondPlayer,
  takeNextStep,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div>{gameStatus}</div>
      <div
        style={{
          display: 'flex',
          width: '100px',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {currentCardFirstPlayer.text}
          {currentCardFirstPlayer.sign}
        </div>
        <div>
          {currentCardSecondPlayer.text}
          {currentCardSecondPlayer.sign}
        </div>
      </div>
      <Button onClick={takeNextStep}>Next step</Button>
    </div>
  );
};

Board.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  currentCardFirstPlayer: PropTypes.shape({
    text: PropTypes.string,
    sign: PropTypes.string,
  }).isRequired,
  currentCardSecondPlayer: PropTypes.shape({
    text: PropTypes.string,
    sign: PropTypes.string,
  }).isRequired,
  takeNextStep: PropTypes.func.isRequired,
};

export default Board;
