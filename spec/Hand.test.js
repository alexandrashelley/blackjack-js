const Hand = require("../lib/Hand");

describe("the Hand object", () => {
  it("the showHand function shows the player the cards in their hand", () => {
    const hand = new Hand();
    hand.hand = [{"suit": "Diamonds", "value": "Ace"}, {"suit": "Diamonds", "value": "10"}]
    const result = hand.showHand();
    expect(result).toBe("Ace of Diamonds, 10 of Diamonds") 
  });
});
