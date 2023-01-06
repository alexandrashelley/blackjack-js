const readlineSync = require("readline-sync");
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

  play() {
    const hitOrStand = readlineSync.question(
      "Enter 'H' to hit or 'S' to stand\n"
    );
    if (hitOrStand == "H") {
      this.dealCard();
    } else if (hitOrStand == "S") {
      return "You have chosen to stand"
    }
  }
}

module.exports = Game;
