import React from "react";
import classes from "./Buttons.module.scss";
import { motion } from "framer-motion";
const Buttons = ({
  isActive,
  type,
  name,
  title,
  onClickHandler,
  value,
  totalAmount,
  className,
}) => {
  return (
    <motion.button
      key={title}
      onClick={onClickHandler}
      type={type}
      name={name}
      value={value}
      className={`${
        name === "btnSmall"
          ? classes.btnSmall
          : name === "btnSize"
          ? classes.btnSize
          : classes.btns
      } ${value === isActive ? classes.active : className}`}
    >
      {title}
      {totalAmount && ` (${totalAmount})`}
    </motion.button>
  );
};

export default Buttons;
