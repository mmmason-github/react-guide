/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/hook-use-state */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-multi-comp */

import { Link } from "react-router-dom";

import styles from "../styles/components/applist.module.scss";

export interface Apps {
  key: number;
  link: string;
  name: string;
}

type AppListProps = {
  apps: Apps[];
};

export function AppList({ apps }: AppListProps): JSX.Element {
  return (
    <ul className={styles.root}>
      <li>
        {apps.map(
          (app): JSX.Element => (
            <Link key={app.key} to={app.link}>{`${app.name} Component`}</Link>
          )
        )}
      </li>
    </ul>
  );
}
