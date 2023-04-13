/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/hook-use-state */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-multi-comp */

import { useCallback, useState } from "react";

import {
  AdminPanel,
  LoginPanel,
  User,
  UserPanel
} from "../components/fake.login";

import styles from "../styles/pages/fake.login.module.scss";

export default function FakeLoginPage(): JSX.Element {
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
