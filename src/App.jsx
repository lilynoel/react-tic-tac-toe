import { useEffect } from "react";
import client from "./config/client";
import "./App.css";
import Game from "./components/Game";
import GameStateContextProvider from "./context/GameStateContextProvider";

function App() {
  return (
    // Passes game state to game component.
    <GameStateContextProvider>
      <h1>Tic Tac Toe</h1>
      <Game />
    </GameStateContextProvider>
  );
}

export default App;
