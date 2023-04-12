/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Square from "./square";

import styles from "../../styles/components/tictactoe/board.module.scss";

import calculateWinner from "../../utilities/winner";

// eslint-disable-next-line no-unused-vars
type OnPlay = (nextSquare: Array<string>) => void;

type Props = {
  xIsNext: boolean;
  squares: Array<string>;
  onPlay: OnPlay;
};

export default function Board({
  xIsNext,
  squares,
  onPlay
}: Props): JSX.Element {
  const handleClick = (idx: number): void => {
    if (calculateWinner(squares) || squares[idx]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[idx] = "X";
    } else {
      nextSquares[idx] = "O";
    }
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);

  let status = "";
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <div className={styles.status}>{status}</div>
      <div className={styles.boardRow}>
        <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
        <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
        <Square onSquareClick={() => handleClick(2)} value={squares[2]} />
      </div>
      <div className={styles.boardRow}>
        <Square onSquareClick={() => handleClick(3)} value={squares[3]} />
        <Square onSquareClick={() => handleClick(4)} value={squares[4]} />
        <Square onSquareClick={() => handleClick(5)} value={squares[5]} />
      </div>
      <div className={styles.boardRow}>
        <Square onSquareClick={() => handleClick(6)} value={squares[6]} />
        <Square onSquareClick={() => handleClick(7)} value={squares[7]} />
        <Square onSquareClick={() => handleClick(8)} value={squares[8]} />
      </div>
    </>
  );
}
