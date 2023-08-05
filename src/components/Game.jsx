import { useContext, useState, useEffect } from "react";
import { fetchGameState } from "../utilities/kontent-utils";
import Board from "./Board";
import { GameStateContext } from "../context/GameStateContextProvider";

const Game = () => {
  const { isLoading, setIsLoading, gameState, setGameState } =
    useContext(GameStateContext);

  // fetches game state from kontent.ai and sets into global game state context. 
  useEffect(() => {
    setIsLoading(true);
    fetchGameState()
      .then((game) => {
        setGameState(game);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  const { winner, currentPlayer } = gameState;
  return (
    <>
      {isLoading ? (
        <p> Loading </p>
      ) : (
        <main>
          {winner ? (
            <h2>Winner: {winner}</h2>
          ) : (
            <h2>Current Player: {currentPlayer}</h2>
          )}
          <Board currentPlayer={currentPlayer} winner={winner} />
        </main>
      )}
    </>
  );
};
export default Game;
