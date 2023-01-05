class Card {
  constructor(suit, face, value) {
    this.face = face;
    this.suit = suit;
    this.value = value;
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
