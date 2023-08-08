import { GameStateContext } from "../context/GameStateContextProvider";
import { useContext } from "react";
import { checkWinner, checkDraw } from "../utilities/game-utils";

const Cell = ({ symbol, coordinate }) => {
  const { gameState, setGameState } = useContext(GameStateContext);
  // console.log(gameState.board);
  const updateBoard = (index) => {
    if (gameState.winner) {
      return;
    }
    const copy = [...gameState.board];
    if (copy[index]) {
      return;
    }
    copy[index] = gameState.currentPlayer;
    const winner = checkWinner(copy);
    const draw = checkDraw(copy);
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
