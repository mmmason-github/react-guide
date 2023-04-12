import styles from "../../styles/components/common/text.module.scss";

type Props = {
  children: string;
};

export default function Text({ children }: Props): JSX.Element {
  return <p className={styles.root}>{children}</p>;
}
