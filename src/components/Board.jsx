import { useState, useEffect, useContext } from "react";
import Cell from "./Cell";
import { checkWinner, checkDraw } from "../utilities/game-utils";
import { GameStateContext } from "../context/GameStateContextProvider";

const Board = () => {
  const { gameState } = useContext(GameStateContext);
  const { board = [] } = gameState;
  if (board === null) {
    return null;
  }

  return (
    <section className="game-board">
      {board.map((symbol, index) => (
        <Cell key={index} coordinate={index} symbol={symbol} />
      ))}
    </section>
  );
};

export default Board;
