const Card = require("../lib/Card");

describe("the Card object", () => {

  it("the getRandom method retrieves a random number", () => {
    const card = new Card();
    const result = card.getRandom(10);
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(10);
  });
});
