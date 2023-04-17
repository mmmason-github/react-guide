import type { ReactNode } from "react";
import Pages from "../Pages";
import Styles from "./TodoPages.module.scss";

type TodoPagesProps = {
  // eslint-disable-next-line
  children?: ReactNode;
  title: string;
};
export function TodoPages({ children, title }: TodoPagesProps) {
  return (
    <Pages className={Styles} title={title}>
      {children}
    </Pages>
  );
}
export default TodoPages;
