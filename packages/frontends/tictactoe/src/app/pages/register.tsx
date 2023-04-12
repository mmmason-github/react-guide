import Form, { Inputs } from "../components/common/form";

import styles from "../styles/pages/register.module.scss";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function RegisterPage(): JSX.Element {
  const inputs: Inputs[] = [
    {
      id: "email",
      name: "email",
      text: "Email",
      type: "email"
    },
    {
      id: "first",
      name: "first",
      text: "First name",
      type: "text"
    },
    {
      id: "last",
      name: "last",
      text: "Last name",
      type: "text"
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
      <Form inputs={inputs} value="Register" />
    </section>
  );
}
