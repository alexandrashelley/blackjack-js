const Deck = require("./Deck");

class Game {
  constructor() {
    this.deck = new Deck();
    this.hand = [];
  }

  dealHand() {
    const handCards = this.deck.deck.slice(0, 2);
    this.deck.deck.splice(0, 2);
    this.hand.push.apply(this.hand, handCards);
  }
}

module.exports = Game;
