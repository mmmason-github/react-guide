import styles from "../../styles/components/common/button.module.scss";

type Props = {
  children: string;
};

export default function Button({ children }: Props): JSX.Element {
  return (
    <button className={styles.root} type="button">
      {children}
    </button>
  );
}
