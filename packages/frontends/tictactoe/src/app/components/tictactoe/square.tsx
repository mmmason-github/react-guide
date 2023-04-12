import { MouseEventHandler } from "react";

import styles from "../../styles/components/tictactoe/square.module.scss";

type Props = {
  onSquareClick: MouseEventHandler<HTMLButtonElement>;
  value: string;
};

/*
 * Const onSquareClick: MouseEventHandler<HTMLButtonElement> = (
 *   event: React.MouseEvent<HTMLButtonElement>
 * ): void => {
 *   console.log(event);
 * };
 */

export default function Square({ onSquareClick, value }: Props): JSX.Element {
  return (
    <button className={styles.square} onClick={onSquareClick} type="button">
      {value}
    </button>
  );
}
