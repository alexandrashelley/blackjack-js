const Hand = require("../lib/Hand");
const Deck = require("./Deck");

class Game {
  constructor() {
    this.deck = new Deck();
    this.deck.shuffle();
    this.hand = new Hand();
  }

  dealHand() {
    this.hand = this.deck.getTopCard(2);
  }

  dealCard() {
    this.hand.push(this.deck.getTopCard(1));
  }
}

module.exports = Game;
