import { useState, useEffect, useContext } from "react";
import Cell from "./Cell";
import { checkWinner, checkDraw } from "../utilities/game-utils";
import { GameStateContext } from "../context/GameStateContextProvider";

const Board = () => {
  const { gameState } = useContext(GameStateContext);
  const { board = [] } = gameState;
  
  // just incase board hasn't loaded
  if (board === null) {
    return null;
  }

  return (
    // check App.css for grid and styling.
    <section className="game-board">
      {board.map((symbol, index) => (
        <Cell key={index} coordinate={index} symbol={symbol} />
      ))}
    </section>
  );
};

export default Board;
