import { useState } from "react";
import { Icon } from "semantic-ui-react";

export const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <Icon className="right-direction" name="angle right" size="big" />
    </div>
  );
};

export const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <Icon className="left-direction" name="angle left" size="big" />
    </div>
  );
};

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (e) => {
    console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log({ values });

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ User: values });
    console.log(values);
    // callback();
  };

  return {
    onChange,
    onSubmit,
    values,
    setValues,
  };
};
