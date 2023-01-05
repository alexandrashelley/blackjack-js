const Hand = require("../lib/Hand");
const Deck = require("./Deck");

class Game {
  constructor() {
    this.deck = new Deck();
    this.deck.shuffle();
    this.hand = new Hand();
    this.hand = [];
  }

  dealHand() {
    const handCards = this.deck.deck.slice(0, 2);
    this.deck.deck.splice(0, 2);
    this.hand.push.apply(this.hand, handCards);
  }

  dealCard() {
    const drawnCard = this.deck.deck.slice(0, 1);
    this.deck.deck.splice(0, 1);
    this.hand.push.apply(this.hand, drawnCard);
  }
}

module.exports = Game;
