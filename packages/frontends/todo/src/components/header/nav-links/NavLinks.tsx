import { Link } from "react-router-dom";
import Styles from "./NavLinks.module.scss";

type NavLinksProps = {
  path: string;
  text: string;
};
export function NavLinks({ path, text }: NavLinksProps) {
  return (
    <li className={Styles.root}>
      <Link to={path}>{text}</Link>
    </li>
  );
}
export default NavLinks;
