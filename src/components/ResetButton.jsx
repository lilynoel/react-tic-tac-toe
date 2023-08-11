import React, { useContext } from "react";
import { GameStateContext } from "../context/GameStateContextProvider";
import { fetchGameState, resetGameState } from "../utilities/kontent-utils";

const ResetButton = () => {
  const { setGameState } = useContext(GameStateContext);
  return (
    <button
      onClick={async () => {
        await resetGameState();
        const defaultGame = await fetchGameState();
        setGameState(defaultGame);
      }}
    >
      Reset
    </button>
  );
};

export default ResetButton;
