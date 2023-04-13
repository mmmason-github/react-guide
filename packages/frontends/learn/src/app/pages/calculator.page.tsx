/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-multi-comp */

import { Calculator } from "../components/calculator";

import styles from "../styles/pages/calculator.module.scss";

export default function CalculatorPage(): JSX.Element {
  return (
    <div className={styles.root}>
      <Calculator />
    </div>
  );
}
