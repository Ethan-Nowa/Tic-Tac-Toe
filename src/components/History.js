import React from "react";

// Creates and writes the correct description in the History buttons.
const History = ({ history, jumpTo }) => {
  return (
    <div>
      <h2>History</h2>
      <ol>
        {history.map((move, index) => {
          const isGameOver = move.winner;
          let desc = move.winner ? `Winner: ${move.winner}` : `Move ${index}`;
          if (move.winner === "Draw") {
            desc = "Game Draw";
          }

          return (
            <li key={index}>
              <button
                className="move-btn"
                onClick={() => jumpTo(index)}
                disabled={isGameOver}
              >
                {desc}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default History;
