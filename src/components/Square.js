import React from "react";

// Applies the appropriate styling for the Squares.
export const Square = ({ value, onSquareClick, isWinningSquare, gameDraw }) => {
  const style = `square ${value === "A" ? "x" : value === "B" ? "o" : ""}
    ${isWinningSquare ? "winning" : ""}
    ${gameDraw ? "square-draw" : ""}`;

  return (
    <button className={style} onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
