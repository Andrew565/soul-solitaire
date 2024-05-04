import { DeckOfCards } from "@andrewscripts/deck-of-cards.js";
import { SoulCards } from "./soulCards";

/** @typedef {import("./soulCards").SoulCard} SoulCard */

const soulDeck = new DeckOfCards(SoulCards);

/** @type {{[x: string]: {cards: SoulCard[]}}} */
const piles = {
  enchanter: { cards: [] },
  left: { cards: [] },
  middle: { cards: [] },
  right: { cards: [] },
  discard: { cards: soulDeck.discardPile },
};

// Get templates for later
const faceUpTemplate = /** @type {HTMLTemplateElement} */ (document.getElementById("faceUpCardTemplate"));
const faceDownTemplate = /** @type {HTMLTemplateElement} */ (document.getElementById("faceDownCardTemplate"));

function newGame() {
  // recall cards
  soulDeck.addToDrawPile(piles.enchanter.cards.splice(0));
  soulDeck.addToDrawPile(piles.left.cards.splice(0));
  soulDeck.addToDrawPile(piles.middle.cards.splice(0));
  soulDeck.addToDrawPile(piles.right.cards.splice(0));
  soulDeck.addToDrawPile(soulDeck.discardPile.splice(0));

  // flip all face down and then shuffle
  soulDeck.drawPile.forEach((card) => {
    card.facingDown = true;
  });
  soulDeck.shuffle(3);

  // deal cards to piles
  piles.enchanter.cards.push(...soulDeck.drawFromDrawPile(3));
  piles.left.cards.push(...soulDeck.drawFromDrawPile(6));
  piles.middle.cards.push(...soulDeck.drawFromDrawPile(6));
  piles.right.cards.push(...soulDeck.drawFromDrawPile(6));
  soulDeck.addToDiscardPile(soulDeck.drawFromDrawPile(3));

  // reveal top mirage cards and discarded cards
  /** @type {SoulCard} */ (piles.left.cards[0]).facingDown = false;
  /** @type {SoulCard} */ (piles.middle.cards[0]).facingDown = false;
  /** @type {SoulCard} */ (piles.right.cards[0]).facingDown = false;
  soulDeck.discardPile.forEach((card) => {
    /** @type {SoulCard} */ (card).facingDown = false;
  });

  // trigger display of cards
  renderCards();
}

document.getElementById("newGameButton")?.addEventListener("click", () => newGame());

/**
 * @param {SoulCard} chosenCard
 * @param {number} index
 */
function makeFaceUpCard(chosenCard, index) {
  // Clone Template
  const faceUpCard = /** @type {HTMLElement} */ (faceUpTemplate?.content.cloneNode(true));

  // Get main element and add color and index to it
  const cardEl = faceUpCard.querySelector(".soul-card");
  if (cardEl) {
    cardEl.classList.add(chosenCard.color);
    cardEl.setAttribute("style", `--index: ${index}`);
  }

  // Set card's symbol and name
  faceUpCard.querySelectorAll(".soul-card__symbol").forEach((symbolDiv) => {
    symbolDiv.innerHTML = chosenCard.symbol;
  });
  const name = faceUpCard.querySelector(".soul-card__name");
  if (name) name.innerHTML = chosenCard.name;

  return /** @type {Node} */ (faceUpCard);
}

/** @param {number} index */
function makeFaceDownCard(index) {
  const faceDownCard = /** @type {HTMLElement} */ (faceDownTemplate?.content.cloneNode(true));
  const fdCardEl = faceDownCard.querySelector(".soul-card");
  if (fdCardEl) fdCardEl.setAttribute("style", `--index: ${index}`);
  return faceDownCard;
}

function renderCards() {
  // for each of the mirage piles, render the cards with the last card on the bottom of the pile
  Object.entries(piles).forEach(([pileName, { cards }]) => {
    // If the pileName is "discard", sort the cards by group
    if (pileName === "discard") {
      cards.sort((a, b) => {
        if (a.group < b.group) {
          return -1;
        } else if (a.group > b.group) {
          return 1;
        }
        return 0;
      });
    }

    // Make all of the cards
    const cardEls = /** @type {SoulCard[]} */ (cards).map((card, index) => {
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
  soulDeck.addToBottomOfDiscardPile(discardedCard);

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
  const topCard = piles[fromPile].cards.shift();

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
      shiftButton.addEventListener("click", () => shiftCards(fromPile, toPile));
    }
  });
});

function revealEnchanterCards() {
  let card = piles.enchanter.cards.shift();
  if (card) {
    card.facingDown = false;
    piles.left.cards.unshift(card);
  }

  card = piles.enchanter.cards.shift();
  if (card) {
    card.facingDown = false;
    piles.middle.cards.unshift(card);
  }

  card = piles.enchanter.cards.shift();
  if (card) {
    card.facingDown = false;
    piles.right.cards.unshift(card);
  }

  renderCards();
}

document.getElementById("enchanterReveal")?.addEventListener("click", () => revealEnchanterCards());

document.addEventListener("DOMContentLoaded", function () {
  newGame();
});