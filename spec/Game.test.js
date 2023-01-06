const readlineSync = require("readline-sync");
const Game = require("../lib/Game");

describe("the Game object", () => {
  it("initialising a new Game deals a hand with 2 cards", () => {
    const game = new Game();
    game.dealHand();
    expect(game.hand.hand.length).toBe(2);
  });

  it("the dealHand function deals a hand 2 cards", () => {
    const game = new Game();
    game.dealHand();
    expect(game.hand.hand.length).toBe(2);
  });

  it("the dealCard function deals a hand 1 card", () => {
    const game = new Game();
    game.dealHand();
    game.dealCard();
    expect(game.hand.hand.length).toBe(3);
  });

  it("the dealCard function deals a hand 1 card", () => {
    const game = new Game();
    game.dealHand();
    game.dealCard();
    expect(game.hand.hand.length).toBe(3);
  });

  it("startGame begins a new game", () => {
    const game = new Game();
    game.startGame();
    expect(game.hand.hand.length).toBe(2);
  });

  it("if the player chooses hit, another card is added to their hand", () => {
    const game = new Game();
    game.dealHand();
    game.hit();
    expect(game.hand.hand.length).toBe(3);
  });
});
