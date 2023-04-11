import { Link } from "react-router-dom";

import styles from "../../styles/components/common/header.module.scss";

// eslint-disable-next-line @typescript-eslint/naming-convention
const Header = (): JSX.Element => {
  return (
    <header className={styles.root}>
      <Link to="/">Tic Tac Toe Application</Link>
    </header>
  );
};
export default Header;
