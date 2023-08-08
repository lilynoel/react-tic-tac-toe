import React, { useContext } from "react";
import { GameStateContext } from "../context/GameStateContextProvider";
import { saveGameState } from "../utilities/kontent-utils";

const SaveButton = () => {
  const { gameState } = useContext(GameStateContext);
  return (
    <button
      onClick={() => {
        saveGameState(gameState);
      }}
    >
      Save
    </button>
  );
};

export default SaveButton;
