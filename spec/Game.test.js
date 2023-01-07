const Game = require("../lib/Game");
const Card = require("../lib/Card");

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

  it("if the player chooses stand, score is returned", () => {
    const game = new Game();
    game.hand.addNCardsToHand([new Card("Diamonds", "Ace", "11")]);
    const result = game.stand();
    expect(result).toBe(11);
  });

  it("if the player chooses stand, score is returned", () => {
    const game = new Game();
    game.hand.addNCardsToHand([new Card("Diamonds", "Ace", "11")]);
    const result = game.stand();
    expect(result).toBe(11);
  });

  it("if the player chooses hit when game is over, error is thrown", () => {
    const game = new Game();
    game.gameIsOver = true;
    expect(() => {
      game.hit();
    }).toThrow("Cannot hit when hand is bust");
  });
});
