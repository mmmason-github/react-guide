/* eslint-disable no-use-before-define */

import { useEffect, type ReactNode } from "react";

import PathTracker from "../components/footer/path-tracker/PathTracker";
import RoleTracker from "../components/footer/role-tracker/RoleTracker";
import Styles from "./Pages.module.scss";
import TokenTracker from "../components/footer/token-tracker/TokenTracker";
import handleResize from "../utilities/resize";
import { Navigation } from "../components/header/navigation/Navigation";

type PagesProps = {
  // eslint-disable-next-line
  children?: ReactNode;
  className: { readonly [key: string]: string };
  title: string;
};
export function Pages({ children, className, title }: PagesProps) {
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={`${Styles.root} ${className.root}`}>
        <Navigation title={title} />
      </header>
      <main className={`${Styles.root} ${className.root}`}>{children}</main>
      <footer className={`${Styles.root} ${className.root}`}>
        <RoleTracker />
        <PathTracker />
        <TokenTracker />
      </footer>
    </>
  );
}
export default Pages;
