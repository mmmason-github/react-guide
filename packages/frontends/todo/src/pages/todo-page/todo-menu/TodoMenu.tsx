import { Link } from "react-router-dom";

import styles from "./TodoMenu.module.scss";

export function TodoMenu() {
  return (
    <menu className={styles.root}>
      <ul>
        <li>
          <Link to="/todo/add">Add</Link>
        </li>
        <li>
          <Link to="/todo/add">Delete</Link>
        </li>
        <li>
          <Link to="/todo/add">Edit</Link>
        </li>
        <li>
          <Link to="/todo/add">List</Link>
        </li>
      </ul>
    </menu>
  );
}
export default TodoMenu;
