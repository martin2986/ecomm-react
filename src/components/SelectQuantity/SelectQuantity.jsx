import React from "react";
import classes from "./SelectQuantity.module.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const SelectQuantity = (props) => {
  const showDelete = props.quantity === 1;
  return (
    <div className={classes.quantity}>
      <span onClick={props.onDecrease}>
        {showDelete ? <DeleteOutlinedIcon className={classes.icon} /> : "-"}
      </span>
      <p>{props.quantity}</p>
      <span onClick={props.onIncrease}>+</span>
    </div>
  );
};

export default SelectQuantity;
