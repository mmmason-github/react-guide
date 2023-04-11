import styles from "../../styles/components/common/text.module.scss";

type Props = {
  children: string;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const Text = (props: Props): JSX.Element => {
  return <p className={styles.root}>{props.children}</p>;
};
export default Text;
