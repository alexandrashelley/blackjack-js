const Deck = require("../lib/Deck");

class Hand {
  constructor() {
    this.hand = [];
  }

  showHand() {
    const currentHand = [];
    this.hand.forEach(function (cardObject) {
      currentHand.push(`${cardObject.value} of ${cardObject.suit}`);
    });
    return currentHand.join(", ");
  }
}

module.exports = Hand;
