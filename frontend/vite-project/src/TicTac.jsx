import { useState } from "react";

const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [6, 4, 2],
];

export const Cell = ({ idx, markCell, board }) => {
  return (
    <button
      className="bg-slate-300 border-2 hover:bg-slate-200 text-6xl"
      style={{ width: "8vw", height: "8vw" }}
      onClick={() => markCell(idx)}
      aria-label={`Cell ${idx}`}
    >
      {board[idx]}
    </button>
  );
};

export const TicTac = () => {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [xTurn, setXturn] = useState(true);
  const [winner, setWinner] = useState(null);

  function reset() {
    if (winner == null && !window.confirm("Are you sure?")) {
      return;
    }
    setBoard(new Array(9).fill(null));
    setXturn(true);
    setWinner(null);
  }
  function markCell(idx) {
    let player = xTurn ? "X" : "O";
    let newBoard = board.slice();
    if (newBoard[idx] != null) {
      return;
    }
    newBoard[idx] = player;
    setBoard(newBoard);
    setXturn(!xTurn);
    checkWinner(player, newBoard);
  }

  function checkWinner(player, newBoard) {
    for (let winCondition of WIN_CONDITIONS) {
      const [a, b, c] = winCondition;
      if (
        newBoard[a] != null &&
        newBoard[a] == newBoard[b] &&
        newBoard[a] == newBoard[c]
      ) {
        setWinner(player);
      }
    }
  }

  return (
    <div>
      {winner ? `${winner} has won` : `Player ${xTurn ? "X" : "O"}'s turn`}
      <div className=" grid grid-cols-3 grid-rows-3 w-fit mx-auto">
        {new Array(9).fill(null).map((v, idx) => {
          return <Cell idx={idx} key={idx} markCell={markCell} board={board} />;
        })}
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
