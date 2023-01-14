const Hand = require("./Hand");
const Deck = require("./Deck");

class Game {
  #gameIsOver;
  constructor() {
    this.deck = new Deck();
    this.deck.shuffle();
    this.hand = new Hand();
    this.#gameIsOver = false;
  }

  startGame() {
    this.#dealHand();
    this.hand.showHand();
  }
  
  getGameIsOver() {
    return this.gameIsOver;
  }

  hit() {
    if (this.#gameIsOver === false) {
      this.#dealCard();
      if (this.hand.hasBust()) {
        this.#gameIsOver = true;
      }
    } else {
      throw Error("Cannot hit when hand is bust");
    }
  }

  stand() {
    return this.hand.calculateHandValue();
  }

  #dealHand() {
    const topTwoCards = this.deck.getTopCard(2);
    this.hand.addNCardsToHand(topTwoCards);
  }

  #dealCard() {
    const topCard = this.deck.getTopCard(1);
    this.hand.addNCardsToHand(topCard);
  }
}

module.exports = Game;
