import { GameStateContext } from "../context/GameStateContextProvider";
import { useContext } from "react";
import { checkWinner, checkDraw } from "../utilities/game-utils";

const Cell = ({ symbol, coordinate }) => {
  const { gameState, setGameState } = useContext(GameStateContext);
  const updateBoard = (index) => {
    // Checks game state for winner. Can't add new moves if the game is over.
    if (gameState.winner) {
      return;
    }
    const copy = [...gameState.board];
    // if there is already a symbol in a cell, don't overwrite. 
    if (copy[index]) {
      return;
    }
    copy[index] = gameState.currentPlayer;
    // check if the latest move wins or draws the game. 
    const winner = checkWinner(copy);
    const draw = checkDraw(copy);
    // update the game state in context. 
    setGameState({
      ...gameState,
      winner,
      draw,
      board: copy,
      currentPlayer: gameState.currentPlayer === "X" ? "O" : "X",
    });
  };
  return (
    <div onClick={() => updateBoard(coordinate)} className="cell">
      {symbol}
    </div>
  );
};

export default Cell;
