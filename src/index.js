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
  discard: { cards: hokiDeck.discardPile },
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
  // console.log("Discard Pile State at new:", hokiDeck.discardPile);

  // reveal top mirage cards and discarded cards
  /** @type {HokiCard} */ (piles.left.cards[0]).facingDown = false;
  /** @type {HokiCard} */ (piles.middle.cards[0]).facingDown = false;
  /** @type {HokiCard} */ (piles.right.cards[0]).facingDown = false;
  hokiDeck.discardPile.forEach((card) => {
    /** @type {HokiCard} */ (card).facingDown = false;
  });

  // trigger display of cards
  renderCards();
}

document.getElementById("newGameButton")?.addEventListener("click", () => newGame());

// Get templates for later
const faceUpTemplate = /** @type {HTMLTemplateElement} */ (document.getElementById("faceUpCardTemplate"));
const faceDownTemplate = /** @type {HTMLTemplateElement} */ (document.getElementById("faceDownCardTemplate"));

/**
 * @param {HokiCard} chosenCard
 * @param {number} index
 */
function makeFaceUpCard(chosenCard, index) {
  // Clone Template
  const faceUpCard = /** @type {HTMLElement} */ (faceUpTemplate?.content.cloneNode(true));

  // Get main element and add color and index to it
  const cardEl = faceUpCard.querySelector(".hoki-card");
  if (cardEl) {
    cardEl.classList.add(chosenCard.color);
    cardEl.setAttribute("style", `--index: ${index}`);
  }

  // Set card's symbol and name
  faceUpCard.querySelectorAll(".hoki-card__symbol").forEach((symbolDiv) => {
    symbolDiv.innerHTML = chosenCard.symbol;
  });
  const name = faceUpCard.querySelector(".hoki-card__name");
  if (name) name.innerHTML = chosenCard.name;

  return /** @type {Node} */ (faceUpCard);
}

/** @param {number} index */
function makeFaceDownCard(index) {
  const faceDownCard = /** @type {HTMLElement} */ (faceDownTemplate?.content.cloneNode(true));
  const fdCardEl = faceDownCard.querySelector(".hoki-card");
  if (fdCardEl) fdCardEl.setAttribute("style", `--index: ${index}`);
  return faceDownCard;
}

function renderCards() {
  // for each of the mirage piles, render the cards with the last card on the bottom of the pile
  Object.entries(piles).forEach(([pileName, { cards }]) => {
    // First make all of the cards
    const cardEls = /** @type {HokiCard[]} */ (cards).map((card, index) => {
      if (card.facingDown) {
        return makeFaceDownCard(index);
      } else {
        return makeFaceUpCard(card, index);
      }
    });

    // Next, append cards to pile
    const pileEl = document.querySelector(`#${pileName}Pile .pile-cards`);
    pileEl?.replaceChildren(...cardEls);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  newGame();
});