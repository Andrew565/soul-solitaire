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

let CommandManager;

// Get templates for later
const faceUpTemplate = /** @type {HTMLTemplateElement} */ (document.getElementById("faceUpCardTemplate"));
const faceDownTemplate = /** @type {HTMLTemplateElement} */ (document.getElementById("faceDownCardTemplate"));
const emptyTemplate = /** @type {HTMLTemplateElement} */ (document.getElementById("emptyCardTemplate"));

function newGame() {
  // setup a new command manager for this game
  CommandManager = createCommandManager();

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
document.getElementById("undoButton")?.addEventListener("click", () => CommandManager.undo());
document.getElementById("redoButton")?.addEventListener("click", () => CommandManager.redo());

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
  const { color, group } = chosenCard;
  if (name) name.innerHTML = `${color}<br/>${group}`;

  return /** @type {Node} */ (faceUpCard);
}

/** @param {number} index */
function makeFaceDownCard(index) {
  const faceDownCard = /** @type {HTMLElement} */ (faceDownTemplate?.content.cloneNode(true));
  const fdCardEl = faceDownCard.querySelector(".soul-card");
  if (fdCardEl) fdCardEl.setAttribute("style", `--index: ${index}`);
  return faceDownCard;
}

/** @param {number} index */
function makeEmptyCard(index) {
  const emptyCard = /** @type {HTMLElement} */ (emptyTemplate?.content.cloneNode(true));
  const emptyCardEl = emptyCard.querySelector(".soul-card");
  if (emptyCardEl) emptyCardEl.setAttribute("style", `--index: ${index}`);
  return emptyCard;
}

function renderCards() {
  // for each of the mirage piles, render the cards with the last card on the bottom of the pile
  Object.entries(piles).forEach(([pileName, { cards }]) => {
    // If the pileName is "discard", sort the cards by group
    if (pileName === "discard") {
      // clone the pile so that we can maintain the undo functionality
      cards = [...cards];
      cards.sort(sortDiscardPile);
    }

    // Make all of the cards
    const cardEls = /** @type {SoulCard[]} */ (cards).map((card, index) => {
      return (card.facingDown) ? makeFaceDownCard(index) : makeFaceUpCard(card, index);
    });

    const nextIndex = cardEls.length;
    const emptyCard = makeEmptyCard(nextIndex);
    cardEls.push(emptyCard);

    // Add click listener for click-to-move
    if (pileName !== "discard" && cards.length > 0) {
      const topCardData = cards[0];
      if (!topCardData.facingDown) {
        // cardEls are DocumentFragments, so we need to query inside them differently
        const topCardEl = /** @type {HTMLElement} */ (cardEls[0]).querySelector(".soul-card");
        if (topCardEl) {
          topCardEl.addEventListener("click", () => CommandManager.doShift(pileName, "discard"));
        }
      }
    }

    // Next, append cards to pile
    const pileEl = document.querySelector(`#${pileName}Pile.pile-cards`);
    pileEl?.replaceChildren(...cardEls);
  });
}

function sortDiscardPile(a, b) {
  if (a.group < b.group) {
    return -1;
  } else if (a.group > b.group) {
    return 1;
  } else {
    return 0;
  }
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
    topCard.facingDown = false; // reveal the card

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
    discardButton.addEventListener("click", () => CommandManager.doShift(pileName, "discard"));
  }

  // get and setup shift button(s)
  const shiftButtons = pile.querySelectorAll(`button.shift-button`);
  shiftButtons.forEach((shiftButton) => {
    // get from pile and destination (have to be lowercase)
    const { frompile, topile } = /** @type {HTMLElement} */ (shiftButton).dataset;
    if (frompile && topile) {
      shiftButton.addEventListener("click", () => CommandManager.doShift(frompile, topile));
    }
  });
});

function revealEnchanterCards() {
  // Use CommandManager.doShift to move cards from enchanter to left, middle, and right
  CommandManager.doShift("enchanter", "left");
  CommandManager.doShift("enchanter", "middle");
  CommandManager.doShift("enchanter", "right");
}

document.getElementById("enchanterReveal")?.addEventListener("click", () => revealEnchanterCards());

// Function to create commandManagers, should be one per game to manage history (undo/redo)
const createCommandManager = () => {
  /** @type {{fromPile: string, toPile: string}[]} */
  // @ts-ignore
  let history = [null];
  let position = 0;

  return {
    /**
     * @param {string} fromPile
     * @param {string} toPile
     */
    doShift(fromPile, toPile) {
      // If current position is anywhere other than the end of the history array, keep only the past history
      if (position < history.length - 1) {
        history = history.slice(0, position + 1);
      }

      history.push({ fromPile, toPile });
      position += 1;
      shiftCards(fromPile, toPile);
    },

    undo() {
      if (position > 0) {
        const { fromPile, toPile } = history[position];
        position -= 1;
        shiftCards(toPile, fromPile);
      }
    },

    redo() {
      if (position < history.length - 1) {
        position += 1;
        const { fromPile, toPile } = history[position];
        shiftCards(fromPile, toPile);
      }
    },
  };
};

document.addEventListener("DOMContentLoaded", function () {
  newGame();
});
