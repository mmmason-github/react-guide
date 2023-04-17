import { useLocation } from "react-router-dom";
import Styles from "./PathTracker.module.scss";

export function PathTracker() {
  const path = useLocation().pathname;
  return (
    <section className={Styles.root}>
      Path:
      <span> {path}</span>
    </section>
  );
}
export default PathTracker;
