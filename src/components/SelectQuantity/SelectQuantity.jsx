import React from "react";
import classes from "./SelectQuantity.module.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const SelectQuantity = ({ quantity, onDecrease, onIncrease }) => {
  const showDelete = quantity === 1;
  return (
    <div className={classes.quantity}>
      <span onClick={onDecrease}>
        {showDelete ? <DeleteOutlinedIcon className={classes.icon} /> : "-"}
      </span>
      <p>{quantity}</p>
      <span onClick={onIncrease}>+</span>
    </div>
  );
};

export default SelectQuantity;
