/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-multi-comp */

import { Button } from "../components/button";

import styles from "../styles/pages/button.module.scss";

export default function ButtonPage(): JSX.Element {
  return (
    <div className={styles.root}>
      <Button />
    </div>
  );
}