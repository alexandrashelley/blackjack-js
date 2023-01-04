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

  showCard() {
    return `${this.value} of ${this.suit}`
  }
}

module.exports = Card;
