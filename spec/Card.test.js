const Card = require("../lib/Card");

describe("the Card object", () => {
  it("gets the card's value", () => {
    const card = new Card();
    const result = card.getValue();
    expect(result).toBe(card.value)
  });

  it("gets the card's suit", () => {
    const card = new Card();
    const result = card.getSuit();
    expect(result).toBe(card.suit)
  });
});
