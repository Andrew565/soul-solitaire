import { DeckOfCards } from "@andrewscripts/deck-of-cards.js";
import { HokiCards } from "./hokiCards";

/** @typedef {import("@andrewscripts/deck-of-cards.js/dist/DeckOfCards").Card} Card */
/** @typedef {import("./hokiCards").HokiCard} HokiCard */

function updateElementText(elementId, text) {
  const el = document.getElementById(elementId);
  if (el) el.innerText = text;
}

const hokiDeck = new DeckOfCards(HokiCards);

hokiDeck.shuffle(3);
const oneThirdOfCards = Math.floor(hokiDeck.drawPile.length / 3);

/** @type {{[x: string]: {cards: Card[]}}} */
const piles = {
  enchanter: { cards: [] },
  left: { cards: [] },
  middle: { cards: [] },
  right: { cards: [] },
};

function newGame() {
  // recall cards
  hokiDeck.addToDrawPile(piles.enchanter.cards.splice(0));
  hokiDeck.addToDrawPile(piles.left.cards.splice(0));
  hokiDeck.addToDrawPile(piles.middle.cards.splice(0));
  hokiDeck.addToDrawPile(piles.right.cards.splice(0));
  hokiDeck.addToDrawPile(hokiDeck.discardPile.splice(0));

  // flip all face down and then shuffle
  hokiDeck.drawPile.forEach((card) => {
    /** @type {HokiCard} */ (card).facingDown = true;
  });
  hokiDeck.shuffle(3);

  // deal cards to piles
  piles.enchanter.cards.push(...hokiDeck.drawFromDrawPile(3));
  piles.left.cards.push(...hokiDeck.drawFromDrawPile(6));
  piles.middle.cards.push(...hokiDeck.drawFromDrawPile(6));
  piles.right.cards.push(...hokiDeck.drawFromDrawPile(6));
  hokiDeck.addToDiscardPile(hokiDeck.drawFromDrawPile(3));

  // reveal top mirage cards
  /** @type {HokiCard} */ (piles.left.cards[0]).facingDown = false;
  /** @type {HokiCard} */ (piles.middle.cards[0]).facingDown = false;
  /** @type {HokiCard} */ (piles.right.cards[0]).facingDown = false;

  // trigger display of cards
  renderCards();
}

document.getElementById("newGameButton")?.addEventListener("click", () => newGame());

function renderCards() {
  // for each of the mirage piles, render the cards with the last card on the bottom of the pile
}
