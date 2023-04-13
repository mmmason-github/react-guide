/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/hook-use-state */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-multi-comp */

/*
 * Learned how to pass state deeply
 * Learned how to use a callback rather
 * Still have the problem of ->
 *
 * Cannot update a component (`App`) while rendering a different
 * component (`Form`)
 *
 * Error had to do with setState in form
 * Removing it cleared the error
 *
 * Maybe something to do with not cleaning up a state when removing
 * a component?
 */

import { useCallback, useState } from "react";

import styles from "../styles/components/login.module.scss";

interface User {
  username: string;
  password: string;
}

function AdminPanel(): JSX.Element {
  return (
    <div className={styles.admin}>
      <h1>Admin Page</h1>
    </div>
  );
}

type OnSubmitHandler = React.FormEventHandler<HTMLFormElement>;
type OnSubmitEvent = React.FormEvent<HTMLFormElement>;

type FormProps = {
  setPage: (formData: User) => void;
};

function Form({ setPage }: FormProps): JSX.Element {
  /*
   * Error fixed.
   * const [formData, setFormData] = useState({
   *   password: "",
   *   username: ""
   * });
   */

  function onSubmit(event: OnSubmitEvent): void {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      password: { value: string };
      username: { value: string };
    };
    // Fixed
    setPage({
      password: target.password.value,
      username: target.username.value
    });
    /*
     * Error fixed.
     * setFormData({
     *   password: target.password.value,
     *   username: target.username.value
     * });
     */
  }

  /*
   * Error fixed.
   * setPage(formData as User);
   */
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" placeholder="" type="text" />
      <label htmlFor="password">Password</label>
      <input id="password" placeholder="" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}

type LoginProps = {
  setPage: (formData: User) => void;
};

function LoginPanel({ setPage }: LoginProps): JSX.Element {
  return (
    <div className={styles.login}>
      <header>Login Page</header>
      <main>
        <Form setPage={setPage} />
      </main>
    </div>
  );
}

function UserPanel(): JSX.Element {
  return (
    <div className={styles.admin}>
      <h1>User Page</h1>
    </div>
  );
}

export default function App(): JSX.Element {
  const [isAdmin, setAdmin] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const setPage = useCallback((formData: User) => {
    const admin: User = {
      password: "admin",
      username: "admin"
    };

    if (
      admin.password === formData.password &&
      admin.username === formData.username
    ) {
      setAdmin(true);
      setLoggedIn(true);
    } else if (formData.password.length >= 6 && formData.username.length >= 6) {
      setAdmin(false);
      setLoggedIn(true);
    }
  }, []);

  let content: JSX.Element = <LoginPanel key={0} setPage={setPage} />;

  if (isAdmin && isLoggedIn) {
    content = <AdminPanel key={1} />;
  } else if (!isAdmin && isLoggedIn) {
    content = <UserPanel key={2} />;
  }

  return <div className={styles.root}>{content}</div>;
}
