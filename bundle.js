(function () {
  'use strict';

  var n=[{numberRank:0,nameRank:"Two",initial:"2",suit:"Clubs",name:"Two of Clubs"},{numberRank:1,nameRank:"Three",initial:"3",suit:"Clubs",name:"Three of Clubs"},{numberRank:2,nameRank:"Four",initial:"4",suit:"Clubs",name:"Four of Clubs"},{numberRank:3,nameRank:"Five",initial:"5",suit:"Clubs",name:"Five of Clubs"},{numberRank:4,nameRank:"Six",initial:"6",suit:"Clubs",name:"Six of Clubs"},{numberRank:5,nameRank:"Seven",initial:"7",suit:"Clubs",name:"Seven of Clubs"},{numberRank:6,nameRank:"Eight",initial:"8",suit:"Clubs",name:"Eight of Clubs"},{numberRank:7,nameRank:"Nine",initial:"9",suit:"Clubs",name:"Nine of Clubs"},{numberRank:8,nameRank:"Ten",initial:"10",suit:"Clubs",name:"Ten of Clubs"},{numberRank:9,nameRank:"Jack",initial:"J",suit:"Clubs",name:"Jack of Clubs"},{numberRank:10,nameRank:"Queen",initial:"Q",suit:"Clubs",name:"Queen of Clubs"},{numberRank:11,nameRank:"King",initial:"K",suit:"Clubs",name:"King of Clubs"},{numberRank:12,nameRank:"Ace",initial:"A",suit:"Clubs",name:"Ace of Clubs"},{numberRank:0,nameRank:"Two",initial:"2",suit:"Hearts",name:"Two of Hearts"},{numberRank:1,nameRank:"Three",initial:"3",suit:"Hearts",name:"Three of Hearts"},{numberRank:2,nameRank:"Four",initial:"4",suit:"Hearts",name:"Four of Hearts"},{numberRank:3,nameRank:"Five",initial:"5",suit:"Hearts",name:"Five of Hearts"},{numberRank:4,nameRank:"Six",initial:"6",suit:"Hearts",name:"Six of Hearts"},{numberRank:5,nameRank:"Seven",initial:"7",suit:"Hearts",name:"Seven of Hearts"},{numberRank:6,nameRank:"Eight",initial:"8",suit:"Hearts",name:"Eight of Hearts"},{numberRank:7,nameRank:"Nine",initial:"9",suit:"Hearts",name:"Nine of Hearts"},{numberRank:8,nameRank:"Ten",initial:"10",suit:"Hearts",name:"Ten of Hearts"},{numberRank:9,nameRank:"Jack",initial:"J",suit:"Hearts",name:"Jack of Hearts"},{numberRank:10,nameRank:"Queen",initial:"Q",suit:"Hearts",name:"Queen of Hearts"},{numberRank:11,nameRank:"King",initial:"K",suit:"Hearts",name:"King of Hearts"},{numberRank:12,nameRank:"Ace",initial:"A",suit:"Hearts",name:"Ace of Hearts"},{numberRank:0,nameRank:"Two",initial:"2",suit:"Spades",name:"Two of Spades"},{numberRank:1,nameRank:"Three",initial:"3",suit:"Spades",name:"Three of Spades"},{numberRank:2,nameRank:"Four",initial:"4",suit:"Spades",name:"Four of Spades"},{numberRank:3,nameRank:"Five",initial:"5",suit:"Spades",name:"Five of Spades"},{numberRank:4,nameRank:"Six",initial:"6",suit:"Spades",name:"Six of Spades"},{numberRank:5,nameRank:"Seven",initial:"7",suit:"Spades",name:"Seven of Spades"},{numberRank:6,nameRank:"Eight",initial:"8",suit:"Spades",name:"Eight of Spades"},{numberRank:7,nameRank:"Nine",initial:"9",suit:"Spades",name:"Nine of Spades"},{numberRank:8,nameRank:"Ten",initial:"10",suit:"Spades",name:"Ten of Spades"},{numberRank:9,nameRank:"Jack",initial:"J",suit:"Spades",name:"Jack of Spades"},{numberRank:10,nameRank:"Queen",initial:"Q",suit:"Spades",name:"Queen of Spades"},{numberRank:11,nameRank:"King",initial:"K",suit:"Spades",name:"King of Spades"},{numberRank:12,nameRank:"Ace",initial:"A",suit:"Spades",name:"Ace of Spades"},{numberRank:0,nameRank:"Two",initial:"2",suit:"Diamonds",name:"Two of Diamonds"},{numberRank:1,nameRank:"Three",initial:"3",suit:"Diamonds",name:"Three of Diamonds"},{numberRank:2,nameRank:"Four",initial:"4",suit:"Diamonds",name:"Four of Diamonds"},{numberRank:3,nameRank:"Five",initial:"5",suit:"Diamonds",name:"Five of Diamonds"},{numberRank:4,nameRank:"Six",initial:"6",suit:"Diamonds",name:"Six of Diamonds"},{numberRank:5,nameRank:"Seven",initial:"7",suit:"Diamonds",name:"Seven of Diamonds"},{numberRank:6,nameRank:"Eight",initial:"8",suit:"Diamonds",name:"Eight of Diamonds"},{numberRank:7,nameRank:"Nine",initial:"9",suit:"Diamonds",name:"Nine of Diamonds"},{numberRank:8,nameRank:"Ten",initial:"10",suit:"Diamonds",name:"Ten of Diamonds"},{numberRank:9,nameRank:"Jack",initial:"J",suit:"Diamonds",name:"Jack of Diamonds"},{numberRank:10,nameRank:"Queen",initial:"Q",suit:"Diamonds",name:"Queen of Diamonds"},{numberRank:11,nameRank:"King",initial:"K",suit:"Diamonds",name:"King of Diamonds"},{numberRank:12,nameRank:"Ace",initial:"A",suit:"Diamonds",name:"Ace of Diamonds"}],m={numberRank:99,nameRank:"Joker",initial:"JO",suit:"Joker",name:"Joker (Plain)"},r={numberRank:99,nameRank:"Joker",initial:"JO",suit:"Joker",name:"Joker (Fancy)"};[...n,m,r];var e=class{drawPile;discardPile;constructor(a){this.drawPile=a,this.discardPile=[],this.shuffle(7);}shuffle(a){for(var u=this.drawPile.length,i=0;i<a;i++)for(let s of this.drawPile){let o=this.drawPile.indexOf(s),t=Math.floor(Math.random()*u);this.drawPile[o]=this.drawPile[t],this.drawPile[t]=s;}}addToBottomOfDiscardPile(a){this.discardPile.push(...a);}addToDiscardPile(a){this.addToTopOfDiscardPile(a);}addToTopOfDiscardPile(a){this.discardPile.unshift(...a);}drawFromDiscardPile(a){return this.discardPile.splice(0,a)}addToBottomOfDrawPile(a){this.drawPile.push(...a);}addToDrawPile(a){this.addToBottomOfDrawPile(a);}addToTopOfDrawPile(a){this.drawPile.unshift(...a);}drawFromDrawPile(a){return this.drawPile.splice(0,a)}};new e(n);

  /**
   * @typedef {Object} HokiCard
   * @prop {string} name
   * @prop {string} group
   * @prop {string} symbol
   * @prop {"Red" | "Black" | "Blue" } color
   * @prop {boolean} facingDown
   */

  /** @type {HokiCard[]} */
  const HokiCards = [
    {
      name: "Red Eternity",
      group: "Eternity",
      symbol: "∞",
      color: "Red",
      facingDown: true,
    },
    {
      name: "Black Eternity",
      group: "Eternity",
      symbol: "∞",
      color: "Black",
      facingDown: true,
    },
    {
      name: "Blue Eternity",
      group: "Eternity",
      symbol: "∞",
      color: "Blue",
      facingDown: true,
    },
    {
      name: "Red Map",
      group: "Map",
      symbol: "⨳",
      color: "Red",
      facingDown: true,
    },
    {
      name: "Black Map",
      group: "Map",
      symbol: "⨳",
      color: "Black",
      facingDown: true,
    },
    {
      name: "Blue Map",
      group: "Map",
      symbol: "⨳",
      color: "Blue",
      facingDown: true,
    },
    {
      name: "Red Medium",
      group: "Medium",
      symbol: "⊙",
      color: "Red",
      facingDown: true,
    },
    {
      name: "Black Medium",
      group: "Medium",
      symbol: "⊙",
      color: "Black",
      facingDown: true,
    },
    {
      name: "Blue Medium",
      group: "Medium",
      symbol: "⊙",
      color: "Blue",
      facingDown: true,
    },
    {
      name: "Red Origin",
      group: "Origin",
      symbol: "▲",
      color: "Red",
      facingDown: true,
    },
    {
      name: "Black Origin",
      group: "Origin",
      symbol: "▲",
      color: "Black",
      facingDown: true,
    },
    {
      name: "Blue Origin",
      group: "Origin",
      symbol: "▲",
      color: "Blue",
      facingDown: true,
    },
    {
      name: "Red Fire",
      group: "Fire",
      symbol: "🔥",
      color: "Red",
      facingDown: true,
    },
    {
      name: "Black Fire",
      group: "Fire",
      symbol: "🔥",
      color: "Black",
      facingDown: true,
    },
    {
      name: "Blue Fire",
      group: "Fire",
      symbol: "🔥",
      color: "Blue",
      facingDown: true,
    },
    {
      name: "Red Air",
      group: "Air",
      symbol: "🌄",
      color: "Red",
      facingDown: true,
    },
    {
      name: "Black Air",
      group: "Air",
      symbol: "🌄",
      color: "Black",
      facingDown: true,
    },
    {
      name: "Blue Air",
      group: "Air",
      symbol: "🌄",
      color: "Blue",
      facingDown: true,
    },
    {
      name: "Red Water",
      group: "Water",
      symbol: "💧",
      color: "Red",
      facingDown: true,
    },
    {
      name: "Black Water",
      group: "Water",
      symbol: "💧",
      color: "Black",
      facingDown: true,
    },
    {
      name: "Blue Water",
      group: "Water",
      symbol: "💧",
      color: "Blue",
      facingDown: true,
    },
    {
      name: "Red Earth",
      group: "Earth",
      symbol: "🌱",
      color: "Red",
      facingDown: true,
    },
    {
      name: "Black Earth",
      group: "Earth",
      symbol: "🌱",
      color: "Black",
      facingDown: true,
    },
    {
      name: "Blue Earth",
      group: "Earth",
      symbol: "🌱",
      color: "Blue",
      facingDown: true,
    },
  ];

  const hokiDeck = new e(HokiCards);

  hokiDeck.shuffle(3);
  Math.floor(hokiDeck.drawPile.length / 3);

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
  }

  document.getElementById("newGameButton")?.addEventListener("click", () => newGame());

})();
