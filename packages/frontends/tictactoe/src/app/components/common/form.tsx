import { Fragment } from "react";
import styles from "../../styles/components/common/form.module.scss";

export type Inputs = {
  id: string;
  name: string;
  text: string;
  type: string;
};

type Props = {
  inputs: Array<Inputs>;
  value: string;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const Form = (props: Props): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (event: any): void => {
    event.preventDefault();

    const form: Record<string, string> = {};
    for (let i = 0; i < props.inputs.length; i++) {
      form[props.inputs[i].id] = event.target[i].value;
    }
    console.log(JSON.stringify(form));
  };

  return (
    <form className={styles.root} onSubmit={onSubmit}>
      {props.inputs.map(function (input, i) {
        return (
          <Fragment key={i + "fragment"}>
            <label htmlFor={input.name} key={i + "label"}>
              {input.text}
            </label>
            <input
              id={input.id}
              key={i + "input"}
              name={input.name}
              placeholder={input.text}
              type={input.type}
            />
          </Fragment>
        );
      })}
      <input type="submit" value={props.value} />
    </form>
  );
};
export default Form;
