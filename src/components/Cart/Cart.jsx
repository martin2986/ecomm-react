import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import classes from "./Cart.module.scss";
import Buttons from "../Buttons/Buttons";
import Modal from "../../UI/Modal";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = useSelector((state) => state.cart.totalAmount);

  const isItems = cartItems.length > 0;
  return (
    <Modal onHideCart={props.onHideCart}>
      <div className={classes.cart}>
        <div className={classes.left}>
          {!isItems && (
            <div className={classes.cartBtn}>
              <Link to="products">
                <Buttons title="Start Shopping" />
              </Link>
              <Link to="products">
                <Buttons title="Login" />
              </Link>
            </div>
          )}
          {isItems && (
            <div className={classes.cartBtn}>
              <Link to="cart">
                <Buttons title="View bag" />
              </Link>
              <Link to="checkout">
                <Buttons title="Checkout" />
              </Link>
            </div>
          )}
          {!isItems && (
            <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>
              No Items in your cart
            </h4>
          )}
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
          {isItems && (
            <div className={classes.total}>
              <span>TOTAL</span>
              <span>${totalPrice}</span>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
