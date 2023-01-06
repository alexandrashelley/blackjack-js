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

  addNCardsToHand(cards) {
    cards.forEach(newCard => {
      this.hand.push(newCard)
    })
  }

  getHandValue() {
    //refactor this
    let total = [];
    for (const card of this.hand) {
      total.push(card.value);
    }
    return total.map(Number).reduce((a, b) => a + b, 0);
  }
}

module.exports = Hand;
