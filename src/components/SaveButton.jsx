import React, { useContext } from "react";
import { GameStateContext } from "../context/GameStateContextProvider";
import { saveGameState } from "../utilities/kontent-utils";

// when save button is clicked, the game state context is saved to kontent.ai
const SaveButton = () => {
  const { gameState } = useContext(GameStateContext);
  return (
    <button
      onClick={() => {
        // this uses upsert. 
        saveGameState(gameState);
      }}
    >
      Save
    </button>
  );
};

export default SaveButton;
