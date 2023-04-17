import Styles from "./TokenTracker.module.scss";

function TokenTracker() {
  return (
    <section className={Styles.root}>
      Token:
      <span> Expired</span>
    </section>
  );
}
export default TokenTracker;
