const Deck = require("../lib/Deck");
const Card = require("../lib/Card")

describe("the Deck object", () => {

  it("A deck is initialised with an array", () => {
    const deck = new Deck();
    expect(deck.deck).toEqual([]);
  });

  it("the createDeck method populates the deck with 52 cards", () => {
    const deck = new Deck();
    deck.createDeck()
    expect(deck.deck.length).toEqual(52)
  });
});
