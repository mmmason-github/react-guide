/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/hook-use-state */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-multi-comp */

import styles from "../styles/components/about.module.scss";

interface User {
  name: string;
  size: number;
  url: string;
}

const user: User = {
  name: "Hedy Lamarr",
  size: 90,
  url: "https://i.imgur.com/yXOvdOSs.jpg"
};

export function Profile(): JSX.Element {
  return (
    <div className={styles.root}>
      <h1>{user.name}</h1>
      <img
        alt={user.name}
        src={user.url}
        style={{
          height: user.size,
          width: user.size
        }}
      />
    </div>
  );
}
