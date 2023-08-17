import React, { useContext } from "react";
import { GameStateContext } from "../context/GameStateContextProvider";
import { fetchGameState, resetGameState } from "../utilities/kontent-utils";

const ResetButton = () => {
  const { setGameState } = useContext(GameStateContext);
  return (
    <button
      onClick={async () => {
        // reset game state uses upsert with default values. 
        await resetGameState();
        // once the game has been reset, fetch the game again. 
        const defaultGame = await fetchGameState();
        // resetting the context based on fetch response. 
        setGameState(defaultGame);
      }}
    >
      Reset
    </button>
  );
};

export default ResetButton;
