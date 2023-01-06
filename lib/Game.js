const Hand = require("./Hand");
const Deck = require("./Deck");

class Game {
  constructor() {
    this.deck = new Deck();
    this.deck.shuffle();
    this.hand = new Hand();
  }

  dealHand() {
    const topTwoCards = this.deck.getTopCard(2);
    this.hand.addNCardsToHand(topTwoCards);
  }

  dealCard() {
    const topCard = this.deck.getTopCard(1);
    this.hand.addNCardsToHand(topCard);
  }

  startGame() {
    this.dealHand();
    this.hand.showHand();
  }

  hit() {
    this.dealCard();
  }

  stand() {
    return this.hand.calculateHandValue();
  }
}

module.exports = Game;
