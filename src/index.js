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

  // Start by rendering a single card
  const faceUpTemplate = /** @type {HTMLTemplateElement} */ (document.getElementById("faceUpCardTemplate"));
  const faceDownTemplate = /** @type {HTMLTemplateElement} */ (document.getElementById("faceDownCardTemplate"));

  // Create card
  const faceUpCard = /** @type {HTMLElement} */ (faceUpTemplate?.content.cloneNode(true));
  const chosenCard = /** @type {HokiCard} */ (piles.left.cards[0]);
  faceUpCard.querySelector(".hoki-card")?.classList.add(chosenCard.color);
  faceUpCard.querySelectorAll(".hoki-card__symbol").forEach((symbolDiv) => {
    symbolDiv.innerHTML = chosenCard.symbol;
  });
  const name = faceUpCard.querySelector(".hoki-card__name");
  if (name) name.innerHTML = chosenCard.name;

  // Add card to DOM
  const leftPileEl = document.querySelector("#leftPile .pile-cards");
  if (leftPileEl) leftPileEl.appendChild(faceUpCard);

  // Create face-down card
  const faceDownCard = /** @type {HTMLElement} */ (faceDownTemplate?.content.cloneNode(true));
  const fdCardEl = faceDownCard.querySelector(".hoki-card");
  if (fdCardEl) fdCardEl.setAttribute("style", "--index: 1");
  if (leftPileEl) leftPileEl.appendChild(faceDownCard);

  // Create second face-down card
  const faceDownCard2 = /** @type {HTMLElement} */ (faceDownTemplate?.content.cloneNode(true));
  const fdCardEl2 = faceDownCard2.querySelector(".hoki-card");
  if (fdCardEl2) fdCardEl2.setAttribute("style", "--index: 2");
  if (leftPileEl) leftPileEl.appendChild(faceDownCard2);
}