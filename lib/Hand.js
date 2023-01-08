class Hand {
  constructor() {
    this.hand = [];
  }

  showHand() {
    const currentHand = [];
    this.hand.forEach(function (cardObject) {
      currentHand.push(`${cardObject.face} of ${cardObject.suit}`);
    });
    return currentHand;
  }

  addNCardsToHand(cards) {
    cards.forEach((newCard) => {
      this.hand.push(newCard);
    });
  }

  calculateHandValue() {
    let totalHandValue = 0;

    const sortedHand = this.hand.sort((a, b) => (a.value > b.value) ? 1 : -1)
    sortedHand.map((card) => {
      const integerVal = card.value;
      if (integerVal === 11 && totalHandValue + integerVal > 21) {
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