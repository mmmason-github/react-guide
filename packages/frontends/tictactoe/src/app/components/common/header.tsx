import { Link } from "react-router-dom";

import styles from "../../styles/components/common/header.module.scss";

export default function Header(): JSX.Element {
  return (
    <header className={styles.root}>
      <Link to="/">Tic Tac Toe Application</Link>
    </header>
  );
}
