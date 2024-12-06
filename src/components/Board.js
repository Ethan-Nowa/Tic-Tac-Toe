import React from 'react'

import { Square } from "./Square";

export const Board = ({ board, onSquareClick, winningSquares, gameDraw }) => {
  return (
    <div className="board">
      {board.map((value, index) => {
        const isWinningSquare = winningSquares.includes(index);
        return (
          <Square
            key={index}
            value={value}
            onSquareClick={() => onSquareClick(index)}
            isWinningSquare={isWinningSquare}
            gameDraw={gameDraw}
          />
        );
      })}
    </div>
  );
};

export default Board;
