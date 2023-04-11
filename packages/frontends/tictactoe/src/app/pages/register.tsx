import Form, { Inputs } from "../components/common/form";

import styles from "../styles/pages/register.module.scss";

// eslint-disable-next-line @typescript-eslint/naming-convention
const RegisterPage = (): JSX.Element => {
  const inputs: Inputs[] = [
    {
      id: "email",
      name: "email",
      text: "Email",
      type: "email"
    },
    {
      id: "firstName",
      name: "firstName",
      text: "First name",
      type: "text"
    },
    {
      id: "lastName",
      name: "lastName",
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
};
export default RegisterPage;
