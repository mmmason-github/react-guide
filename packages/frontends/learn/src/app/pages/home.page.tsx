/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/hook-use-state */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-multi-comp */

import { Link } from "react-router-dom";

import { AppList, Apps } from "../components/applist";

import styles from "../styles/pages/home.module.scss";

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

export default function HomePage(): JSX.Element {
  return (
    <div className={styles.root}>
      <h1>Home Page</h1>
      <h2>
        Projects
        <br />
        Learn react concepts
      </h2>
      <AppList apps={apps} />
      <h4>Test out authentication with a backend</h4>
      <Link to="/auth">Authentication Page</Link>
    </div>
  );
}
