const Hand = require("../lib/Hand");

describe("the Hand object", () => {
  it("the showHand function shows the player the cards in their hand", () => {
    const hand = new Hand();
    hand.hand = [
      { suit: "Diamonds", face: "Ace" },
      { suit: "Diamonds", face: "10" },
    ];
    const result = hand.showHand();
    expect(result).toEqual(["Ace of Diamonds", "10 of Diamonds"]);
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

  it("if the player's total hand value exceeds 21, player is bust", () => {
    const hand = new Hand();
    const cards = [
      { suit: "Diamonds", value: "10" },
      { suit: "Hearts", value: "10" },
      { suit: "Spades", value: "10" },
    ];
    hand.addNCardsToHand(cards);
    const result = hand.hasBust();
    expect(result).toBe(true);
  });

  it("if the player's total hand value exceeds 21, player is bust", () => {
    const hand = new Hand();
    const cards = [
      { suit: "Diamonds", value: "11" },
      { suit: "Hearts", value: "9" },
    ];
    hand.addNCardsToHand(cards);
    const result = hand.hasBust();
    expect(result).toBe(false);
  });
});