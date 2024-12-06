import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./dark-mode.css";

import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import ResetButton from "./components/ResetButton";
import History from "./components/History";
import Game from "./components/Game";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Getting the game state from Game.js
  const {
    board,
    scores,
    XIsNext,
    gameOver,
    gameDraw,
    winningSquares,
    history,
    handleSquareClick,
    jumpTo,
    resetBoard,
  } = Game();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App">
      {/* Dark Mode Toggle */}
      <button onClick={toggleDarkMode} className="dark-mode-toggle-btn">
        {isDarkMode ? (
          <FaSun size={24} className="sun-icon" />
        ) : (
          <FaMoon size={24} className="moon-icon" />
        )}
      </button>

      {/* ScoreBoard */}
      <ScoreBoard
        scores={scores}
        XIsNext={XIsNext}
        gameOver={gameOver}
        gameDraw={gameDraw}
      />

      {/* Board */}
      <Board
        board={board}
        onSquareClick={gameOver ? () => {} : handleSquareClick}
        winningSquares={winningSquares}
        gameDraw={gameDraw}
      />

      {/* Reset Button */}
      <ResetButton resetBoard={resetBoard} />

      {/* History Component */}
      <History history={history} jumpTo={jumpTo} />
    </div>
  );
}

export default App;
