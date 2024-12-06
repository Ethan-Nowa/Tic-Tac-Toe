import React from "react";

export const ScoreBoard = ({ scores, XIsNext, gameOver, gameDraw }) => {
  const { xScore, oScore } = scores;
  return (
    <div className="scoreboard">
      <span
        className={`score x-score ${XIsNext && "x-active"}
          ${gameOver && XIsNext && "o-won"}
          ${gameOver && !XIsNext && "x-active"} ${gameDraw && "draw"}`}
      >
        A - {xScore}
      </span>
      <span
        className={`score o-score ${!XIsNext && "o-active"}
          ${gameOver && XIsNext && "o-active"}
          ${gameOver && !XIsNext && "x-won"} ${gameDraw && "draw"}`}
      >
        B - {oScore}
      </span>
    </div>
  );
};

export default ScoreBoard;
