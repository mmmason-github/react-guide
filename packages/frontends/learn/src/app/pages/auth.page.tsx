/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/hook-use-state */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-multi-comp */

import { useState } from "react";

import { Auth } from "../components/auth";

import styles from "../styles/pages/auth.module.scss";

export default function AuthPage(): JSX.Element {
  const [isError, setError] = useState(false);

  return (
    <div className={isError ? styles.onError : styles.root}>
      <Auth isError={isError} setError={setError} />
    </div>
  );
}
