const readlineSync = require("readline-sync");
const Deck = require("../lib/Deck");
const Game = require("../lib/Game");

describe("the Game object", () => {
  it("initialising a new Game deals a hand with 2 cards", () => {
    const game = new Game();
    game.dealHand();
    expect(game.hand.length).toBe(2);
  });

  it("the dealHand function deals a hand 2 cards", () => {
    const game = new Game();
    game.dealHand();
    expect(game.hand.length).toBe(2);
  });

  it("the dealCard function deals a hand 1 card", () => {
    const game = new Game();
    game.dealHand();
    game.dealCard();
    expect(game.hand.length).toBe(3);
  });

  it("the dealCard function deals a hand 1 card", () => {
    const game = new Game();
    game.dealHand();
    game.dealCard();
    expect(game.hand.length).toBe(3);
  });

  // I need a way of mocking the user input... for now tests pass when
  // correct answer is inputted for expectation

  it("if the player chooses hit, another card is added to their hand", () => {
    const game = new Game();
    game.dealHand();
    game.play();
    expect(game.hand.length).toBe(3);
  });

  it("if the player chooses stand, the hand stays at a total of 2 cards", () => {
    const game = new Game();
    game.dealHand();
    game.play();
    expect(game.hand.length).toBe(2);
  });
});
