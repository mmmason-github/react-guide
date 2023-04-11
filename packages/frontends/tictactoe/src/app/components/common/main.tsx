import { Outlet } from "react-router-dom";

import styles from "../../styles/components/common/main.module.scss";

// eslint-disable-next-line @typescript-eslint/naming-convention
const Main = (): JSX.Element => {
  return (
    <main className={styles.root}>
      <Outlet />
    </main>
  );
};
export default Main;
