import React from "react";
import classes from "./Input.module.scss";
const Input = ({
  id,
  handleChange,
  type,
  value,
  name,
  min,
  max,
  checked,
  placeholder,
  span,
  title,
}) => {
  return (
    <div className={classes.input}>
      <label htmlFor={id}>
        <input
          onChange={handleChange}
          type={type}
          id={id}
          value={value}
          name={name}
          min={min}
          max={max}
          checked={checked}
          placeholder={placeholder}
        />
        <span className={span}></span>
        {title}
      </label>
    </div>
  );
};

export default Input;
