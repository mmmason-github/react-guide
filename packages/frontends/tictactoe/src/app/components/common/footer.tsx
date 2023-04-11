import styles from "../../styles/components/common/footer.module.scss";

// eslint-disable-next-line @typescript-eslint/naming-convention
const Footer = (): JSX.Element => {
  const github: string = "https://github.com/mmmason-github/";
  const project: string = "react-guide/tree/main/packages/frontends/tictactoe";

  return (
    <footer className={styles.root}>
      <a href={github + project} target="_blank" rel="noreferrer">
        Source Code
      </a>
    </footer>
  );
};
export default Footer;
