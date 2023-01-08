# Hi! 
Welcome to one of my most recent projects; Blackjack (terminal-only), written in JavaScript and tested with Jest.

## Requirements
```npm install```
```npm install --save-dev jest```
```npm i readline-sync```

## Gameplay
```node index.js```

## Approach

For now, this game is run solely through the terminal. It is also one player, meaning, as of yet, the player plays against themselves (and not a computer-automated dealer). 

On starting the game, the player is dealt 2 cards. They can then choose to "hit" or "stand". Hitting deals the player another card, if their current hand's points is currently below 21 (a valid hand). Standing essentially ends the game (with the eventual addition of a dealer, this will add a competitive element). If the player hits and their score goes over 21, they lose. 

After completing the game (win or lose), the player is asked if they wish to play again.

## Future work
As mentioned already, I would like to add a dealer to the game who the player competes against. The winner is whoever's hand is closest to 21, without going over.

The next iteration would include a nicer-looking terminal, with some ASCII art (a cool retro feel!)

Eventually I'd like to make a HTML page of the game.