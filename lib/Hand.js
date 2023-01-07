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
    cards.forEach((newCard) => {
      this.hand.push(newCard);
    });
  }

  calculateHandValue() {
    let totalHandValue = 0;

    this.hand.map((card) => {
      const integerVal = Math.floor(card.value);
      if (integerVal == 11 && totalHandValue + integerVal > 21) {
        totalHandValue += 1;
      } else {
        totalHandValue += integerVal;
      }
    });
    return totalHandValue;
  }

  hasBust() {
    if (this.calculateHandValue() > 21) {
      return true;
    }
    return false;
  }
}

module.exports = Hand;