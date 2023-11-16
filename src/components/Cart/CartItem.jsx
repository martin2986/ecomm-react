import React from "react";
import classes from "./CartItem.module.scss";
import SelectQuantity from "../SelectQuantity/SelectQuantity";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart";
const CartItem = ({ id, title, img1, price, quantity, size }) => {
  const defaultQuantity = 1;
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(
      cartAction.addItem({
        id,
        title,
        price,
        quantity: defaultQuantity,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(cartAction.removeItem(id));
  };
  return (
    <div className={classes.cartItem}>
      <img src={`http://${img1}`} alt="" />
      <div className={classes.details}>
        <p>{title}</p>
        <div className={classes.price}>${price}</div>
        <div className={classes.size}>{size}</div>
        <div>
          <SelectQuantity
            quantity={quantity}
            onIncrease={addItemHandler}
            onDecrease={removeItemHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
