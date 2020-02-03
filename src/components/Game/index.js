import React, { useState } from 'react';

import './game.scss';
import {
  createPlayers,
  calculateWinner,
  calculateWinnerRound,
} from 'utils/game';
import Player from 'components/Player';
import Board from 'components/Board';
import Button from 'components/Button';

const Game = () => {
  const players = createPlayers();
  const [isGameFinish, setGameFinish] = useState(false);
  const [isFirstStep, setFirstStep] = useState(true);
  const [gameStatus, setGameStatus] = useState('');
  const [storageCards, setStorageCards] = useState([]);
  const [firstPlayer, setFirstPlayer] = useState(players[0]);
  const [secondPlayer, setSecondPlayer] = useState(players[1]);
  const [currentCardFirstPlayer, setCurrentCardFirstPlayer] = useState();
  const [currentCardSecondPlayer, setCurrentCardSecondPlayer] = useState();

  const recalculateCards = (
    winner,
    nextCardFirstPlayer,
    nextCardSecondPlayer
  ) => {
    switch (winner) {
      case 'Player 1':
        setFirstPlayer({
          ...firstPlayer,
          cards: [
            nextCardSecondPlayer,
            nextCardFirstPlayer,
            ...storageCards,
            ...firstPlayer.cards.slice(0, -1),
          ],
        });
        setSecondPlayer({
          ...secondPlayer,
          cards: secondPlayer.cards.slice(0, -1),
        });
        setStorageCards([]);
        return;
      case 'Player 2':
        setFirstPlayer({
          ...firstPlayer,
          cards: firstPlayer.cards.slice(0, -1),
        });
        setSecondPlayer({
          ...secondPlayer,
          cards: [
            nextCardFirstPlayer,
            nextCardSecondPlayer,
            ...storageCards,
            ...secondPlayer.cards.slice(0, -1),
          ],
        });
        setStorageCards([]);
        return;
      default:
        setStorageCards([
          nextCardFirstPlayer,
          nextCardSecondPlayer,
          ...storageCards,
        ]);
        setFirstPlayer({
          ...firstPlayer,
          cards: firstPlayer.cards.slice(0, -1),
        });
        setSecondPlayer({
          ...secondPlayer,
          cards: secondPlayer.cards.slice(0, -1),
        });
    }
  };

  const takeNextStep = () => {
    if (firstPlayer.cards.length === 0 || secondPlayer.cards.length === 0) {
      setGameStatus(calculateWinner(firstPlayer));
      setGameFinish(true);
      return;
    }

    const nextCardFirstPlayer = firstPlayer.cards[firstPlayer.cards.length - 1];
    const nextCardSecondPlayer =
      secondPlayer.cards[secondPlayer.cards.length - 1];
    const winner = calculateWinnerRound(
      nextCardFirstPlayer,
      nextCardSecondPlayer
    );

    let newGameStatus;
    if (winner === 'Draw') {
      newGameStatus = 'Draw, need to throw next cards';
    } else if (winner === 'Player 1') {
      newGameStatus = 'Player 1 won this round';
    } else {
      newGameStatus = 'Player 2 won this round';
    }

    setGameStatus(newGameStatus);
    setCurrentCardFirstPlayer(nextCardFirstPlayer);
    setCurrentCardSecondPlayer(nextCardSecondPlayer);
    recalculateCards(winner, nextCardFirstPlayer, nextCardSecondPlayer);
  };

  const takeFirstStep = () => {
    setFirstStep(false);
    takeNextStep();
  };

  const restartGame = () => {
    const newPlayers = createPlayers();
    setFirstPlayer(newPlayers[0]);
    setSecondPlayer(newPlayers[1]);
    setGameFinish(false);
    setFirstStep(true);
    setGameStatus('');
  };

  return (
    <div className="game">
      {isGameFinish ? (
        <div className="game__info">
          <h1>{gameStatus}</h1>
          <Button onClick={restartGame}>Restart game</Button>
        </div>
      ) : (
        <>
          <Player
            name={firstPlayer.name}
            remainedCards={firstPlayer.cards.length}
          />
          {isFirstStep ? (
            <Button onClick={takeFirstStep}>Take first step</Button>
          ) : (
            <Board
              currentCardFirstPlayer={currentCardFirstPlayer}
              currentCardSecondPlayer={currentCardSecondPlayer}
              gameStatus={gameStatus}
              takeNextStep={takeNextStep}
            />
          )}
          <Player
            name={secondPlayer.name}
            remainedCards={secondPlayer.cards.length}
          />
        </>
      )}
    </div>
  );
};

export default Game;
