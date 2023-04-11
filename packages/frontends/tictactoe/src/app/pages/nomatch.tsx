import styles from "../styles/pages/nomatch.module.scss";

// eslint-disable-next-line @typescript-eslint/naming-convention
const NoMatchPage = (): JSX.Element => {
  return (
    <section className={styles.root}>
      <h1>Page Not Found</h1>
    </section>
  );
};
export default NoMatchPage;
