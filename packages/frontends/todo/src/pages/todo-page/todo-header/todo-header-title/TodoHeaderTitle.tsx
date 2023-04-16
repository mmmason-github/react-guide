import styles from "./TodoHeaderTitle.module.scss";

export function TodoHeaderTitle() {
  return (
    <span className={styles.root}>
      <h1>Todo Application</h1>
    </span>
  );
}
export default TodoHeaderTitle;
