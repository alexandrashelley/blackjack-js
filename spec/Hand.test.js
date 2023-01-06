const Hand = require("../lib/Hand");

describe("the Hand object", () => {
  it("the showHand function shows the player the cards in their hand", () => {
    const hand = new Hand();
    hand.hand = [
      { suit: "Diamonds", value: "Ace" },
      { suit: "Diamonds", value: "10" },
    ];
    const result = hand.showHand();
    expect(result).toBe("Ace of Diamonds, 10 of Diamonds");
  });

  xit("gets the value of the current hand", () => {
    const hand = new Hand();
    hand.hand = [
      { suit: "Diamonds", value: "9" },
      { suit: "Diamonds", value: "10" },
    ];
    const result = hand.getHandValue();
    expect(result).toBe(19);
  });

  it("addNCardsToHand pushes cards into hand", () => {
    const hand = new Hand();
    const card = [{ suit: "Diamonds", value: "9" }];
    hand.addNCardsToHand(card);
    expect(hand.hand).toEqual([{ suit: "Diamonds", value: "9" }]);
  });

  it("addNCardsToHand pushes cards into hand", () => {
    const hand = new Hand();
    const card = [{ suit: "Diamonds", value: "9" }];
    hand.addNCardsToHand(card);
    expect(hand.hand).toEqual([{ suit: "Diamonds", value: "9" }]);
  });

  it("calculateHandValue returns 21 for a hand containing a king and an ace", () => {
    const hand = new Hand();
    const cards = [
      { suit: "Diamonds", value: "11" },
      { suit: "Diamonds", value: "10" },
    ];
    hand.addNCardsToHand(cards);
    const result = hand.calculateHandValue();
    expect(result).toBe(21);
  });

  it("calculateHandValue returns 21 for a hand containing a nine and two aces", () => {
    const hand = new Hand();
    const cards = [
      { suit: "Diamonds", value: "9" },
      { suit: "Diamonds", value: "11" },
      { suit: "Hearts", value: "11" },
    ];
    hand.addNCardsToHand(cards);
    const result = hand.calculateHandValue();
    expect(result).toBe(21);
  });

  it("calculateHandValue returns 21 for a hand containing a king, queen and an ace", () => {
    const hand = new Hand();
    const cards = [
      { suit: "Diamonds", value: "10" },
      { suit: "Diamonds", value: "10" },
      { suit: "Hearts", value: "11" },
    ];
    hand.addNCardsToHand(cards);
    const result = hand.calculateHandValue();
    expect(result).toBe(21);
  });

  it("calculateHandValue returns 12 for a hand containing two aces", () => {
    const hand = new Hand();
    const cards = [
      { suit: "Diamonds", value: "11" },
      { suit: "Hearts", value: "11" },
    ];
    hand.addNCardsToHand(cards);
    const result = hand.calculateHandValue();
    expect(result).toBe(12);
  });
});
