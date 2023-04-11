import { Link } from "react-router-dom";
import Text from "../components/common/text";
import styles from "../styles/pages/index.module.scss";

// eslint-disable-next-line @typescript-eslint/naming-convention
const IndexPage = (): JSX.Element => {
  return (
    <section className={styles.root}>
      <div>
        <Text>Simple Tic Tac Toe Application written in React</Text>
        <Link to="register">Register</Link>
        <Link to="login">Login</Link>
      </div>
    </section>
  );
};
export default IndexPage;
