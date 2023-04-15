/* eslint-disable func-style */
/* eslint-disable no-inline-comments */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/no-multi-comp */
import { Link } from "react-router-dom";

import styles from "../styles/layouts/examples.module.scss";

const projects =
  "https://github.com/mmmason-github/react-guide/tree/main/packages/frontends";
const examples = "/learn/src/app/examples/";

type ExamplesLayoutProps = {
  children: React.ReactNode;
  example: string;
};

export default function ExamplesLayout({
  children,
  example
}: ExamplesLayoutProps): JSX.Element {
  // Set path -> "Examples"
  return (
    <main className={styles.root}>
      {children}
      <footer className={styles.root}>
        <Link to={`${projects + examples + example}.tsx`}>Source Code</Link>
      </footer>
    </main>
  );
}
