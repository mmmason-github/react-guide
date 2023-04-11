import Form, { Inputs } from "../components/common/form";
import styles from "../styles/pages/login.module.scss";

// eslint-disable-next-line @typescript-eslint/naming-convention
const LoginPage = (): JSX.Element => {
  const inputs: Inputs[] = [
    {
      id: "email",
      name: "email",
      text: "Email",
      type: "email"
    },
    {
      id: "password",
      name: "password",
      text: "Password",
      type: "password"
    }
  ];
  return (
    <section className={styles.root}>
      <Form inputs={inputs} value="Login" />
    </section>
  );
};
export default LoginPage;

/* <label htmlFor="fname">First name:</label>
<input type="text" id="fname" name="fname" />
<input type="submit" value="Submit" /> */
