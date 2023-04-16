import { useEffect, useState } from "react";

import TodoHeader from "./todo-header/TodoHeader";
import TodoMenu from "./todo-menu/TodoMenu";
import TodoSection from "./todo-section/TodoSection";
import handleResize from "../../utilities/resize";
import styles from "./TodoPage.module.scss";

export function TodoPage() {
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <>
      <TodoHeader setToggleMenu={setToggleMenu} />
      <main className={styles.root}>
        {toggleMenu ? <TodoMenu /> : null}
        <TodoSection />
      </main>
      <footer className={styles.root} />
    </>
  );
}
export default TodoPage;
