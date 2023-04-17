/* eslint-disable no-use-before-define */

import { useEffect, type ReactNode, useState } from "react";
import { Link } from "react-router-dom";

import Styles from "./Pages.module.scss";
import handleResize from "../utilities/resize";

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
        <section>
          Role:
          <span> Guest</span>
        </section>
        <section>
          Path:
          <span> /Todo</span>
        </section>
        <section>
          Token:
          <span> 1 minute</span>
        </section>
      </footer>
    </>
  );
}
export default Pages;

type NavigationProps = {
  title: string;
};
function Navigation({ title }: NavigationProps) {
  const [toggleMenu, setToggleMenu] = useState(true);
  const onToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  useEffect(() => {
    if (toggleMenu) {
      window.document.documentElement.style.setProperty(
        "--page-main-row-position",
        "3"
      );
    } else {
      window.document.documentElement.style.setProperty(
        "--page-main-row-position",
        "2 / 4"
      );
    }
  }, [toggleMenu]);

  return (
    <nav>
      <NavTitle title={title} />
      <NavMenuButton onToggleMenu={onToggleMenu} />
      {toggleMenu ? <NavMenu /> : null}
    </nav>
  );
}

type NavTitleProps = {
  title: string;
};
function NavTitle({ title }: NavTitleProps) {
  return <h1>{title}</h1>;
}

type NavMenuButtonProps = {
  onToggleMenu: () => void;
};
function NavMenuButton({ onToggleMenu }: NavMenuButtonProps) {
  return (
    <button type="button" onClick={onToggleMenu}>
      <svg
        className="bi bi-list"
        fill="currentColor"
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
}
function NavMenu() {
  const fakeAuth = true;
  const path = "/todo";
  return (
    <menu>
      <ul>
        <NavLinks path="/" text="Home" />
        <NavLinks path="/login" text="Login" />
        <NavLinks path="/register" text="Register" />
        {fakeAuth ? <NavLinks path="/todo" text="Todo" /> : null}
      </ul>
      {path ? (
        <ul>
          <NavLinks path="/todo/add" text="Add" />
          <NavLinks path="/todo/delete" text="Delete" />
          <NavLinks path="/todo/edit" text="Edit" />
          <NavLinks path="/todo/view" text="View" />
        </ul>
      ) : null}
    </menu>
  );
}
type NavLinksProps = {
  path: string;
  text: string;
};
function NavLinks({ path, text }: NavLinksProps) {
  return (
    <li>
      <Link to={path}>{text}</Link>
    </li>
  );
}
