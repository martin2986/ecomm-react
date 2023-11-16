import React from "react";
import classes from "./Buttons.module.scss";
const Buttons = ({ type, name, title, onClickHandler, value }) => {
  return (
    <button
      onClick={onClickHandler}
      type={type}
      name={name}
      className={name === "btnSmall" ? classes.btnSmall : classes.btns}
      value={value}
    >
      {title}
    </button>
  );
};

export default Buttons;
