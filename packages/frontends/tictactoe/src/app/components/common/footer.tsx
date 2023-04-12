import styles from "../../styles/components/common/footer.module.scss";

export default function Footer(): JSX.Element {
  const github = "https://github.com/mmmason-github/",
    project = "react-guide/tree/main/packages/frontends/tictactoe";

  return (
    <footer className={styles.root}>
      <a href={github + project} rel="noreferrer" target="_blank">
        Source Code
      </a>
    </footer>
  );
}
