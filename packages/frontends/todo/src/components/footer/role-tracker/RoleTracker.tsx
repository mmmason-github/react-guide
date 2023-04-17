import Styles from "./RoleTracker.module.scss";

function RoleTracker() {
  return (
    <section className={Styles.root}>
      Role:
      <span> Guest</span>
    </section>
  );
}
export default RoleTracker;
