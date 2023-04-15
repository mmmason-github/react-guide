/* eslint-disable func-style */
/* eslint-disable max-lines-per-function */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/no-multi-comp */

import { Link } from "react-router-dom";

import styles from "../styles/pages/home.module.scss";

type Example = {
  key: number;
  name: string;
  to: string;
};

function ExamplesList(): JSX.Element {
  const examples: Example[] = [
    {
      key: 1,
      name: "About",
      to: "/examples/about"
    },
    {
      key: 2,
      name: "Button",
      to: "/examples/button"
    },
    {
      key: 3,
      name: "Calculator",
      to: "/examples/calculator"
    },
    {
      key: 4,
      name: "Counter",
      to: "/examples/counter"
    },
    {
      key: 5,
      name: "Path",
      to: "/examples/path"
    },
    {
      key: 6,
      name: "Profile",
      to: "/examples/profile"
    },
    {
      key: 7,
      name: "Shopping",
      to: "/examples/shopping"
    },
    {
      key: 8,
      name: "Tictactoe",
      to: "/examples/tictactoe"
    }
  ];
  return (
    <ul>
      {examples.map(
        (example): JSX.Element => (
          <li key={example.key}>
            <Link to={example.to}>{example.name}</Link>
          </li>
        )
      )}
    </ul>
  );
}

export default function HomePage(): JSX.Element {
  return (
    <main className={styles.root}>
      <h2>React Examples</h2>
      <ExamplesList />
    </main>
  );
}
