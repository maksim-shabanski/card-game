import suits from 'constants/suits';
import ranks from 'constants/ranks';

export const createDeck = () => {
  const cards = [];

  ranks.forEach(rank => {
    suits.forEach(suit => cards.push({ ...rank, ...suit }));
  });

  return cards;
};

export const shuffleDeck = ([...deck]) => {
  let { length: deckLength } = deck;

  while (deckLength) {
    const newPos = Math.floor(Math.random() * deckLength--); // eslint-disable-line
    [deck[deckLength], deck[newPos]] = [deck[newPos], deck[deckLength]];
  }

  return deck;
};
