import React from 'react';
import PropTypes from 'prop-types';

import './board.scss';
import Button from 'components/Button';

const Board = ({
  gameStatus,
  currentCardFirstPlayer,
  currentCardSecondPlayer,
  takeNextStep,
}) => {
  return (
    <div className="board">
      <div className="board__status">{gameStatus}</div>
      <div className="board__cards">
        <div
          className={`card card--${currentCardFirstPlayer.suit}`}
          data-value={currentCardFirstPlayer.text}
        >
          <div className="card__sign">{currentCardFirstPlayer.sign}</div>
        </div>
        <div
          className={`card card--${currentCardSecondPlayer.suit}`}
          data-value={currentCardSecondPlayer.text}
        >
          <div className="card__sign">{currentCardSecondPlayer.sign}</div>
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
    suit: PropTypes.string,
  }).isRequired,
  currentCardSecondPlayer: PropTypes.shape({
    text: PropTypes.string,
    sign: PropTypes.string,
    suit: PropTypes.string,
  }).isRequired,
  takeNextStep: PropTypes.func.isRequired,
};

export default Board;
