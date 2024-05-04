import { DeckOfCards } from "@andrewscripts/deck-of-cards.js";
import { HokiCards } from "./hokiCards";

/** @typedef {import("./hokiCards").HokiCard} HokiCard */

const hokiDeck = new DeckOfCards(HokiCards);

/** @type {{[x: string]: {cards: HokiCard[]}}} */
const piles = {
  enchanter: { cards: [] },
  left: { cards: [] },
  middle: { cards: [] },
  right: { cards: [] },
  discard: { cards: hokiDeck.discardPile },
};

// Get templates for later
const faceUpTemplate = /** @type {HTMLTemplateElement} */ (document.getElementById("faceUpCardTemplate"));
const faceDownTemplate = /** @type {HTMLTemplateElement} */ (document.getElementById("faceDownCardTemplate"));

function newGame() {
  // recall cards
  hokiDeck.addToDrawPile(piles.enchanter.cards.splice(0));
  hokiDeck.addToDrawPile(piles.left.cards.splice(0));
  hokiDeck.addToDrawPile(piles.middle.cards.splice(0));
  hokiDeck.addToDrawPile(piles.right.cards.splice(0));
  hokiDeck.addToDrawPile(hokiDeck.discardPile.splice(0));

  // flip all face down and then shuffle
  hokiDeck.drawPile.forEach((card) => {
    card.facingDown = true;
  });
  hokiDeck.shuffle(3);

  // deal cards to piles
  piles.enchanter.cards.push(...hokiDeck.drawFromDrawPile(3));
  piles.left.cards.push(...hokiDeck.drawFromDrawPile(6));
  piles.middle.cards.push(...hokiDeck.drawFromDrawPile(6));
  piles.right.cards.push(...hokiDeck.drawFromDrawPile(6));
  hokiDeck.addToDiscardPile(hokiDeck.drawFromDrawPile(3));

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

/** @param {string} pileName */
function discardCard(pileName) {
  // get top card and discard it
  const discardedCard = piles[pileName].cards.splice(0, 1);
  hokiDeck.addToBottomOfDiscardPile(discardedCard);

  // get next top card and reveal it (if there is one)
  if (piles[pileName].cards.length) piles[pileName].cards[0].facingDown = false;

  // Re-render cards
  renderCards();
}


/**
 * @param {string} fromPile
 * @param {string} toPile
 */
function shiftCards(fromPile, toPile) {
  // get top card from origin pile
  const topCard = piles[fromPile].cards.shift()

  // if card found, add it to destination pile and reveal next top card
  if (topCard) {
    // get next top card and reveal it (if there is one)
    if (piles[fromPile].cards.length) piles[fromPile].cards[0].facingDown = false;

    piles[toPile].cards.unshift(topCard);
  }

  // re-render cards
  renderCards();
}

// Find all three displayed card piles and set them up for discarding and shifting
const displayedCardPiles = document.querySelectorAll("#cardPiles .card-pile");
displayedCardPiles.forEach((pile) => {
  // get pile name
  const pileName = pile.id.replace("Pile", "");

  // get and setup discard button
  const discardButton = pile.querySelector(`button#${pileName}Discard`);
  if (discardButton) {
    discardButton.addEventListener("click", () => discardCard(pileName));
  }

  // get and setup shift button(s)
  const shiftButtons = pile.querySelectorAll(`button.shift-button`);
  shiftButtons.forEach((shiftButton) => {
    // get from pile and destination
    const { fromPile, toPile } = /** @type {HTMLElement} */ (shiftButton).dataset;
    if (fromPile && toPile) {
      shiftButton.addEventListener("click", () => shiftCards(fromPile, toPile))
    }
  });
});

function revealEnchanterCards() {
  let card = piles.enchanter.cards.shift();
  card.facingDown = false;
  piles.left.cards.unshift(card);
  
  card = piles.enchanter.cards.shift();
  card.facingDown = false;
  piles.middle.cards.unshift(card);
  
  card = piles.enchanter.cards.shift();
  card.facingDown = false;
  piles.right.cards.unshift(card);
  
  renderCards();
}

document.addEventListener("DOMContentLoaded", function () {
  newGame();
});