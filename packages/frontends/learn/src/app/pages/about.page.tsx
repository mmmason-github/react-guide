/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/hook-use-state */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-multi-comp */

import { Profile } from "../components/about";

import styles from "../styles/pages/about.module.scss";

export default function AboutPage(): JSX.Element {
  return (
    <div className={styles.root}>
      <Profile />
    </div>
  );
}
