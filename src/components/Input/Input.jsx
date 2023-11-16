import React from "react";
import classes from "./Input.module.scss";
const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>
        <input
          onChange={props.handleChange}
          type={props.type}
          id={props.id}
          value={props.value}
          name={props.name}
          min={props.min}
          max={props.max}
          checked={props.checked}
          placeholder={props.placeholder}
        />
        <span className={props.span}></span>
        {props.title}
      </label>
    </div>
  );
};

export default Input;
