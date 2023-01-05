const Game = require("../lib/Game");

describe("the Game object", () => {
  it("initialising a new Game makes an empty hand", () => {
    const game = new Game();
    expect(game.hand.length).toBe(0);
  });

  it("the dealHand function deals a hand 2 cards", () => {
    const game = new Game();
    game.dealHand();
    expect(game.hand.length).toBe(2);
  });
});
