/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-multi-comp */

import { Link } from "react-router-dom";

import styles from "../styles/pages/home.module.scss";

interface Apps {
  key: number;
  link: string;
  name: string;
}

const apps: Apps[] = [
  {
    key: 0,
    link: "/about",
    name: "About"
  },
  {
    key: 1,
    link: "/button",
    name: "Button"
  },
  {
    key: 2,
    link: "/calculator",
    name: "Calculator"
  },
  {
    key: 3,
    link: "/fakelogin",
    name: "Fake Login"
  },
  {
    key: 4,
    link: "/profile",
    name: "Profile"
  },
  {
    key: 5,
    link: "/shopping",
    name: "Shopping"
  },
  {
    key: 6,
    link: "/tictactoe",
    name: "Tictactoe"
  },
  {
    key: 7,
    link: "/todo",
    name: "Todo"
  }
];

function AppList(): JSX.Element {
  return (
    <ul>
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

export default function HomePage(): JSX.Element {
  return (
    <div className={styles.root}>
      <h1>Home Page</h1>
      <h2>
        Projects
        <br />
        Learn react concepts
      </h2>
      <AppList />
    </div>
  );
}
