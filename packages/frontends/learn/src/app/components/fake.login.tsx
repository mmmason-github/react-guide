/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable no-restricted-globals */
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

import styles from "../styles/components/fake.login.module.scss";

export interface User {
  username: string;
  password: string;
}

export function AdminPanel(): JSX.Element {
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

export function Form({ setPage }: FormProps): JSX.Element {
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

export function LoginPanel({ setPage }: LoginProps): JSX.Element {
  return (
    <div className={styles.login}>
      <header>Login Page</header>
      <main>
        <Form setPage={setPage} />
      </main>
    </div>
  );
}

export function UserPanel(): JSX.Element {
  return (
    <div className={styles.admin}>
      <h1>User Page</h1>
    </div>
  );
}
