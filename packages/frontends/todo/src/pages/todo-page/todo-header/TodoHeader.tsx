import TodoHeaderButton from "./todo-header-button/TodoHeaderButton";
import TodoHeaderTitle from "./todo-header-title/TodoHeaderTitle";
import styles from "./TodoHeader.module.scss";

interface TodoHeaderProps {
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TodoHeader({ setToggleMenu }: TodoHeaderProps) {
  return (
    <header className={styles.root}>
      <nav>
        <TodoHeaderTitle />
        <TodoHeaderButton setToggleMenu={setToggleMenu} />
      </nav>
    </header>
  );
}
export default TodoHeader;
