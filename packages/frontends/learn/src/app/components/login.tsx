/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/hook-use-state */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-multi-comp */

import { useNavigate } from "react-router-dom";

import styles from "../styles/components/login.module.scss";
import { useState } from "react";

type SubmitEvent = React.FormEvent<HTMLFormElement>;

interface LoginData {
  email: string;
  password: string;
}

interface LoginDataTarget {
  email: { value: string };
  password: { value: string };
}

type LoginProps = {
  isError: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Login({ isError, setError }: LoginProps): JSX.Element {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function getData(data: LoginData): Promise<boolean> {
    const headersList = {
      // eslint-disable-next-line prettier/prettier
      "Accept": "*/*",
      "Content-Type": "application/json",
      // eslint-disable-next-line prettier/prettier
      "Host": "http://localhost:4200/login",
      "User-Agent": "http://localhost:4200/login"
    };

    const response = await fetch(
      `/api/login?email=${data.email}&password=${data.password}`,
      {
        headers: headersList,
        method: "GET"
      }
    );

    const res = await response.json();
    setMessage(res.message);
    if (res.message === "found") {
      setError(false);
      return true;
    }
    setError(true);
    return false;
  }

  async function handleSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    const target = event.target as typeof event.target & LoginDataTarget;
    const loginData: LoginData = {
      email: target.email.value,
      password: target.password.value
    };
    if (await getData(loginData)) {
      navigate("/home");
    }
  }

  return (
    <>
      <h1 className={styles.root}>Login</h1>
      {isError ? (
        <div className={styles.root}>
          <h2>{message}</h2>
        </div>
      ) : null}
      <form
        action="/api/login/"
        className={styles.root}
        method="GET"
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
