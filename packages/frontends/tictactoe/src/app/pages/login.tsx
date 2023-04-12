import Form, { Inputs } from "../components/common/form";

import styles from "../styles/pages/login.module.scss";

export default function LoginPage(): JSX.Element {
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
}
