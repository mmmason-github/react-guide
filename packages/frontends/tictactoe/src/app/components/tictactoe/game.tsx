/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
/* eslint-disable func-style */
import { SetStateAction, useState } from "react";

import Board from "./board";

import styles from "../../styles/components/tictactoe/game.module.scss";

export default function Game(): JSX.Element {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]): void {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: SetStateAction<number>): void {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description = "";
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={(): void => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board onPlay={handlePlay} squares={currentSquares} xIsNext={xIsNext} />
      </div>
      <div className={styles.gameInfo}>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
