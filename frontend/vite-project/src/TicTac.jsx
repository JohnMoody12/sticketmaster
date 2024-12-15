import { useState } from "react";

const WINNER = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

export function Cell({ idx, disabled, mark, turn, onClick }) {
  return (
    <button
      className=" hover:bg-slate-200 border-black border-2 aspect-square w-24 h-24 text-6xl"
      aria-label={mark == null ? `Mark cell ${idx} as ${turn}` : undefined}
      disabled={disabled}
      onClick={onClick}
    >
      <span aria-hidden={true}>{mark}</span>
    </button>
  );
}

export const TicTac = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  function checkWinner(board) {
    for (let wins of WINNER) {
      const [a, b, c] = wins;
      if (board[a] != null && board[a] == board[b] && board[a] == board[c]) {
        return board[a];
      }
    }
    return null;
  }
  //let winner = checkWinner(board);
  function status() {
    if (winner) {
      return `${winner} wins!`;
    } else if (!board.includes(null)) {
      return `draw`;
    } else {
      return `${turn}'s turn`;
    }
  }

  let turn = xTurn ? "X" : "O";

  return (
    <div className="flex flex-col items-center">
      <div>{status()}</div>
      <div className=" grid grid-cols-3 rows-3 gap-1 mx-auto">
        {Array(9)
          .fill(null)
          .map((_, idx) => {
            return (
              <Cell
                key={idx}
                idx={idx}
                turn={turn}
                mark={board[idx]}
                disabled={board[idx] != null}
                onClick={() => {
                  const newBoard = board.slice();
                  newBoard[idx] = turn;
                  setBoard(newBoard);
                  let newWinner = checkWinner(newBoard);
                  if (newWinner) {
                    setWinner(newWinner);
                  }
                  setXTurn(!xTurn);
                }}
              />
            );
          })}
      </div>
      <button
        className="border-2 m-4 rounded-md bg-slate-500 text-white text-3xl p-3 hover:bg-slate-400"
        onClick={() => {
          if (winner == null) {
            const confirm = window.confirm("Are you sure?");
          }
          if (confirm) {
            setBoard(Array(9).fill(null));
            setXTurn(true);
          }
        }}
      >
        {winner ? "Play Again?" : "Reset"}
      </button>
    </div>
  );
};
