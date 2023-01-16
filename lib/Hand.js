class Hand {
  constructor() {
    this.hand = [];
  }

  showHand() {
    const currentHand = [];
    this.hand.forEach(function (cardObject) {
      currentHand.push(`${cardObject.getFace()} of ${cardObject.getSuit()}`);
    });
    return currentHand;
  }

  addNCardsToHand(cards) {
    cards.forEach((newCard) => {
      this.hand.push(newCard);
    });
  }

  getHandValue() {
    return this.#calculateHandValue();
  }

  hasBust() {
    if (this.getHandValue() > 21) {
      return true;
    }
    return false;
  }

  #calculateHandValue() {
    let totalHandValue = 0;

    const sortedHand = this.hand.sort((a, b) => (a.getValue() > b.getValue() ? 1 : -1));
    sortedHand.map((card) => {
      const integerVal = Math.floor(card.getValue());
      if (integerVal === 11 && totalHandValue + integerVal > 21) {
        totalHandValue += 1;
      } else {
        totalHandValue += integerVal;
      }
    });
    return totalHandValue;
  }
}

module.exports = Hand;
