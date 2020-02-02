import { createDeck, shuffleDeck } from 'utils/deck';

export const createPlayers = () => {
  const deck = shuffleDeck(createDeck());
  return [
    {
      name: 'Player 1',
      cards: deck.slice(0, 18),
    },
    {
      name: 'Player 2',
      cards: deck.slice(18, 36),
    },
  ];
};

export const calculateWinner = firstPlayer => {
  if (firstPlayer.cards.length === 0) {
    return 'Player 2 won game';
  }
  return 'Player 1 won game';
};

export const calculateWinnerRound = (cardFirstPlayer, cardSecondPlayer) => {
  if (cardFirstPlayer.value === cardSecondPlayer.value) {
    return 'Draw';
  }

  if (cardFirstPlayer.text === 'six' && cardSecondPlayer.text === 'ace') {
    return 'Player 1';
  }

  if (cardFirstPlayer.text === 'ace' && cardSecondPlayer.text === 'six') {
    return 'Player 2';
  }

  if (cardFirstPlayer.value > cardSecondPlayer.value) {
    return 'Player 1';
  }

  return 'Player 2';
};
