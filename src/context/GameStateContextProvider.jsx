import { useState, createContext } from "react";
export const GameStateContext = createContext(null);


// Allows any children components to access global game state, including loading state.
// access board from within the board component, or cell component, or game component.
const GameStateContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const initialState = {
    board: null,
    currentPlayer: null,
    winner: null,
    draw: null,
  };
  const [gameState, setGameState] = useState(initialState);
  return (
    <GameStateContext.Provider
      value={{ isLoading, setIsLoading, gameState, setGameState }}
    >
      {children}
    </GameStateContext.Provider>
  );
};

export default GameStateContextProvider;
