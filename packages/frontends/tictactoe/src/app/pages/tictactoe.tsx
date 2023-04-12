import Game from "../components/tictactoe/game";
import styles from "../styles/pages/tictactoe.module.scss";

export default function TicTacToePage(): JSX.Element {
  return (
    <section className={styles.root}>
      <div>
        <Game />
      </div>
    </section>
  );
}
