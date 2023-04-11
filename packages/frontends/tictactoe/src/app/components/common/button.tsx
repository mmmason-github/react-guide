import styles from "../../styles/components/common/button.module.scss";

type Props = {
  children: string;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const Button = (props: Props): JSX.Element => {
  return <button className={styles.root}>{props.children}</button>;
};
export default Button;
