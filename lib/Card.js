class Card {
  constructor() {
    this.values = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];
    this.suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
  }

  getRandom(max) {
    return Math.floor(Math.random() * max);
  }

  getCard() {
    const randomSuitIndex = this.getRandom(this.suits.length);
    const randomValueIndex = this.getRandom(this.values.length);

    return `${this.values[randomValueIndex]} of ${this.suits[randomSuitIndex]}`;
  }
}

module.exports = Card;
