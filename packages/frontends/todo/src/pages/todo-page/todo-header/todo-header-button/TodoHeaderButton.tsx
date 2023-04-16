import styles from "./TodoHeaderButton.module.scss";

interface TodoHeaderButtonProps {
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TodoHeaderButton({ setToggleMenu }: TodoHeaderButtonProps) {
  const onClick = () => {
    setToggleMenu((prevState) => !prevState);
  };

  return (
    <button className={styles.root} type="button" onClick={onClick}>
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
export default TodoHeaderButton;
