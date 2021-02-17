import React from "react";
import { Button } from "semantic-ui-react";
import "./CustomeButton.css";
const CustumeButton = ({ children, title, signUp, ...otherProps }) => {
  return (
    <Button
      primary
      className={signUp ? "sign-up-btn" : "custome-btn"}
      {...otherProps}
    >
      {title}
      {children}
    </Button>
  );
};
export default CustumeButton;
