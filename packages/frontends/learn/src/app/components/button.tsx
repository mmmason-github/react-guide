/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/hook-use-state */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-multi-comp */

import { useState } from "react";

import styles from "../styles/components/button.module.scss";

type OnClickFuncType = React.MouseEventHandler<HTMLButtonElement>;
type OnClickEventType = React.MouseEvent<HTMLButtonElement>;

export function Button(): JSX.Element {
  const [ok, setOk] = useState(true);

  function OnClick(event: OnClickEventType): void {
    event.preventDefault();
    setOk(!ok);
  }

  return (
    <div className={styles.root}>
      <h1>Welcome to my app</h1>
      <button
        className={ok ? styles.ok : styles.warning}
        onClick={OnClick}
        type="button">
        {ok ? "OK!" : "WARNING!"}
      </button>
    </div>
  );
}
