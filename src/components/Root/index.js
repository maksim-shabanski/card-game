import React, { useState } from 'react';

import './root.scss';
import Button from 'components/Button';
import Game from 'components/Game';

const Root = () => {
  const [isGameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(!isGameStarted);
  };

  return (
    <main>
      {isGameStarted ? (
        <Game />
      ) : (
        <Button size="large" onClick={handleStartGame}>
          Start new game
        </Button>
      )}
    </main>
  );
};

export default Root;
