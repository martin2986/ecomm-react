import React from "react";
import classes from "./Buttons.module.scss";
const Buttons = (props) => {
  return (
    <button
      type={props.type}
      name={props.name}
      className={props.name === "btnSmall" ? classes.btnSmall : classes.btns}
    >
      {props.title}
    </button>
  );
};

export default Buttons;
