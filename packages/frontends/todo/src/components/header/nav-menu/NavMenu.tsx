import { useLocation } from "react-router-dom";
import NavLinks from "../nav-links/NavLinks";
import Styles from "./NavMenu.module.scss";

export function NavMenu() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  return (
    <menu className={Styles.root}>
      {path !== "todo" ? (
        <ul>
          <NavLinks path="/" text="Home" />
          <NavLinks path="/login" text="Login" />
          <NavLinks path="/register" text="Register" />
          <NavLinks path="/todo/view" text="Todo" />
        </ul>
      ) : (
        <ul>
          <NavLinks path="/" text="Home" />
          <NavLinks path="/todo/add" text="Add" />
          <NavLinks path="/todo/delete" text="Delete" />
          <NavLinks path="/todo/edit" text="Edit" />
          <NavLinks path="/todo/view" text="View" />
        </ul>
      )}
    </menu>
  );
}
export default NavMenu;
