const Card = require("../lib/Card");

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

    Object.entries(this.values).forEach(([face, value]) => {
      this.suits.forEach((suit) => {
        this.deck.push(new Card(suit, face, value));
      });
    });
  }

  shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
    return this.deck;
  }

  getTopCard(num) {
    const topCard = this.deck.slice(0, num);
    this.deck.splice(0, num);
    return topCard.flat();
  }
}

module.exports = Deck;
