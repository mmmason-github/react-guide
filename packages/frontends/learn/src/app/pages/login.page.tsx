/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/hook-use-state */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-multi-comp */

import { useState } from "react";

import { Login } from "../components/login";

import styles from "../styles/pages/login.module.scss";

export default function LoginPage(): JSX.Element {
  const [isError, setError] = useState(false);

  return (
    <div className={isError ? styles.onError : styles.root}>
      <Login isError={isError} setError={setError} />
    </div>
  );
}
