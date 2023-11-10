import React from "react";
import CartItem from "../components/Cart/CartItem";
import CartSummary from "../components/CartSummary/CartSummary";
import { useSelector } from "react-redux";
const CartCheckout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const isItems = cartItems.length > 0;

  return (
    <div>
      {!isItems && <h2 style={{ textAlign: "center" }}>Your Cart is Empty</h2>}
      {isItems && (
        <div className="content">
          <div className="left">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="right">
            <CartSummary totalAmount={totalAmount} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartCheckout;
