/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable func-style */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/no-multi-comp */

import { Link, Outlet, useLocation } from "react-router-dom";

import styles from "../styles/layouts/pages.module.scss";

import { getPath, setPathName } from "../slices/path";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { useEffect } from "react";

// Could of passed props but illustrating redux.

function Navbar(): JSX.Element {
  const path = useAppSelector(getPath);
  return (
    <nav>
      {path === "Home" ? (
        <Link to="/auth">Auth</Link>
      ) : (
        <Link to="/home">Home</Link>
      )}
      <Link to="/auth/admin">Admin</Link>
      <Link to="/auth/login">Login</Link>
      <Link to="/auth/register">Register</Link>
      <Link to="/auth/user">User</Link>
    </nav>
  );
}

function Footerbar(): JSX.Element {
  const path = useAppSelector(getPath);
  return (
    <ul>
      <li>Roles: Guest</li>
      <li>{`Path: ${path}`}</li>
      <li>JWT: 10 minutes</li>
    </ul>
  );
}

export default function PagesLayout(): JSX.Element {
  const location = useLocation();
  const dispatch = useAppDispatch();

  // Triggers Component Mount - Important.
  useEffect(() => {
    dispatch(setPathName(location.pathname));
  }, [dispatch, location.pathname]);

  return (
    <div className={styles.root}>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <footer>
        <Footerbar />
      </footer>
    </div>
  );
}
