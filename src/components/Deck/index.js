import React, { useState } from 'react';

import { createDeck, shuffleDeck } from 'utils/deck';

const Deck = () => {
  const [deck, setDeck] = useState(createDeck());

  const handleClick = () => {
    setDeck(shuffleDeck(deck));
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        Shuffle deck
      </button>
      <ol>
        {deck.map(({ name, suit, sign }) => (
          <li key={`${name}-${suit}`}>{`${name} ${sign}`}</li>
        ))}
      </ol>
    </>
  );
};

export default Deck;
