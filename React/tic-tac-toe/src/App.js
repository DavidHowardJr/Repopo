import { useState } from "react";

import "./App.css";

const Turns = {
  X: 0,
  O: 1,
};

export const App = () => {
  const [boardState, setBoardState] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const [whoseTurn, setWhoseTurn] = useState(Turns.X);

  const handleCellClick = (row, col) => {
    if (boardState[row][col] === null) {
      const nextBoardState = [].concat(boardState)

      if (whoseTurn === Turns.X) {
        nextBoardState[row][col] = '⚔';
        setWhoseTurn(Turns.O)
      } else {
        nextBoardState[row][col] = '⛒';
        setWhoseTurn(Turns.X);
      }

      setBoardState(nextBoardState);
    }
  }

  return (
    <div className="game">
      <div className="turn">{whoseTurn === Turns.X ? "⚔" : "⛒"}'s Turn</div>
      <div className="game-board">
        {boardState.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((col, colIndex) => (
              <div
                className={col === null ? "cell empty" : "cell"}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                key={colIndex}
              >
                {col}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
