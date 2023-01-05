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
    console.log(deck.deck)
    const result = deck.getTopCard();
    expect(result).toEqual([{"face": "2", "suit": "Diamonds", "value": 2}])
  });
});
