import { useState, useEffect } from "react";
import NavButton from "../nav-button/NavButton";
import NavMenu from "../nav-menu/NavMenu";
import NavTitle from "../nav-title/NavTitle";
import Styles from "./Navigation.module.scss";

type NavigationProps = {
  title: string;
};
export function Navigation({ title }: NavigationProps) {
  const [toggleMenu, setToggleMenu] = useState(true);
  const onToggle = () => {
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
    <nav className={Styles.root}>
      <NavTitle title={title} />
      <NavButton onToggle={onToggle} />
      {toggleMenu ? <NavMenu /> : null}
    </nav>
  );
}

export default Navigation;
