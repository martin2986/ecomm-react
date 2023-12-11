import React from "react";
import classes from "./CartItem.module.scss";
import SelectQuantity from "../FIlteredProducts/SelectQuantity/SelectQuantity";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart";
import { motion } from "framer-motion";

const CartItem = ({ id, title, img1, price, quantity, size }) => {
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(
      cartAction.addItem({
        id,
        title,
        price,
        quantity,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(cartAction.removeItem(id));
  };
  return (
    <motion.div layout className={classes.cartItem}>
      <img src={`http://${img1}`} alt="" />
      <div className={classes.details}>
        <p>{title}</p>
        <div className={classes.price}>${price}</div>
        <div className={classes.size}>{size}</div>
        <div>
          {quantity && (
            <SelectQuantity
              quantity={quantity}
              onIncrease={addItemHandler}
              onDecrease={removeItemHandler}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
