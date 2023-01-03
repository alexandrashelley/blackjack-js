require('jest-fetch-mock').enableFetchMocks()
const Card = require("../lib/Card");

describe("the Card object", () => {

  it("the getRandom method retrieves a random number", () => {
    const card = new Card();
    const result = card.getRandom(10);
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(10);
  });

  it("the getCard method always returns a suit", () => {
    const card = new Card;
    expect(card.getCard()).toMatch(/(Diamonds|Hearts|Spades|Clubs)/)
  });
});
