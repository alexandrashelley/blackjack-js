class Card {
  constructor(suit, value) {
    this.value = value;
    this.suit = suit;
  }

  getValue() {
    return this.value;
  }

  getSuit() {
    return this.suit;
  }
}

module.exports = Card;
