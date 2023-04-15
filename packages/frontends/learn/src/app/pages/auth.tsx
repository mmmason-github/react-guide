/* eslint-disable func-style */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/no-multi-comp */
import { Link } from "react-router-dom";
import styles from "../styles/pages/auth.module.scss";

export default function AuthPage(): JSX.Element {
  return (
    <main className={styles.root}>
      <h1>Authentication Page</h1>
      <h2>Please Register or Login</h2>
      <Link to="/auth/register">Register</Link>
      <Link to="/auth/login">Login</Link>
    </main>
  );
}
