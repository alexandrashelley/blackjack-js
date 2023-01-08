const readlineSync = require("readline-sync");
const Game = require("./Game");

class TerminalInterface {
  startGame() {
    const welcome = readlineSync.question(
      "Welcome to Blackjack! Press enter to play\n"
    );

    if (welcome != null) {
      let shouldPlayFlag = true;

      while (shouldPlayFlag) {
        this.game = new Game();
        this.game.dealHand();
        this.giveCurrentHand();

        this.waitForPlayerToFinishGame();

        if (this.game.hand.calculateHandValue() > 21) {
          console.log(
            `Uh-oh. You pulled the ${this.game.hand
              .showHand()
              .at(-1)}. You scored ${this.game.hand.calculateHandValue()}.`
          );
        } else {
          console.log(
            `Congrats! You scored ${this.game.hand.calculateHandValue()}.`
          );
        }

        const shouldPlayAgain = this.askPlayerIfTheyWantToPlayAgain();

        if (!shouldPlayAgain) {
          shouldPlayFlag = false;
        }
      }
    }
  }

  askPlayerIfTheyWantToPlayAgain() {
    const shouldPlayAgain = readlineSync.question(
      "Would you like to play again? (Y/N)\n"
    );
    if (shouldPlayAgain === "n" || shouldPlayAgain === "N") {
      return false;
    } else if (shouldPlayAgain === "y" || shouldPlayAgain === "Y") {
      return true;
    } else {
      console.log(`Sorry I don't understand that command`);
      return this.askPlayerIfTheyWantToPlayAgain();
    }
  }

  waitForPlayerToFinishGame() {
    const hitOrStand = readlineSync.question(
      "Press 'H' to hit or 'S' to stand.\n"
    );
    if (hitOrStand === "H" || hitOrStand === "h") {
      this.game.hit();
      if (this.game.gameIsOver) {
        return;
      }
      this.giveCurrentHand();
      this.waitForPlayerToFinishGame();
    } else if (hitOrStand === "S" || hitOrStand === "s") {
      console.log(`You chose to stand.`);
    } else {
      console.log(`Oops, sorry. Can't recognise that command.`);
      this.waitForPlayerToFinishGame();
    }
  }

  giveCurrentHand() {
    console.log(
      `Your current hand is: ${this.game.hand
        .showHand()
        .join(
          ", "
        )}. You have a total of ${this.game.hand.calculateHandValue()} points.`
    );
  }
}

module.exports = TerminalInterface;
