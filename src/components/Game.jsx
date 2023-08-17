import { useContext, useState, useEffect } from "react";
import { fetchGameState } from "../utilities/kontent-utils";
import Board from "./Board";
import SaveButton from "./SaveButton";
import ResetButton from "./ResetButton";
import { GameStateContext } from "../context/GameStateContextProvider";

const Game = () => {
  // loading and game state is stored in context. 
  const { isLoading, setIsLoading, gameState, setGameState } =
    useContext(GameStateContext);

  // fetches game state from kontent.ai and sets into global game state context.
  // this useEffect function runs on component mount. when the game component appears on the screen, that's when the game state is being fetched from kontent.
  useEffect(() => {
    // set loading state while we are fetching data
    setIsLoading(true);
    fetchGameState()
      .then((game) => {
        // once we retrieve the data from kontent, set state. 
        setGameState(game);
      })
      .finally(() => {
        // make sure to turn loading off
        setIsLoading(false);
      });
  }, []);
  const { winner, currentPlayer } = gameState;
  return (
    <>
     {/* don't render board until data loaded */}
      {isLoading ? (
        <p> Loading </p>
      ) : (
          <main>
         {/* either show winner or current player */}
          {winner ? (
            <h2>Winner: {winner}</h2>
          ) : (
            <h2>Current Player: {currentPlayer}</h2>
          )}
          <Board currentPlayer={currentPlayer} winner={winner} />
          <SaveButton />
          <ResetButton />
        </main>
      )}
    </>
  );
};
export default Game;
