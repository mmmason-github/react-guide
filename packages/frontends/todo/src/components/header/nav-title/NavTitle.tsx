import Styles from "./NavTitle.module.scss";

type NavTitleProps = {
  title: string;
};
export function NavTitle({ title }: NavTitleProps) {
  return <h1 className={Styles.root}>{title}</h1>;
}
export default NavTitle;
