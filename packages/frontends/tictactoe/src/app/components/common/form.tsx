import axios from "axios";

import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../../styles/components/common/form.module.scss";

export type Inputs = {
  id: string;
  name: string;
  text: string;
  type: string;
};

type DataType = {
  email: { value: string };
  first: { value: string | undefined };
  last: { value: string | undefined };
  method: string;
  password: { value: string };
} & {
  email: { value: string };
  method: string;
  password: { value: string };
};

type Props = {
  inputs: Array<Inputs>;
  value: string;
};

const postData = async (target: DataType): Promise<boolean> => {
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json"
  };

  const bodyContent = JSON.stringify({
    email: target.email ? target.email.value : "",
    first: target.first ? target.first.value : "",
    last: target.last ? target.last.value : "",
    password: target.password ? target.password.value : ""
  });

  const reqOptions = {
    data: bodyContent,
    headers: headersList,
    method: "POST",
    url: "api/user/create"
  };

  return (await axios.request(reqOptions)).data;
};

export default function Form({ inputs, value }: Props): JSX.Element {
  const navigate = useNavigate();
  const goToLogin = (): void => {
    navigate("/tictactoe");
  };
  const onSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
    event: React.SyntheticEvent
  ): void => {
    event.preventDefault();
    const target = event.target as typeof event.target & DataType;
    if (target.method && target.method === "post") {
      const response = postData(target);
      response
        .then(() => {
          goToLogin();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <form
      action="/api/user/create"
      className={styles.root}
      method="post"
      // eslint-disable-next-line react/jsx-no-bind
      onSubmit={onSubmit}
    >
      {inputs.map((input) => {
        return (
          <Fragment key={`${input.id}-fragment`}>
            <label htmlFor={input.name} key={`${input.id}-label`}>
              {input.text}
            </label>
            <input
              id={input.id}
              key={`${input.id}-input`}
              name={input.name}
              placeholder={input.text}
              type={input.type}
            />
          </Fragment>
        );
      })}
      <input type="submit" value={value} />
    </form>
  );
}
