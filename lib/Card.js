class Card {
  #suit
  #value
  #face
  constructor(suit, face, value) {
    this.#face = face;
    this.#suit = suit;
    this.#value = value;
  }

  getValue() {
    return this.#value;
  }

  getSuit() {
    return this.#suit;
  }

  getFace() {
    return this.#face;
  }

  showCard() {
    return `${this.getFace()} of ${this.getSuit()}`
  }
}

module.exports = Card;
