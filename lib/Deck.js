const Card = require("./Card");

class Deck {
  constructor() {
    this.deck = [];
    this.values = {
      Ace: 11,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      Jack: 10,
      Queen: 10,
      King: 10,
    };
    this.suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
  }

  createDeck() {
    Object.entries(this.values).forEach(([key, value]) => {
      this.suits.forEach((suit) => {
        this.deck.push(new Card(suit, key, value));
      });
    });
  }
}

module.exports = Deck;
