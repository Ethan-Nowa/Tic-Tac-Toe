import { useState } from "react";

// Holds the Game logic.
const Game = () => {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [XIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [gameDraw, setGameDraw] = useState(false);
  const [winningSquares, setWinningSquares] = useState([]);
  const [history, setHistory] = useState([
    {
      board: Array(9).fill(null),
      scores: { xScore: 0, oScore: 0 },
      winner: null,
    },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  // Check for a winner
  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [a, b, c] = WIN_CONDITIONS[i];
      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c] &&
        (board[a] === "A" || board[a] === "B")
      ) {
        setGameOver(true);
        setWinningSquares([a, b, c]);
        return board[a];
      }
    }

    if (!board.includes(null)) {
      setGameOver(true);
      setGameDraw(true);
      return "Draw";
    }

    return null;
  };

  const handleSquareClick = (index) => {
    const updatedBoard = [...board];
    if (updatedBoard[index] !== null || gameOver) return; // Ignore if square is already filled or game is over

    updatedBoard[index] = XIsNext ? "A" : "B";
    setBoard(updatedBoard);

    const winner = checkWinner(updatedBoard);

    if (winner === "A") {
      setScores((prevScores) => ({
        ...prevScores,
        xScore: prevScores.xScore + 1,
      }));
    } else if (winner === "B") {
      setScores((prevScores) => ({
        ...prevScores,
        oScore: prevScores.oScore + 1,
      }));
    }

    // Update history
    const newHistory = [
      ...history.slice(0, currentMove + 1),
      { board: updatedBoard, scores: { ...scores }, winner: winner },
    ];
    setHistory(newHistory);
    setCurrentMove(newHistory.length - 1);

    setXIsNext(!XIsNext); // Toggle turn
  };

  const jumpTo = (move) => {
    const moveState = history[move];
    setBoard(moveState.board);
    setScores(moveState.scores);
    setXIsNext(move % 2 === 0);
    setGameOver(false);
    setGameDraw(false);
    setWinningSquares([]);
    setCurrentMove(move);
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setGameOver(false);
    setGameDraw(false);
    setWinningSquares([]);
    setHistory([
      {
        board: Array(9).fill(null),
        scores: { xScore: 0, oScore: 0 },
        winner: null,
      },
    ]);
    setCurrentMove(0);
    setXIsNext(true);
  };

  return {
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
  };
};

export default Game;
