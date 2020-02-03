import React from 'react';
import PropTypes from 'prop-types';

import './board.scss';
import Button from 'components/Button';
import Card from 'components/Card';

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
        <Card card={currentCardFirstPlayer} />
        <Card card={currentCardSecondPlayer} />
      </div>
      <Button onClick={takeNextStep}>Next step</Button>
    </div>
  );
};

Board.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  currentCardFirstPlayer: PropTypes.shape({
    text: PropTypes.string,
    suit: PropTypes.string,
    sign: PropTypes.string,
  }).isRequired,
  currentCardSecondPlayer: PropTypes.shape({
    text: PropTypes.string,
    suit: PropTypes.string,
    sign: PropTypes.string,
  }).isRequired,
  takeNextStep: PropTypes.func.isRequired,
};

export default Board;
