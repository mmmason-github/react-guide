/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/hook-use-state */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-multi-comp */

import { useNavigate } from "react-router-dom";

import styles from "../styles/components/auth.module.scss";

type SubmitEvent = React.FormEvent<HTMLFormElement>;

interface AuthData {
  email: string;
  password: string;
}

interface AuthDataTarget {
  email: { value: string };
  password: { value: string };
}

type AuthProps = {
  isError: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Auth({ isError, setError }: AuthProps): JSX.Element {
  const navigate = useNavigate();

  async function postData(data: AuthData): Promise<boolean> {
    const bodyContent = JSON.stringify({
      email: data.email,
      password: data.password
    });

    const headersList = {
      // eslint-disable-next-line prettier/prettier
      "Accept": "*/*",
      "Content-Type": "application/json",
      "User-Agent": "http://localhost:4200/auth"
    };

    const response = await fetch("/api/auth", {
      body: bodyContent,
      headers: headersList,
      method: "POST"
    });

    const res = await response.text();
    console.log(res);
    setError(false);
    return false;
  }

  async function handleSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    const target = event.target as typeof event.target & AuthDataTarget;
    const authData: AuthData = {
      email: target.email.value,
      password: target.password.value
    };
    if (await postData(authData)) {
      navigate("/home");
    }
  }

  return (
    <>
      <h1 className={styles.root}>Authentication</h1>
      {isError ? (
        <div className={styles.root}>
          <h2>Invalid</h2>
        </div>
      ) : null}
      <form
        action="api/auth/"
        className={styles.root}
        method="post"
        onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
