const Deck = require("../lib/Deck");
const Card = require("../lib/Card");

describe("the Deck object", () => {
  it("a new deck is instantiated with 52 cards", () => {
    const deck = new Deck();
    expect(deck.deck.length).toEqual(52);
  });

  xit("the shuffleCards function shuffles the deck", () => {
    const deck = new Deck();
    deck.deck = [1, 2];
    deck.shuffle();
    expect(deck.deck).toEqual([2, 1]);
  });

  it("the getTopCard function gets top card from the deck", () => {
    const deck = new Deck();
    const result = deck.getTopCard(1);
    expect(deck.deck.length).toBe(51)
    expect(deck.deck).not.toContain(result)
  });
});
