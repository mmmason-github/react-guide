import { Outlet } from "react-router-dom";

import styles from "../../styles/components/common/main.module.scss";

export default function Main(): JSX.Element {
  return (
    <main className={styles.root}>
      <Outlet />
    </main>
  );
}
