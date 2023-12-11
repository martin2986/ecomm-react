import React, { useEffect } from "react";
import CartItem from "./CartItem";
import classes from "./Cart.module.scss";
import Modal from "../../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../../store/cart-actions";
import LinkButton from "../Buttons/LinkButton";
const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalAmount);
  const isItems = cartItems.length > 0;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <Modal onHideCart={props.onHideCart}>
      <div className={classes.cart}>
        <div className={classes.left}>
          {!isItems && (
            <div className={classes.cartBtn}>
              <LinkButton to="/" title="Start Shopping" />
              <LinkButton to="/" title="Login" />
            </div>
          )}
          {isItems && (
            <div className={classes.cartBtn}>
              <LinkButton to="cart" title="View bag" />
              <LinkButton to="checkout" title="Checkout" />
            </div>
          )}
          {!isItems && (
            <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>
              No Items in your cart
            </h4>
          )}
          {cartItems.map((item) => (
            <CartItem {...item} key={item.id} />
          ))}
          {isItems && (
            <div className={classes.total}>
              <span>TOTAL</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
