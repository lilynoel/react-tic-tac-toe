# Tic Tac Toe!

In this content model, the game board is stored as JSON (text).

The react app translates the JSON text into an array. 

All other game information is stored in the GameStateContext, this way all elements of the game board have access to it. Each cell component has an OnClick function that checks for winner and draw. It also updates the games state accordingly. 

There is also a save and reset button. The save button updates the respective elements (Board, Current Player, Winner, Draw ( T/F ?)) within the "Current Game" content item in the Kontent.ai app based on the GameStateContext. The reset button resets each element to default values.

Functions which update the content item are in utilities > Kontent-utils (add link to folder here).

Ultimately this approach didn't meet the spec, because there's only one game with no history. 

There is a new WIP version of this here: (add link here).

This app uses the Kontent.ai Management API. 



