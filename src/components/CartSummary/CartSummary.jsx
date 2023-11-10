import React from "react";
import classes from "./CartSummary.module.scss";
import Buttons from "../Buttons/Buttons";
import { Link } from "react-router-dom";
const CartSummary = ({ totalAmount }) => {
  const delivery = 13;
  const total = totalAmount + delivery;
  return (
    <div className={classes.summary}>
      <div className={classes.items}>
        <p>Order Summary</p>
        <p>${totalAmount}</p>
      </div>
      <div className={classes.items}>
        <p>Delivery</p>
        <p>${delivery}</p>
      </div>
      <div className={classes.items}>
        <h4>Total</h4>
        <p>${total}</p>
      </div>
      <Link to="/checkout">
        <Buttons title="GO TO CHECKOUT" type="button" />
      </Link>
      <div>
        <label htmlFor="discount">Apply discount (Optional)</label>
        <input type="text" id="discount" placeholder="Discount code" />
      </div>
      <Buttons title="Apply" name="btnSmall" type="button" className="btn" />
    </div>
  );
};

export default CartSummary;
