import React from "react";
import classes from "./Input.module.scss";
const Input = (props) => {
  return (
    <div className={classes.input}>
      <span>{props.initialValue}</span>
      <input
        onChange={props.handleChange}
        type={props.type}
        id={props.id}
        value={props.value}
        name={props.name}
        min={props.min}
        max={props.max}
        checked={props.checked}
      />
      {props.finalValue}
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default Input;
